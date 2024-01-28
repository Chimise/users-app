import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { httpConfig } from './config/httpclient.config';



export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), httpConfig]
};
