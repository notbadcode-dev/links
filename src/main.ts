import { enableProdMode } from '@angular/core';
import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';

import APP_ROUTES_FOR_ROOT from './app/app.routes';
import APP_TRANSLATE_FOR_ROOT from './app/app.translate';

import { interceptorProviders } from './app/core/interceptors/interceptor.index';

if (environment.production) {
    enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(RouterModule.forRoot(APP_ROUTES_FOR_ROOT), TranslateModule.forRoot(APP_TRANSLATE_FOR_ROOT), HttpClientModule),
        interceptorProviders,
    ],
}).catch(err => console.error(err));
