import { enableProdMode } from '@angular/core';

import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

import { environment } from './environments/environment';

import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import APP_ROUTES_FOR_ROOT from './app/app.routes';
import APP_TRANSLATE_FOR_ROOT from './app/app.translate';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      RouterModule.forRoot(APP_ROUTES_FOR_ROOT),
      TranslateModule.forRoot(APP_TRANSLATE_FOR_ROOT),
      HttpClientModule
    ),    
  ],
}).catch(err => console.error(err));
