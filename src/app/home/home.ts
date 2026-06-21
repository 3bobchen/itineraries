import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  ElementRef,
  inject,
  Injector,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { ItineraryService } from '../itineraries/itinerary.service';
import { CityMarker } from '../itineraries/itinerary.model';
import type { GlobeHandle, GlobeMarker } from './globe';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="hero" (pointerenter)="hovering.set(true)" (pointerleave)="hovering.set(false)">
      <p class="brand-pill">Itineraries<span aria-hidden="true">.</span></p>

      <div class="stage" aria-hidden="true"></div>

      <!-- Pins live outside the aria-hidden canvas layer so they stay focusable.
           Positions are set imperatively by the globe each frame. -->
      <div class="markers" (focusin)="onFocusIn()" (focusout)="onFocusOut($event)"
           (keydown.escape)="onEscape()">
        @for (marker of markers(); track marker.city) {
          <div
            class="marker"
            [class.is-open]="openCity() === marker.city"
            [attr.data-city]="marker.city"
            [attr.data-status]="marker.status"
            data-occluded="false"
          >
            <button
              type="button"
              class="pin"
              [attr.aria-haspopup]="marker.status === 'available' ? 'menu' : 'dialog'"
              [attr.aria-expanded]="openCity() === marker.city"
              [attr.aria-label]="pinLabel(marker)"
              (click)="toggle(marker.city)"
            >
              <span class="pin-shadow" aria-hidden="true"></span>
              <span class="pin-marker" aria-hidden="true">
                <svg class="pin-shape" viewBox="0 0 24 34" width="24" height="34">
                  <path
                    class="pin-body"
                    d="M12 1C5.92 1 1 5.92 1 12c0 8.25 11 21 11 21s11-12.75 11-21C23 5.92 18.08 1 12 1Z"
                  />
                  <circle class="pin-hole" cx="12" cy="12" r="4.5" />
                </svg>
              </span>
              <span class="pin-label" aria-hidden="true">{{ marker.city }}</span>
            </button>

            @if (openCity() === marker.city) {
              @if (marker.status === 'available') {
                <div class="popover" role="menu" [attr.aria-label]="'Itineraries in ' + marker.city">
                  <p class="popover-head">
                    {{ marker.city }}
                    <span class="popover-count mono">{{ countLabel(marker) }}</span>
                  </p>
                  <ul class="popover-list">
                    @for (it of marker.itineraries; track it.slug) {
                      <li>
                        <a
                          class="popover-item"
                          role="menuitem"
                          [routerLink]="['/itineraries', it.slug]"
                        >
                          <span class="popover-item-title">{{ it.title }}</span>
                          <span class="popover-item-meta mono">{{ metaLabel(it) }}</span>
                        </a>
                      </li>
                    }
                  </ul>
                </div>
              } @else {
                <div
                  class="popover popover--planned"
                  role="note"
                  [attr.aria-label]="marker.city + ', itinerary coming soon'"
                >
                  <p class="popover-head">{{ marker.city }}</p>
                  <p class="popover-soon mono">Itinerary coming soon</p>
                </div>
              }
            }
          </div>
        }
      </div>

      <div class="overlay container">
        <img class="avatar" src="images/avatar.png" width="56" height="56" alt="Bob Chen" />
        <h1 class="title">
          Places I've been,
          <br/>
          Things that I've done
        </h1>
        <p class="lede">
          Itineraries reconstructed from my photos metadata by Claude
        </p>
        @if (failed()) {
          <p class="fallback mono" role="status">
            Your browser can’t render the interactive globe, but every itinerary is
            still a tap away.
          </p>
        }
      </div>
    </section>
  `,
  styles: `
    .hero {
      position: relative;
      min-height: 100svh;
      display: grid;
      isolation: isolate;
      background: oklch(13% 0 0); /* pure near-black per the No-Hidden-Warmth rule */
      overflow: clip;
    }

    .stage {
      position: absolute;
      inset: 0;
      z-index: 0;
    }

    /* Glassy wordmark, floated top-right over the globe. */
    .brand-pill {
      position: absolute;
      top: var(--space-lg);
      right: clamp(1rem, 4vw, 2.5rem);
      z-index: 4;
      margin: 0;
      padding: var(--space-xs) var(--space-md);
      border-radius: 999px;
      background: oklch(100% 0 0 / 0.1);
      border: 1px solid oklch(100% 0 0 / 0.22);
      backdrop-filter: blur(12px) saturate(1.3);
      -webkit-backdrop-filter: blur(12px) saturate(1.3);
      box-shadow: 0 4px 20px oklch(0% 0 0 / 0.3);
      color: oklch(100% 0 0);
      font-size: var(--text-md);
      font-weight: 700;
      letter-spacing: -0.01em;
    }

    .brand-pill span {
      color: var(--crimson);
    }

    /* --- Globe markers ------------------------------------------------------ */
    .markers {
      position: absolute;
      inset: 0;
      z-index: 2;
      pointer-events: none; /* drags pass through to the globe between pins */
    }

    .marker {
      position: absolute;
      top: 0;
      left: 0;
      will-change: transform;
      transition: opacity var(--dur-fast) var(--ease-out);
    }

    /* will-change makes each marker its own stacking context, so the open one
       must outrank its siblings for the popover to clear the other pins. */
    .marker.is-open {
      z-index: 5;
    }

    .marker[data-occluded='true'] {
      opacity: 0; /* on the far side of the globe; inert disables interaction */
    }

    /* The button's bottom-centre is anchored to the coordinate, so the teardrop's
       point lands exactly on the city while the balloon rises above it. */
    .pin {
      position: absolute;
      transform: translate(-50%, -100%);
      pointer-events: auto;
      width: 44px;
      height: 44px;
      margin: 0;
      padding: 0;
      border: 0;
      background: none;
      cursor: pointer;
      -webkit-tap-highlight-color: transparent;
    }

    /* The teardrop marker, pinned to the button's bottom-centre (the coordinate)
       and growing upward from its tip on hover/focus. */
    .pin-marker {
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
      transform-origin: bottom center;
      width: 24px;
      height: 34px;
      filter: drop-shadow(0 2px 3px oklch(0% 0 0 / 0.45));
      transition: transform var(--dur-fast) var(--ease-out);
    }

    .pin-shape {
      display: block;
    }

    .pin-body {
      fill: var(--crimson);
      stroke: oklch(100% 0 0);
      stroke-width: 1.5;
      transition: fill var(--dur-fast) var(--ease-out);
    }

    .pin-hole {
      fill: oklch(100% 0 0);
    }

    /* Soft contact shadow where the tip meets the surface. */
    .pin-shadow {
      position: absolute;
      left: 50%;
      bottom: -1px;
      width: 12px;
      height: 4px;
      transform: translateX(-50%);
      border-radius: 50%;
      background: oklch(0% 0 0 / 0.4);
      filter: blur(1.5px);
      transition: transform var(--dur-fast) var(--ease-out);
    }

    .pin:hover .pin-marker,
    .pin:focus-visible .pin-marker {
      transform: translateX(-50%) scale(1.18);
    }

    .pin:hover .pin-body {
      fill: var(--crimson-deep);
    }

    .pin:hover .pin-shadow,
    .pin:focus-visible .pin-shadow {
      transform: translateX(-50%) scaleX(1.3);
    }

    .pin:focus-visible {
      outline: none;
    }

    .pin:focus-visible .pin-body {
      stroke: var(--crimson);
      stroke-width: 3.5;
    }

    /* Planned (placeholder) markers — hollow + muted, no crimson fill. */
    .marker[data-status='planned'] .pin-body {
      fill: oklch(13% 0 0 / 0.55);
      stroke: oklch(100% 0 0 / 0.92);
    }

    .marker[data-status='planned'] .pin-hole {
      fill: oklch(100% 0 0 / 0.92);
    }

    .marker[data-status='planned'] .pin:hover .pin-body {
      fill: oklch(13% 0 0 / 0.4);
    }

    .marker[data-status='planned'] .pin:focus-visible .pin-body {
      stroke: var(--crimson);
    }

    .pin-label {
      position: absolute;
      bottom: calc(100% - 2px);
      left: 50%;
      transform: translateX(-50%) translateY(4px);
      white-space: nowrap;
      background: oklch(100% 0 0);
      color: var(--ink);
      font-size: var(--text-xs);
      font-weight: 600;
      padding: 2px 8px;
      border-radius: 3px;
      border: 1px solid var(--line);
      box-shadow: 0 1px 6px oklch(0% 0 0 / 0.3);
      opacity: 0;
      pointer-events: none;
      transition:
        opacity var(--dur-fast) var(--ease-out),
        transform var(--dur-fast) var(--ease-out);
    }

    .pin:hover .pin-label,
    .pin:focus-visible .pin-label {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }

    .popover {
      position: absolute;
      top: 22px;
      left: 0;
      transform: translateX(-50%);
      pointer-events: auto;
      width: 250px;
      max-width: 80vw;
      background: var(--bg);
      border: 1px solid var(--line);
      border-radius: 6px;
      box-shadow: 0 8px 28px oklch(0% 0 0 / 0.35);
      padding: var(--space-xs);
      z-index: 3;
    }

    .popover::before {
      content: '';
      position: absolute;
      top: -7px;
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
      width: 12px;
      height: 12px;
      background: var(--bg);
      border-left: 1px solid var(--line);
      border-top: 1px solid var(--line);
    }

    .popover-head {
      margin: 0;
      padding: var(--space-2xs) var(--space-xs) var(--space-xs);
      font-size: var(--text-sm);
      font-weight: 700;
      color: var(--ink);
      display: flex;
      align-items: baseline;
      gap: var(--space-xs);
      border-bottom: 1px solid var(--line);
    }

    .popover-count {
      font-size: var(--text-xs);
      font-weight: 500;
      color: var(--muted);
    }

    .popover--planned {
      width: max-content;
      max-width: 220px;
    }

    .popover--planned .popover-head {
      border-bottom: none;
      padding-bottom: var(--space-2xs);
    }

    .popover-soon {
      margin: 0;
      padding: 0 var(--space-xs) var(--space-2xs);
      font-size: var(--text-xs);
      color: var(--muted);
    }

    .popover-list {
      list-style: none;
      margin: 0;
      padding: var(--space-2xs) 0 0;
    }

    .popover-item {
      display: flex;
      flex-direction: column;
      gap: 2px;
      padding: var(--space-xs);
      border-radius: 4px;
      text-decoration: none;
      color: var(--ink);
      transition: background var(--dur-fast) var(--ease-out);
    }

    .popover-item:hover {
      background: var(--crimson-tint);
    }

    .popover-item:focus-visible {
      outline: none;
      background: var(--crimson-tint);
      box-shadow: inset 0 0 0 2px var(--crimson);
    }

    .popover-item-title {
      font-size: var(--text-sm);
      font-weight: 600;
    }

    .popover-item-meta {
      font-size: var(--text-xs);
      color: var(--muted);
    }

    /* --- Avatar ------------------------------------------------------------- */
    .avatar {
      display: block;
      width: 56px;
      height: 56px;
      border-radius: 50%;
      object-fit: cover;
      margin-bottom: var(--space-md);
      background: oklch(100% 0 0);
      box-shadow: 0 0 0 2px oklch(100% 0 0 / 0.18);
    }

    /* --- Hero copy ---------------------------------------------------------- */
    .overlay {
      position: relative;
      z-index: 1;
      align-self: end;
      width: 100%;
      padding-block: var(--space-3xl);
      pointer-events: none; /* clicks fall through to the globe… */
      color: oklch(98% 0 0);
    }

    .title {
      margin: 0;
      max-width: 20ch;
      font-size: var(--text-3xl);
      font-weight: 700;
      letter-spacing: -0.01em;
      text-shadow: 0 1px 24px oklch(0% 0 0 / 0.55);
    }

    .lede {
      margin: var(--space-md) 0 0;
      max-width: 56ch;
      font-size: var(--text-md);
      color: oklch(90% 0 0);
      text-shadow: 0 1px 18px oklch(0% 0 0 / 0.6);
    }

    .cta {
      pointer-events: auto; /* …but the link is clickable */
      display: inline-flex;
      align-items: center;
      gap: var(--space-xs);
      margin-top: var(--space-lg);
      padding: var(--space-sm) var(--space-md);
      background: var(--crimson);
      color: oklch(100% 0 0);
      font-size: var(--text-sm);
      font-weight: 600;
      text-decoration: none;
      border-radius: 2px;
      transition: background var(--dur-fast) var(--ease-out);
    }

    .cta:hover {
      background: var(--crimson-deep);
    }

    .cta:focus-visible {
      outline: 2px solid oklch(100% 0 0);
      outline-offset: 3px;
    }

    .fallback {
      margin: var(--space-lg) 0 0;
      max-width: 44ch;
      font-size: var(--text-sm);
      color: oklch(85% 0 0);
    }

    @media (max-width: 36rem) {
      .title {
        font-size: var(--text-2xl);
      }
    }
  `,
})
export class Home {
  private readonly itineraries = inject(ItineraryService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly injector = inject(Injector);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);

  protected readonly markers = signal<CityMarker[]>(this.itineraries.cityMarkers());

  /** City whose popover is open, or null. */
  protected readonly openCity = signal<string | null>(null);
  protected readonly hovering = signal(false);
  private readonly focusWithin = signal(false);

  /** Suspend auto-rotation whenever the user is aiming at, or using, a pin. */
  private readonly paused = computed(
    () => this.hovering() || this.focusWithin() || this.openCity() !== null,
  );

  protected readonly firstSlug = signal(this.itineraries.slugs()[0] ?? '');
  protected readonly firstTitle = signal(
    this.itineraries.bySlug(this.itineraries.slugs()[0] ?? '')?.title ?? '',
  );
  protected readonly failed = signal(false);

  constructor() {
    // afterNextRender only fires in the browser, so three.js — and the WebGPU
    // context it needs — never touches the SSR/prerender pass. The dynamic
    // import also keeps three out of the initial bundle.
    afterNextRender(() => {
      let handle: GlobeHandle | undefined;
      let destroyed = false;

      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      // Read the live, hydrated DOM nodes rather than a viewChildren signal: under
      // SSR hydration the query can hand back elements that get replaced, leaving
      // the globe animating detached nodes while the on-screen pin never moves.
      const host = this.host.nativeElement;
      const globeMarkers: GlobeMarker[] = this.markers().flatMap((marker) => {
        const el = host.querySelector<HTMLElement>(`.marker[data-city="${marker.city}"]`);
        return el ? [{ lat: marker.lat, lon: marker.lon, el }] : [];
      });

      const stage = host.querySelector<HTMLElement>('.stage');
      if (!stage) return;

      import('./globe')
        .then(({ createGlobe }) =>
          createGlobe(stage, {
            reduceMotion,
            markers: globeMarkers,
            shouldRotate: () => !this.paused(),
          }),
        )
        .then((created) => {
          if (destroyed) created.dispose();
          else handle = created;
        })
        .catch((error) => {
          console.error('Globe failed to initialise', error);
          this.failed.set(true);
        });

      // Light-dismiss: clicking anywhere that isn't a marker closes the popover.
      const onDocPointerDown = (event: PointerEvent) => {
        const target = event.target as Element | null;
        if (this.openCity() && !target?.closest('.marker')) {
          this.openCity.set(null);
        }
      };
      document.addEventListener('pointerdown', onDocPointerDown);

      this.destroyRef.onDestroy(() => {
        destroyed = true;
        handle?.dispose();
        document.removeEventListener('pointerdown', onDocPointerDown);
      });
    });
  }

  protected toggle(city: string): void {
    const next = this.openCity() === city ? null : city;
    this.openCity.set(next);
    if (next) {
      // Move focus into the freshly-rendered menu for keyboard users.
      afterNextRender(() => this.focusFirstItem(next), { injector: this.injector });
    }
  }

  protected onEscape(): void {
    const city = this.openCity();
    if (!city) return;
    this.openCity.set(null);
    this.query(`.marker[data-city="${city}"] .pin`)?.focus();
  }

  protected onFocusIn(): void {
    this.focusWithin.set(true);
  }

  protected onFocusOut(event: FocusEvent): void {
    const layer = this.query('.markers');
    const next = event.relatedTarget as Node | null;
    if (!next || !layer?.contains(next)) {
      this.focusWithin.set(false);
    }
  }

  protected pinLabel(marker: CityMarker): string {
    return marker.status === 'available'
      ? `${marker.city}, ${this.countLabel(marker)}`
      : `${marker.city}, itinerary coming soon`;
  }

  protected countLabel(marker: CityMarker): string {
    const n = marker.itineraries.length;
    return `${n} ${n === 1 ? 'itinerary' : 'itineraries'}`;
  }

  protected metaLabel(it: CityMarker['itineraries'][number]): string {
    return `${it.days} ${it.days === 1 ? 'day' : 'days'} · ${it.pace}`;
  }

  private focusFirstItem(city: string): void {
    this.query(`.marker[data-city="${city}"] .popover-item`)?.focus();
  }

  private query(selector: string): HTMLElement | null {
    return this.host.nativeElement.querySelector<HTMLElement>(selector);
  }
}
