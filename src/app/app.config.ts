import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { httpConfigProvider } from './config/httpclient.config';
import { provideHttpClient } from '@angular/common/http';



export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(), httpConfigProvider]
};
