import * as THREE from 'three/webgpu';
import {
  bumpMap,
  cameraPosition,
  color,
  max,
  mix,
  normalWorldGeometry,
  output,
  positionWorld,
  step,
  texture,
  uniform,
  uv,
  vec3,
  vec4,
} from 'three/tsl';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

/** A location to plot on the globe. `el` is the (Angular-owned) DOM element the
 *  globe positions each frame so it tracks that lat/lon as the planet turns. */
export interface GlobeMarker {
  lat: number;
  lon: number;
  el: HTMLElement;
}

export interface GlobeOptions {
  /** When true, the globe holds still (no idle auto-rotation). */
  reduceMotion: boolean;
  /** Markers to anchor to the surface and reposition every frame. */
  markers: GlobeMarker[];
  /** Polled each frame; return false to suspend auto-rotation (e.g. on hover). */
  shouldRotate?: () => boolean;
}

/** Handle returned by {@link createGlobe} so the caller can tear the scene down. */
export interface GlobeHandle {
  dispose(): void;
}

/** Longitude offset aligning our coordinates with the equirectangular texture's
 *  UVs on a three.js SphereGeometry (u=0 at lon −180). */
const LON_OFFSET = 180;

/** Convert geographic coordinates to a point on the unit sphere, matching the
 *  orientation of the equirectangular earth texture on a three.js SphereGeometry. */
function latLonToVector3(lat: number, lon: number): THREE.Vector3 {
  const phi = THREE.MathUtils.degToRad(90 - lat);
  const theta = THREE.MathUtils.degToRad(lon + LON_OFFSET);
  return new THREE.Vector3(
    -Math.sin(phi) * Math.cos(theta),
    Math.cos(phi),
    Math.sin(phi) * Math.sin(theta),
  );
}

/**
 * Builds the WebGPU/TSL Earth from the three.js `webgpu_tsl_earth` example,
 * scoped to a host element instead of the full window. Browser-only: the caller
 * must guarantee this never runs during SSR.
 *
 * @param host  element the canvas is appended to and sized against
 * @param options  motion preference, surface markers, and the rotation gate
 */
export async function createGlobe(host: HTMLElement, options: GlobeOptions): Promise<GlobeHandle> {
  const { reduceMotion, markers, shouldRotate } = options;
  let width = host.clientWidth || 1;
  let height = host.clientHeight || 1;

  const camera = new THREE.PerspectiveCamera(25, width / height, 0.1, 100);
  camera.position.set(4.5, 2, 3);

  const scene = new THREE.Scene();

  // A softer key light plus an even ambient fill: keeps the planet fully lit in
  // daytime without the harsh specular hot-spot a strong head-on sun produces.
  const sun = new THREE.DirectionalLight('#ffffff', 1.1);
  sun.position.set(0, 0, 3);
  scene.add(sun);
  scene.add(new THREE.AmbientLight('#ffffff', 1.1));

  // Uniforms — tweakable atmosphere + roughness tuning. Higher roughness keeps
  // the oceans from mirroring the sun back as a bright central glint.
  const atmosphereDayColor = uniform(color('#4db2ff'));
  const roughnessLow = uniform(0.55);
  const roughnessHigh = uniform(0.7);

  const textureLoader = new THREE.TextureLoader();
  const resolve = (path: string) => new URL(path, document.baseURI).href;
  const dayTexture = textureLoader.load(resolve('textures/planets/earth_day_4096.jpg'));
  dayTexture.colorSpace = THREE.SRGBColorSpace;
  dayTexture.anisotropy = 8;

  const bumpRoughnessCloudsTexture = textureLoader.load(
    resolve('textures/planets/earth_bump_roughness_clouds_4096.jpg'),
  );
  bumpRoughnessCloudsTexture.anisotropy = 8;

  // Fresnel rim term shared by globe + atmosphere. The original example also
  // tracked sun orientation to fade between day, twilight, and the night-lights
  // texture; here the planet is always daytime, so we keep the sun out of the
  // colour entirely and light the viewer-facing hemisphere by tracking the sun
  // to the camera in the animation loop.
  const viewDirection = positionWorld.sub(cameraPosition).normalize();
  const fresnel = viewDirection.dot(normalWorldGeometry).abs().oneMinus().toVar();

  const globeMaterial = new THREE.MeshStandardNodeMaterial();

  const cloudsStrength = texture(bumpRoughnessCloudsTexture, uv()).b.smoothstep(0.2, 1);
  globeMaterial.colorNode = mix(texture(dayTexture), vec3(1), cloudsStrength.mul(2));

  const roughness = max(texture(bumpRoughnessCloudsTexture).g, step(0.01, cloudsStrength));
  globeMaterial.roughnessNode = roughness.remap(0, 1, roughnessLow, roughnessHigh);

  // Day surface everywhere, with a blue atmospheric rim that wraps the whole
  // disc (fresnel only — no sun term, so no terminator/night side).
  const atmosphereMix = fresnel.pow(2).clamp(0, 1);
  const finalOutput = mix(output.rgb, atmosphereDayColor, atmosphereMix);
  globeMaterial.outputNode = vec4(finalOutput, output.a);

  const bumpElevation = max(texture(bumpRoughnessCloudsTexture).r, cloudsStrength);
  globeMaterial.normalNode = bumpMap(bumpElevation);

  const sphereGeometry = new THREE.SphereGeometry(1, 64, 64);
  const globe = new THREE.Mesh(sphereGeometry, globeMaterial);
  scene.add(globe);

  // One invisible anchor per marker, parented to the globe so it inherits the
  // planet's rotation. We read each anchor's world position every frame and
  // place the matching DOM element over it.
  const markerStates = markers.map((marker) => {
    const anchor = new THREE.Object3D();
    anchor.position.copy(latLonToVector3(marker.lat, marker.lon));
    globe.add(anchor);
    return { marker, anchor, visible: true };
  });

  const atmosphereMaterial = new THREE.MeshBasicNodeMaterial({
    side: THREE.BackSide,
    transparent: true,
  });
  const alpha = fresnel.remap(0.73, 1, 1, 0).pow(3);
  atmosphereMaterial.outputNode = vec4(atmosphereDayColor, alpha);

  const atmosphere = new THREE.Mesh(sphereGeometry, atmosphereMaterial);
  atmosphere.scale.setScalar(1.04);
  scene.add(atmosphere);

  const renderer = new THREE.WebGPURenderer({ antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(width, height);
  renderer.setClearColor(0x000000, 0); // transparent — host background shows through
  await renderer.init(); // resolves once WebGPU (or the WebGL2 fallback) is ready

  // Style the canvas here rather than in component CSS: three injects it at
  // runtime, so it never receives Angular's view-encapsulation attribute.
  renderer.domElement.style.display = 'block';
  renderer.domElement.style.touchAction = 'none';
  host.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.minDistance = 2;
  controls.maxDistance = 12;

  const timer = new THREE.Timer();
  timer.connect(document);

  // Scratch vectors reused each frame to avoid per-frame allocation.
  const worldPos = new THREE.Vector3();
  const toCamera = new THREE.Vector3();

  function updateMarkers() {
    for (const state of markerStates) {
      state.anchor.getWorldPosition(worldPos);

      // A surface point is occluded once it tips onto the far hemisphere: its
      // outward normal (≈ its position) stops facing the camera.
      toCamera.copy(camera.position).sub(worldPos).normalize();
      const visible = worldPos.clone().normalize().dot(toCamera) > 0;

      if (visible !== state.visible) {
        state.visible = visible;
        // `inert` removes the element from tab order, clicks, and the a11y tree
        // in one go — exactly what an off-screen pin needs.
        state.marker.el.inert = !visible;
        state.marker.el.dataset['occluded'] = String(!visible);
      }

      const ndc = worldPos.project(camera);
      const x = (ndc.x * 0.5 + 0.5) * width;
      const y = (-ndc.y * 0.5 + 0.5) * height;
      state.marker.el.style.transform = `translate(${x}px, ${y}px)`;
    }
  }

  renderer.setAnimationLoop(() => {
    timer.update();
    if (!reduceMotion && (shouldRotate?.() ?? true)) {
      globe.rotation.y += timer.getDelta() * 0.025;
    }
    // Keep the sun behind the viewer so the hemisphere on screen is always the
    // fully-lit day side, however the camera is orbited.
    sun.position.copy(camera.position);
    controls.update();
    renderer.render(scene, camera);
    updateMarkers();
  });

  const resizeObserver = new ResizeObserver(() => {
    width = host.clientWidth || 1;
    height = host.clientHeight || 1;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  });
  resizeObserver.observe(host);

  return {
    dispose() {
      resizeObserver.disconnect();
      renderer.setAnimationLoop(null);
      controls.dispose();
      timer.dispose();
      sphereGeometry.dispose();
      globeMaterial.dispose();
      atmosphereMaterial.dispose();
      dayTexture.dispose();
      bumpRoughnessCloudsTexture.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    },
  };
}
