import { Injectable } from '@angular/core';
import { CityMarker, Itinerary } from './itinerary.model';
import { ITINERARIES } from './itineraries.data';
import { CITY_COORDS, PLANNED_CITIES } from './city-coordinates';

@Injectable({ providedIn: 'root' })
export class ItineraryService {
  bySlug(slug: string): Itinerary | undefined {
    return ITINERARIES.find((itinerary) => itinerary.slug === slug);
  }

  slugs(): string[] {
    return ITINERARIES.map((itinerary) => itinerary.slug);
  }

  /** Itineraries grouped into one marker per city, ready to plot on the globe.
   *  Cities without a coordinate in {@link CITY_COORDS} are skipped. */
  cityMarkers(): CityMarker[] {
    const byCity = new Map<string, CityMarker>();

    for (const it of ITINERARIES) {
      const coords = CITY_COORDS[it.city];
      if (!coords) continue;

      let marker = byCity.get(it.city);
      if (!marker) {
        marker = {
          city: it.city,
          country: it.country,
          lat: coords[0],
          lon: coords[1],
          status: 'available',
          itineraries: [],
        };
        byCity.set(it.city, marker);
      }
      marker.itineraries.push({
        slug: it.slug,
        title: it.title,
        days: it.stats.days,
        pace: it.stats.pace,
      });
    }

    // Placeholder pins for cities we plan to cover but haven't published yet.
    for (const planned of PLANNED_CITIES) {
      if (byCity.has(planned.city)) continue; // a real itinerary already covers it
      const coords = CITY_COORDS[planned.city];
      if (!coords) continue;
      byCity.set(planned.city, {
        city: planned.city,
        country: planned.country,
        lat: coords[0],
        lon: coords[1],
        status: 'planned',
        itineraries: [],
      });
    }

    return [...byCity.values()];
  }
}
