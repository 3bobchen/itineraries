import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { IMAGE_LOADER, ImageLoaderConfig } from '@angular/common';
import { provideRouter, withComponentInputBinding, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

/** Local image loader: assets live at /images/<base>-<width>.jpg, one rendition
 *  per image. NgOptimizedImage builds the `src` by calling this without a width,
 *  so callers pass the intrinsic width via loaderParams to hit the real file. */
function localImageLoader(config: ImageLoaderConfig): string {
  const width = (config.loaderParams?.['width'] as number | undefined) ?? config.width;
  return width ? `/images/${config.src}-${width}.jpg` : `/images/${config.src}.jpg`;
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      withComponentInputBinding(),
      withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' }),
    ),
    provideClientHydration(withEventReplay()),
    { provide: IMAGE_LOADER, useValue: localImageLoader },
  ],
};
