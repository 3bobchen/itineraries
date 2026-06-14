import { inject } from '@angular/core';
import { RenderMode, ServerRoute } from '@angular/ssr';
import { ItineraryService } from './itineraries/itinerary.service';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'itineraries/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return inject(ItineraryService)
        .slugs()
        .map((slug) => ({ slug }));
    },
  },
  {
    path: '',
    renderMode: RenderMode.Prerender,
  },
  {
    path: '**',
    renderMode: RenderMode.Server,
  },
];
