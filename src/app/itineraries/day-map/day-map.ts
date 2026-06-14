import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  ViewEncapsulation,
  afterNextRender,
  inject,
  input,
  viewChild,
} from '@angular/core';
import type { Map as LeafletMap } from 'leaflet';
import { MapPin } from '../itinerary.model';

@Component({
  selector: 'app-day-map',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: { class: 'day-map' },
  template: `
    <div #canvas class="day-map__canvas" role="group" [attr.aria-label]="'Map: ' + label()"></div>
    <ol class="day-map__legend mono">
      @for (pin of pins(); track pin.n) {
        <li>
          <span class="day-map__n">{{ pin.n }}</span>
          <span class="day-map__place">{{ pin.title }}</span>
        </li>
      }
    </ol>
  `,
  styles: `
    .day-map {
      display: block;
    }

    .day-map__canvas {
      height: clamp(10rem, 22vh, 13rem);
      background: var(--surface);
      border: 1px solid var(--line);
      /* Trap Leaflet's high internal z-indexes (panes/controls reach ~1000) in
         their own stacking context so they can't paint over the sticky day nav. */
      isolation: isolate;
    }

    .day-map__legend {
      list-style: none;
      margin: var(--space-xs) 0 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      gap: var(--space-2xs);
      font-size: var(--text-xs);
    }

    .day-map__legend li {
      display: flex;
      align-items: baseline;
      gap: var(--space-xs);
    }

    .day-map__legend time {
      color: var(--muted);
    }

    .day-map__place {
      color: var(--ink);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .day-map__n,
    .ds-pin {
      font-family: var(--font-mono);
      font-variant-numeric: tabular-nums;
    }

    .day-map__n {
      flex: none;
      display: grid;
      place-items: center;
      inline-size: 1.2rem;
      block-size: 1.2rem;
      background: var(--crimson);
      color: var(--bg);
      font-size: 0.7rem;
      font-weight: 600;
    }

    /* Leaflet builds pin/popup DOM outside this component's view, so these
       rules are intentionally global (encapsulation: none), scoped by class. */
    .ds-pin {
      display: grid;
      place-items: center;
      inline-size: 1.6rem;
      block-size: 1.6rem;
      background: var(--crimson);
      color: var(--bg);
      font-size: 0.8rem;
      font-weight: 700;
      border: 2px solid var(--bg);
      border-radius: 50% 50% 50% 0;
      transform: rotate(-45deg);
      box-shadow: 0 1px 4px oklch(0% 0 0 / 0.35);
    }

    .ds-pin span {
      transform: rotate(45deg);
    }

    .day-map .leaflet-container {
      font-family: var(--font-sans);
      background: var(--surface);
    }

    .day-map .leaflet-popup-content {
      margin: var(--space-xs) var(--space-sm);
      font-size: var(--text-sm);
      line-height: 1.4;
    }

    .day-map .leaflet-popup-content strong {
      color: var(--crimson-deep);
    }

    .day-map .leaflet-bar a {
      color: var(--ink);
    }
  `,
})
export class DayMap {
  readonly pins = input.required<MapPin[]>();
  /** Comma-joined stop titles, for the canvas aria-label. */
  readonly label = input.required<string>();

  private readonly canvas = viewChild.required<ElementRef<HTMLElement>>('canvas');
  private readonly destroyRef = inject(DestroyRef);
  private map?: LeafletMap;

  constructor() {
    // Defer map init until the canvas nears the viewport — a day can carry many
    // mini-maps, and loading every one's tiles up front would be wasteful.
    afterNextRender(() => {
      const host = this.canvas().nativeElement;
      const observer = new IntersectionObserver(
        (entries, obs) => {
          if (entries.some((e) => e.isIntersecting)) {
            obs.disconnect();
            void this.initMap(host);
          }
        },
        { rootMargin: '300px' },
      );
      observer.observe(host);
      this.destroyRef.onDestroy(() => observer.disconnect());
    });
    this.destroyRef.onDestroy(() => this.map?.remove());
  }

  private async initMap(host: HTMLElement): Promise<void> {
    const pins = this.pins();
    if (pins.length === 0) return;

    const mod = await import('leaflet');
    // Leaflet ships as UMD; under esbuild its API lands on `.default`.
    const L = (mod as unknown as { default?: typeof mod }).default ?? mod;

    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const map = L.map(host, {
      scrollWheelZoom: false,
      maxZoom: 16, // Esri Light Gray Canvas serves up to z16
      zoomAnimation: !reduced,
      fadeAnimation: !reduced,
      markerZoomAnimation: !reduced,
    });
    this.map = map;

    // Esri's Light Gray Canvas: a muted, editorial basemap (base + labels on top)
    // that lets the crimson pins read. Free, keyless, and — unlike Carto's CDN —
    // not on privacy-blocker lists.
    const esri = 'https://server.arcgisonline.com/ArcGIS/rest/services';
    const esriAttribution = 'Tiles &copy; Esri, &copy; OpenStreetMap contributors';
    L.tileLayer(`${esri}/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}`, {
      attribution: esriAttribution,
      maxZoom: 16,
    }).addTo(map);
    L.tileLayer(`${esri}/Canvas/World_Light_Gray_Reference/MapServer/tile/{z}/{y}/{x}`, {
      maxZoom: 16,
    }).addTo(map);

    // Separate any pins that share coordinates so every number stays visible.
    const seen = new Map<string, number>();
    const points = pins.map((pin) => {
      const key = `${pin.lat.toFixed(4)},${pin.lon.toFixed(4)}`;
      const dupes = seen.get(key) ?? 0;
      seen.set(key, dupes + 1);
      const offset = dupes * 0.00085;
      return { pin, lat: pin.lat + offset, lon: pin.lon + offset };
    });

    for (const { pin, lat, lon } of points) {
      const icon = L.divIcon({
        className: '',
        html: `<span class="ds-pin" title="${pin.n}. ${escapeHtml(pin.title)}"><span>${pin.n}</span></span>`,
        iconSize: [26, 26],
        iconAnchor: [13, 24],
        popupAnchor: [0, -22],
      });
      const marker = L.marker([lat, lon], { icon, title: `${pin.n}. ${pin.title}` })
        .addTo(map)
        .bindPopup(`<strong>${pin.n} · ${escapeHtml(pin.title)}</strong>`);
      marker.on('mouseover', () => marker.openPopup());
    }

    // Recompute size in case layout shifted after init (lazy images above, fonts),
    // which otherwise leaves the map showing gray gaps where tiles aren't placed.
    map.invalidateSize(false);

    if (points.length === 1) {
      map.setView([points[0].lat, points[0].lon], 14);
    } else {
      const bounds = L.latLngBounds(points.map((p) => [p.lat, p.lon] as [number, number]));
      map.fitBounds(bounds, { padding: [28, 28], maxZoom: 14, animate: false });
    }
  }
}

function escapeHtml(value: string): string {
  return value.replace(
    /[&<>"]/g,
    (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c] ?? c,
  );
}
