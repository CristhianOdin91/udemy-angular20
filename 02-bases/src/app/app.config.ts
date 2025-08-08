import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),

    // HashStrategy
    // Se ocupa para que en la ruta coloque un hash #
    // de esta manera host en donde no tengamos el control total
    // de las rutas, funciona el router
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ]
};
