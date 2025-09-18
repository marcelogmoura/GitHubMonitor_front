import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';  
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';

import { routes } from './app.routes';
import { authInterceptor } from './interceptors/auth.interceptor';  

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideCharts(withDefaultRegisterables()),    
    provideHttpClient(withInterceptors([
      authInterceptor
    ]))
  ]
};