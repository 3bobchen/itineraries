import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ItineraryDay } from '../itinerary.model';

@Component({
  selector: 'app-day-nav',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'day-nav' },
  template: `
    <nav aria-label="Days" class="container">
      <ol>
        @for (day of days(); track day.slug) {
          <li>
            <a
              [routerLink]="[]"
              [fragment]="day.slug"
              [class.active]="day.slug === activeSlug()"
              [attr.aria-current]="day.slug === activeSlug() ? 'true' : null"
            >
              <span class="mono num">{{ day.number }}</span>
              <span class="name">{{ day.title }}</span>
            </a>
          </li>
        }
      </ol>
    </nav>
  `,
  styles: `
    :host {
      display: block;
      position: sticky;
      top: 0;
      z-index: var(--z-sticky);
      background: var(--bg);
      border-bottom: 1px solid var(--line);
    }

    ol {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      gap: var(--space-xs);
      overflow-x: auto;
      scrollbar-width: none;
    }

    ol::-webkit-scrollbar {
      display: none;
    }

    a {
      display: flex;
      align-items: center;
      gap: var(--space-xs);
      padding: var(--space-md) var(--space-sm);
      min-height: 44px;
      font-size: var(--text-sm);
      font-weight: 600;
      color: var(--muted);
      text-decoration: none;
      white-space: nowrap;
      border-bottom: 2px solid transparent;
      margin-bottom: -1px;
      transition:
        color var(--dur-fast) var(--ease-out),
        border-color var(--dur-fast) var(--ease-out);
    }

    a:hover {
      color: var(--ink);
    }

    a.active {
      color: var(--crimson-deep);
      border-bottom-color: var(--crimson);
    }

    .num {
      font-size: var(--text-xs);
      font-weight: 600;
      line-height: 1;
      padding: 0.2rem 0.35rem;
      border: 1px solid var(--line);
      color: var(--muted);
      transition: all var(--dur-fast) var(--ease-out);
    }

    a.active .num {
      background: var(--crimson);
      border-color: var(--crimson);
      color: var(--bg);
    }
  `,
})
export class DayNav {
  readonly days = input.required<ItineraryDay[]>();
  readonly activeSlug = input<string | null>(null);
}
