import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'itineraries/:slug',
    loadComponent: () =>
      import('./itineraries/itinerary-page/itinerary-page').then((m) => m.ItineraryPage),
  },
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./home/home').then((m) => m.Home),
  },
  {
    path: '**',
    loadComponent: () => import('./not-found/not-found').then((m) => m.NotFound),
  },
];
