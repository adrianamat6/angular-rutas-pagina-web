import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),



    //para que Angular pueda recoger los parámetros de la ruta en work-view.component.ts se añade el withComponentInputBindidng().  
    //  Si no se añade te da unfinded al intentar acceder a los parámetros de la ruta.
    provideRouter(routes, withComponentInputBinding()) 
  ]
};
