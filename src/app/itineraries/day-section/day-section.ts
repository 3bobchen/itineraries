import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import {
  Daypart,
  DayEntry,
  ItineraryDay,
  MapPin,
  daypartOf,
} from '../itinerary.model';
import { DayMap } from '../day-map/day-map';

type TimelineRow =
  | { kind: 'daypart'; daypart: Daypart }
  | { kind: 'stop'; stop: Extract<DayEntry, { kind: 'stop' }>['stop'] };

@Component({
  selector: 'app-day-section',
  imports: [NgOptimizedImage, DayMap],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './day-section.html',
  styleUrl: './day-section.scss',
})
export class DaySection {
  readonly day = input.required<ItineraryDay>();

  protected readonly mapGroups = computed<MapPin[][]>(() => {
    let n = 0;
    const located: MapPin[] = [];
    const timeToIdx = new Map<string, number>();

    for (const entry of this.day().entries) {
      if (entry.kind !== 'stop') continue;
      const { lat, lon, title, time } = entry.stop;
      if (lat == null || lon == null) continue;
      timeToIdx.set(time, located.length);
      located.push({ n: ++n, lat, lon, title });
    }

    const grouping = this.day().mapGrouping;
    if (grouping) {
      return grouping
        .map((times) =>
          times
            .map((t) => {
              const idx = timeToIdx.get(t);
              return idx != null ? located[idx] : undefined;
            })
            .filter((p): p is MapPin => p != null),
        )
        .filter((g) => g.length > 0);
    }

    const groups: MapPin[][] = [];
    for (const pin of located) {
      const current = groups.at(-1);
      const prev = current?.at(-1);
      if (current && current.length < 3 && prev && distanceKm(prev, pin) <= 0.8) {
        current.push(pin);
      } else {
        groups.push([pin]);
      }
    }
    return groups;
  });

  protected groupLabel(group: MapPin[]): string {
    return group.map((pin) => pin.title).join(', ');
  }

  protected readonly rows = computed<TimelineRow[]>(() => {
    const rows: TimelineRow[] = [];
    let current: Daypart | null = null;
    for (const entry of this.day().entries) {
      if (entry.kind !== 'stop') continue;
      const daypart = daypartOf(entry.stop.time);
      if (daypart !== current) {
        rows.push({ kind: 'daypart', daypart });
        current = daypart;
      }
      rows.push({ kind: 'stop', stop: entry.stop });
    }
    return rows;
  });

}

/** Equirectangular approximation; fine at city scale. */
function distanceKm(a: MapPin, b: MapPin): number {
  const dx = (a.lon - b.lon) * 111.32 * Math.cos((a.lat * Math.PI) / 180);
  const dy = (a.lat - b.lat) * 110.57;
  return Math.hypot(dx, dy);
}
