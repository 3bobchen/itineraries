import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  effect,
  ElementRef,
  inject,
  Injector,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { ItineraryService } from '../itineraries/itinerary.service';
import { CityMarker } from '../itineraries/itinerary.model';
import type { GlobeHandle, GlobeMarker } from './globe';
import { FLIGHTS, FlightRoute } from '../flights/flights.data';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="hero" (pointerenter)="hovering.set(true)" (pointerleave)="hovering.set(false)">
      <!-- Mobile top bar: always visible on mobile -->
      <div class="mobile-top-bar">
        <header class="header">
          <a
            href="https://www.instagram.com/3bobchen/"
            target="_blank"
            rel="noopener"
            class="avatar-link"
            aria-label="Bob Chen on Instagram"
          >
            <img class="avatar" src="images/avatar.png" width="44" height="44" alt="Bob Chen" />
          </a>
          <div class="header-text">
            @if (mode() === 'itineraries') {
              <h1 class="main-title">Travel Itineraries<span class="dot">.</span></h1>
              <p class="subtitle">A travel log compiled with AI from camera roll metadata</p>
            } @else {
              <h1 class="main-title">Flighty Passport<span class="dot">.</span></h1>
              <p class="subtitle">Flight routes across my travels exported from Flighty</p>
            }
          </div>
        </header>
        <div class="mobile-actions">
          <!-- Toggle mode switcher -->
          <div class="mode-switcher">
            <button
              type="button"
              class="switch-btn"
              [class.is-active]="mode() === 'itineraries'"
              (click)="setMode('itineraries')"
            >
              Itineraries
            </button>
            <button
              type="button"
              class="switch-btn"
              [class.is-active]="mode() === 'flights'"
              (click)="setMode('flights')"
            >
              Flights
            </button>
          </div>
          <!-- Filter toggle button -->
          <button
            type="button"
            class="filter-toggle"
            [class.is-open]="menuOpen()"
            (click)="toggleMenu()"
            [attr.aria-label]="menuOpen() ? 'Close filter panel' : 'Open filter panel'"
            [attr.aria-expanded]="menuOpen()"
          >
            @if (menuOpen()) {
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            } @else {
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="4" y1="6" x2="20" y2="6"></line>
                <line x1="7" y1="12" x2="17" y2="12"></line>
                <line x1="10" y1="18" x2="14" y2="18"></line>
              </svg>
            }
          </button>
        </div>
      </div>

      <!-- Desktop header: inside the dashboard overlay -->
      <div class="desktop-header">
        <header class="header">
          <a
            href="https://www.instagram.com/3bobchen/"
            target="_blank"
            rel="noopener"
            class="avatar-link"
            aria-label="Bob Chen on Instagram"
          >
            <img class="avatar" src="images/avatar.png" width="44" height="44" alt="Bob Chen" />
          </a>
          <div class="header-text">
            @if (mode() === 'itineraries') {
              <h1 class="main-title">Travel Itineraries<span class="dot">.</span></h1>
              <p class="subtitle">A travel log compiled with AI from camera roll metadata</p>
            } @else {
              <h1 class="main-title">Flighty Passport<span class="dot">.</span></h1>
              <p class="subtitle">Flight routes across my travels exported from Flighty</p>
            }
          </div>
        </header>
        <!-- Desktop mode switcher -->
        <div class="mode-switcher mode-switcher--desktop">
          <button
            type="button"
            class="switch-btn"
            [class.is-active]="mode() === 'itineraries'"
            (click)="setMode('itineraries')"
          >
            Itineraries
          </button>
          <button
            type="button"
            class="switch-btn"
            [class.is-active]="mode() === 'flights'"
            (click)="setMode('flights')"
          >
            Flights
          </button>
        </div>
      </div>

      <div class="dashboard" [class.is-open]="menuOpen()">

        <div class="glass-card">
          @if (mode() === 'itineraries') {
            <div class="itineraries-section">
              <div class="flight-stats">
                <div class="stat-card">
                  <span class="stat-value mono">30</span>
                  <span class="stat-label">countries</span>
                </div>
                <div class="stat-card">
                  <span class="stat-value mono">5</span>
                  <span class="stat-label">continents</span>
                </div>
                <div class="stat-card">
                  <span class="stat-value mono">{{ itineraryCount }}</span>
                  <span class="stat-label">itineraries</span>
                </div>
              </div>

              <h2 class="section-title">Destinations</h2>
              <div class="itineraries-list">
                @for (group of groupedMarkers(); track group.country) {
                  <div class="country-group">
                    <h3 class="country-group-title mono">{{ group.country }}</h3>
                    <div class="country-group-list">
                      @for (marker of group.markers; track marker.city) {
                        <button
                          type="button"
                          (click)="selectCity(marker.city)"
                          class="itinerary-link"
                          [class.is-active]="openCity() === marker.city"
                        >
                          <span class="itinerary-bullet" aria-hidden="true"></span>
                          <div class="itinerary-info">
                            <span class="itinerary-title">{{ marker.city }}</span>
                            <span class="itinerary-meta mono">
                              {{ marker.status === 'available' ? countLabel(marker) : 'Planned' }}
                            </span>
                          </div>
                        </button>
                      }
                    </div>
                  </div>
                }
              </div>
            </div>
          } @else {
            <div class="itineraries-section">
              <div class="flight-stats">
                <div class="stat-card">
                  <span class="stat-value mono">362,636 km</span>
                  <span class="stat-label">on planes</span>
                </div>
                <div class="stat-card">
                  <span class="stat-value mono">20d 11h</span>
                  <span class="stat-label">flight time</span>
                </div>
                <div class="stat-card">
                  <span class="stat-value mono">43</span>
                  <span class="stat-label">unique airports</span>
                </div>
              </div>

              <h2 class="section-title">Flights taken</h2>

              <!-- Year filter pills scrolling track -->
              <div class="year-filters">
                @for (year of flightYears(); track year) {
                  <button
                    type="button"
                    class="filter-pill"
                    [class.is-active]="selectedYear() === year"
                    (click)="selectYear(year)"
                  >
                    {{ year }}
                  </button>
                }
              </div>

              <div class="itineraries-list">
                @for (flight of filteredFlights(); track flight.id) {
                  <button
                    type="button"
                    (click)="selectFlight(flight.id)"
                    class="itinerary-link"
                    [class.is-active]="activeFlightId() === flight.id"
                  >
                    <span class="itinerary-bullet" aria-hidden="true"></span>
                    <div class="itinerary-info">
                      <span class="itinerary-title">{{ flight.fromAirport }} ➔ {{ flight.toAirport }}</span>
                      <span class="itinerary-meta mono">
                        {{ flight.carrier }} · {{ flight.flightNumber }}
                      </span>
                    </div>
                  </button>
                }
              </div>
            </div>
          }
        </div>

        @if (failed()) {
          <p class="fallback mono" role="status">
            Your browser can’t render the interactive globe, but every itinerary is
            still a tap away.
          </p>
        }
      </div>

      <div class="globe-container">
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
      </div>
    </section>
  `,
  styles: `
    .hero {
      position: relative;
      min-height: 100svh;
      display: grid;
      grid-template-columns: 1fr;
      isolation: isolate;
      background: oklch(13% 0 0); /* pure near-black per the No-Hidden-Warmth rule */
      overflow: clip;
    }

    /* ── Mobile top bar ── */
    .mobile-top-bar {
      display: none;
    }

    @media (max-width: 63.99rem) {
      .mobile-top-bar {
        display: flex;
        flex-direction: column;
        gap: var(--space-sm);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        z-index: 5;
        padding: var(--space-md) var(--space-md) var(--space-sm);
        background: oklch(13% 0 0 / 0.85);
        backdrop-filter: blur(16px) saturate(1.3);
        -webkit-backdrop-filter: blur(16px) saturate(1.3);
        border-bottom: 1px solid oklch(100% 0 0 / 0.06);
        color: oklch(98% 0 0);
      }

      .mobile-top-bar .header {
        margin-bottom: 0;
      }

      .mobile-actions {
        display: flex;
        align-items: center;
        gap: var(--space-sm);
      }
    }

    /* ── Desktop header (inside dashboard overlay) ── */
    .desktop-header {
      display: none;
    }

    @media (min-width: 64rem) {
      .desktop-header {
        display: flex;
        flex-direction: column;
        gap: var(--space-md);
        position: absolute;
        top: var(--space-xl);
        left: var(--space-xl);
        width: 420px;
        z-index: 4;
        color: oklch(98% 0 0);
        pointer-events: auto;
      }

      .desktop-header .header {
        margin-bottom: 0;
      }
    }

    /* ── Mode switcher ── */
    .mode-switcher {
      display: flex;
      border-radius: 999px;
      padding: 3px;
      background: oklch(100% 0 0 / 0.05);
      border: 1px solid oklch(100% 0 0 / 0.15);
      backdrop-filter: blur(12px) saturate(1.3);
      -webkit-backdrop-filter: blur(12px) saturate(1.3);
      box-shadow: 0 4px 20px oklch(0% 0 0 / 0.3);
    }

    .mode-switcher--desktop {
      display: none;
    }

    @media (min-width: 64rem) {
      .mode-switcher--desktop {
        display: flex;
        width: fit-content;
      }
    }

    @media (max-width: 63.99rem) {
      .mode-switcher {
        flex: 1;
      }

      .switch-btn {
        flex: 1;
        text-align: center;
      }
    }

    .switch-btn,
    .filter-pill {
      font-family: inherit;
      cursor: pointer;
      color: oklch(75% 0 0);
      font-weight: 700;
      border-radius: 999px;
      transition: all var(--dur-fast) var(--ease-out);
    }

    .switch-btn {
      background: none;
      border: none;
      padding: var(--space-xs) var(--space-md);
      font-size: var(--text-xs);
    }

    .switch-btn:hover {
      color: oklch(100% 0 0);
    }

    .switch-btn.is-active {
      background: var(--primary);
      color: oklch(100% 0 0);
      box-shadow: 0 2px 10px oklch(48% 0.13 150 / 0.3);
    }

    /* ── Filter toggle button (mobile/tablet) ── */
    .filter-toggle {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 38px;
      height: 38px;
      border-radius: 50%;
      border: 1px solid oklch(100% 0 0 / 0.15);
      background: oklch(100% 0 0 / 0.05);
      backdrop-filter: blur(12px) saturate(1.3);
      -webkit-backdrop-filter: blur(12px) saturate(1.3);
      box-shadow: 0 4px 20px oklch(0% 0 0 / 0.3);
      color: oklch(90% 0 0);
      cursor: pointer;
      flex-shrink: 0;
      transition: all var(--dur-fast) var(--ease-out);
    }

    .filter-toggle:hover {
      color: oklch(100% 0 0);
      background: oklch(100% 0 0 / 0.1);
    }

    .filter-toggle.is-open {
      background: var(--primary);
      border-color: var(--primary);
      color: oklch(100% 0 0);
      box-shadow: 0 2px 10px oklch(48% 0.13 150 / 0.3);
    }

    /* ── Dashboard (filter panel) ── */
    .dashboard {
      position: relative;
      z-index: 3;
      display: flex;
      flex-direction: column;
      gap: var(--space-lg);
      padding: var(--space-xl) var(--space-lg) var(--space-lg);
      color: oklch(98% 0 0);
      overflow-y: auto;
      max-height: 100svh;
      box-sizing: border-box;
    }

    @media (max-width: 63.99rem) {
      .dashboard {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100svh;
        max-height: 100svh;
        padding: 120px var(--space-md) var(--space-lg);
        background: oklch(13% 0 0 / 0.88);
        backdrop-filter: blur(24px) saturate(1.2);
        -webkit-backdrop-filter: blur(24px) saturate(1.2);
        opacity: 0;
        pointer-events: none;
        transform: translateY(12px);
        transition:
          opacity var(--dur-medium) var(--ease-out),
          transform var(--dur-medium) var(--ease-out);
      }

      .dashboard.is-open {
        opacity: 1;
        pointer-events: auto;
        transform: translateY(0);
      }
    }

    @media (min-width: 64rem) {
      .dashboard {
        position: absolute;
        top: calc(var(--space-xl) + 100px);
        left: var(--space-xl);
        width: 420px;
        max-height: calc(100svh - var(--space-3xl) - 60px);
        pointer-events: none;
      }

      .glass-card {
        pointer-events: auto;
      }
    }

    .header {
      margin-bottom: var(--space-xs);
      display: flex;
      align-items: center;
      gap: var(--space-md);
    }

    .avatar-link {
      display: block;
      position: relative;
      border-radius: 50%;
      padding: 2px;
      background: oklch(100% 0 0);
      box-shadow: 0 4px 12px oklch(0% 0 0 / 0.3);
      transition: transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out);
      flex-shrink: 0;
    }

    .avatar-link::before {
      content: '';
      position: absolute;
      inset: -2px;
      border-radius: 50%;
      background: var(--primary);
      opacity: 0;
      z-index: -1;
      filter: blur(8px);
      transition: opacity var(--dur-fast) var(--ease-out);
    }

    .avatar-link:hover {
      transform: scale(1.08) rotate(-3deg);
      box-shadow: 0 6px 16px oklch(0% 0 0 / 0.45);
    }

    .avatar-link:hover::before {
      opacity: 0.6;
    }

    .avatar-link:focus-visible {
      outline: 2px solid oklch(100% 0 0);
      outline-offset: 4px;
    }

    .avatar {
      display: block;
      width: 44px;
      height: 44px;
      border-radius: 50%;
      object-fit: cover;
      border: 1px solid oklch(10% 0 0 / 0.5);
    }

    .header-text {
      display: flex;
      flex-direction: column;
    }

    .main-title {
      font-size: var(--text-xl);
      font-weight: 800;
      letter-spacing: -0.02em;
      color: oklch(100% 0 0);
      margin: 0;
    }

    .main-title .dot {
      color: var(--primary);
    }

    .subtitle {
      font-size: var(--text-xs);
      color: oklch(75% 0 0);
      margin: var(--space-xs) 0 0;
      line-height: 1.4;
    }

    .glass-card {
      background: oklch(100% 0 0 / 0.03);
      border: 1px solid oklch(100% 0 0 / 0.08);
      border-radius: 12px;
      backdrop-filter: blur(20px) saturate(1.2);
      -webkit-backdrop-filter: blur(20px) saturate(1.2);
      padding: var(--space-md);
      display: flex;
      flex-direction: column;
      gap: var(--space-md);
      box-shadow: 0 8px 32px oklch(0% 0 0 / 0.25);
    }

    .section-title {
      font-size: var(--text-xs);
      font-weight: 700;
      color: var(--primary);
      margin: 0 0 var(--space-xs);
    }

    .flight-stats {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: var(--space-2xs);
      margin-bottom: var(--space-md);
      padding-bottom: var(--space-xs);
      border-bottom: 1px solid oklch(100% 0 0 / 0.08);
    }

    .stat-card {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 2px;
      padding: var(--space-xs);
      background: oklch(100% 0 0 / 0.03);
      border: 1px solid oklch(100% 0 0 / 0.06);
      border-radius: 6px;
    }

    .stat-value {
      font-size: var(--text-xs);
      font-weight: 700;
      color: var(--primary);
      white-space: nowrap;
    }

    .stat-label {
      font-size: 8px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: oklch(100% 0 0 / 0.45);
    }



    .year-filters {
      display: flex;
      gap: 6px;
      overflow-x: auto;
      padding-bottom: 8px;
      border-bottom: 1px solid oklch(100% 0 0 / 0.08);
      margin-bottom: var(--space-xs);
      scrollbar-width: none; /* Firefox */
    }

    .year-filters::-webkit-scrollbar {
      display: none; /* Safari/Chrome */
    }

    .filter-pill {
      background: oklch(100% 0 0 / 0.04);
      border: 1px solid oklch(100% 0 0 / 0.1);
      padding: 4px 10px;
      font-size: 11px;
      white-space: nowrap;
    }

    .filter-pill:hover {
      color: oklch(100% 0 0);
      background: oklch(100% 0 0 / 0.1);
    }

    .filter-pill.is-active {
      background: var(--primary);
      border-color: var(--primary);
      color: oklch(100% 0 0);
      box-shadow: 0 2px 8px oklch(48% 0.13 150 / 0.3);
    }

    .itineraries-list {
      display: flex;
      flex-direction: column;
      gap: var(--space-xs);
      max-height: 320px;
      overflow-y: auto;
      padding-right: var(--space-2xs);
    }

    .itineraries-list::-webkit-scrollbar {
      width: 4px;
    }
    .itineraries-list::-webkit-scrollbar-track {
      background: transparent;
    }
    .itineraries-list::-webkit-scrollbar-thumb {
      background: oklch(100% 0 0 / 0.15);
      border-radius: 99px;
    }

    .country-group {
      display: flex;
      flex-direction: column;
      gap: 2px;
      margin-bottom: var(--space-sm);
    }

    .country-group:last-child {
      margin-bottom: 0;
    }

    .country-group-title {
      font-size: 11px;
      font-weight: 700;
      color: oklch(100% 0 0 / 0.45);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      padding-left: var(--space-xs);
      margin: var(--space-xs) 0 4px;
    }

    .country-group-list {
      display: flex;
      flex-direction: column;
      gap: var(--space-2xs);
    }

    .itinerary-link {
      display: flex;
      align-items: center;
      gap: var(--space-sm);
      padding: var(--space-xs) var(--space-sm);
      border-radius: 6px;
      text-decoration: none;
      color: oklch(90% 0 0);
      background: none;
      border: none;
      width: 100%;
      text-align: left;
      cursor: pointer;
      font-family: inherit;
      transition: background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out);
    }

    .itinerary-link:hover,
    .itinerary-link.is-active {
      background: oklch(100% 0 0 / 0.05);
      color: oklch(100% 0 0);
    }

    .itinerary-link:focus-visible {
      outline: none;
      background: oklch(100% 0 0 / 0.05);
      box-shadow: inset 0 0 0 1px var(--primary);
    }

    .itinerary-bullet {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: var(--primary);
      flex-shrink: 0;
    }

    .itinerary-info {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .itinerary-title {
      font-size: var(--text-sm);
      font-weight: 600;
      line-height: 1.3;
    }

    .itinerary-meta {
      font-size: var(--text-xs);
      color: oklch(70% 0 0);
    }

    .globe-container {
      position: absolute;
      inset: 0;
      width: auto;
      height: auto;
      z-index: 1;
    }

    .stage {
      position: absolute;
      inset: 0;
      z-index: 0;
    }

    .markers {
      position: absolute;
      inset: 0;
      z-index: 2;
      pointer-events: none;
    }

    .marker {
      position: absolute;
      top: 0;
      left: 0;
      will-change: transform;
      transition: opacity var(--dur-fast) var(--ease-out);
    }

    .marker.is-open {
      z-index: 5;
    }

    .marker[data-occluded='true'] {
      opacity: 0;
    }
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
      fill: var(--primary);
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
      fill: var(--primary-deep);
    }

    .pin:hover .pin-shadow,
    .pin:focus-visible .pin-shadow {
      transform: translateX(-50%) scaleX(1.3);
    }

    .pin:focus-visible {
      outline: none;
    }

    .pin:focus-visible .pin-body {
      stroke: var(--primary);
      stroke-width: 3.5;
    }

    /* Planned (placeholder) markers — hollow + muted, no cobalt fill. */
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
      stroke: var(--primary);
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
      background: var(--primary-tint);
    }

    .popover-item:focus-visible {
      outline: none;
      background: var(--primary-tint);
      box-shadow: inset 0 0 0 2px var(--primary);
    }

    .popover-item-title {
      font-size: var(--text-sm);
      font-weight: 600;
    }

    .popover-item-meta {
      font-size: var(--text-xs);
      color: var(--muted);
    }

    .fallback {
      margin-top: var(--space-md);
      font-size: var(--text-xs);
      color: oklch(75% 0 0);
    }
  `,
})
export class Home {
  private readonly itineraries = inject(ItineraryService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly injector = inject(Injector);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  private globeHandle?: GlobeHandle;

  protected readonly markers = signal<CityMarker[]>(this.itineraries.cityMarkers());
  protected readonly mode = signal<'itineraries' | 'flights'>('itineraries');
  protected readonly flights: FlightRoute[] = FLIGHTS
    .filter((f) => {
      const today = new Date();
      const yyyy = today.getFullYear();
      const mm = String(today.getMonth() + 1).padStart(2, '0');
      const dd = String(today.getDate()).padStart(2, '0');
      const todayStr = `${yyyy}-${mm}-${dd}`;
      return f.date <= todayStr;
    })
    .sort((a, b) => b.date.localeCompare(a.date));
  protected readonly activeFlightId = signal<string | null>(null);
  protected readonly menuOpen = signal(false);
  protected readonly itineraryCount = this.itineraries.all().length;

  protected readonly selectedYear = signal<string>('2026');
  protected readonly flightYears = computed(() => {
    const years = new Set(this.flights.map((f) => f.date.substring(0, 4)));
    return ['All', ...Array.from(years).sort().reverse()];
  });
  protected readonly filteredFlights = computed(() => {
    const year = this.selectedYear();
    if (year === 'All') return this.flights;
    return this.flights.filter((f) => f.date.startsWith(year));
  });

  protected readonly groupedMarkers = computed(() => {
    const groups = new Map<string, CityMarker[]>();
    for (const marker of this.markers()) {
      let list = groups.get(marker.country);
      if (!list) {
        list = [];
        groups.set(marker.country, list);
      }
      list.push(marker);
    }
    return Array.from(groups.entries())
      .map(([country, markers]) => ({ country, markers }))
      .sort((a, b) => a.country.localeCompare(b.country));
  });


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
    this.title.setTitle('Bobbing around');
    this.meta.updateTag({ name: 'description', content: 'Curated travel itineraries with every fare, timing and price fact-checked by editors.' });
    this.meta.removeTag("name='robots'");

    effect(() => {
      const mode = this.mode();
      const year = this.selectedYear();
      const globe = this.globeHandle;
      if (!globe || mode !== 'flights') return;

      const activeFlights = this.filteredFlights();
      globe.setFilteredFlights(activeFlights.map((f) => f.id));
    });

    // afterNextRender only fires in the browser, so three.js — and the WebGPU
    // context it needs — never touches the SSR/prerender pass. The dynamic
    // import also keeps three out of the initial bundle.
    afterNextRender(() => {
      let handle: GlobeHandle | undefined;
      let destroyed = false;

      const reduceMotion = typeof window.matchMedia === 'function'
        ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
        : false;
      // Read the live, hydrated DOM nodes rather than a viewChildren signal: under
      // SSR hydration the query can hand back elements that get replaced, leaving
      // the globe animating detached nodes while the on-screen pin never moves.
      const host = this.host.nativeElement;
      const globeMarkers: GlobeMarker[] = this.markers().flatMap((marker) => {
        const el = host.querySelector<HTMLElement>(`.marker[data-city="${marker.city}"]`);
        return el ? [{ city: marker.city, lat: marker.lat, lon: marker.lon, el }] : [];
      });

      const stage = host.querySelector<HTMLElement>('.stage');
      if (!stage) return;

      import('./globe')
        .then(({ createGlobe }) =>
          createGlobe(stage, {
            reduceMotion,
            markers: globeMarkers,
            flights: this.flights,
            shouldRotate: () => !this.paused(),
          }),
        )
        .then((created) => {
          if (destroyed) created.dispose();
          else {
            handle = created;
            this.globeHandle = created;
          }
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
        this.globeHandle = undefined;
        document.removeEventListener('pointerdown', onDocPointerDown);
      });
    });
  }

  protected toggle(city: string): void {
    const next = this.openCity() === city ? null : city;
    this.openCity.set(next);
    if (next) {
      this.globeHandle?.focusCity(next);
      // Move focus into the freshly-rendered menu for keyboard users.
      afterNextRender(() => this.focusFirstItem(next), { injector: this.injector });
    }
  }

  protected toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }

  private closeMenuIfMobile(): void {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;
    if (isMobile) {
      this.menuOpen.set(false);
    }
  }

  protected selectCity(city: string): void {
    this.toggle(city);
    this.closeMenuIfMobile();
  }

  protected setMode(mode: 'itineraries' | 'flights'): void {
    this.mode.set(mode);
    this.openCity.set(null);
    this.activeFlightId.set(null);
    this.globeHandle?.setMode(mode);
    this.closeMenuIfMobile();
  }

  protected selectFlight(flightId: string): void {
    const next = this.activeFlightId() === flightId ? null : flightId;
    this.activeFlightId.set(next);
    if (next) {
      this.globeHandle?.focusFlight(next);
    }
    this.closeMenuIfMobile();
  }

  protected selectYear(year: string): void {
    this.selectedYear.set(year);
    this.activeFlightId.set(null);
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
