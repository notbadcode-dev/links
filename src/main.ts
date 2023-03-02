import { APP_INITIALIZER, enableProdMode } from '@angular/core';
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
import { LocalStorageService } from '@app/core/services/local-storage/local-storage.service';
import { AppInitService } from '@app/core/services/app-init/app-init.service';
import { SessionService } from '@app/core/services/session/session.service';

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
        {
            provide: APP_INITIALIZER,
            useFactory: initializeApp,
            deps: [AppInitService, LocalStorageService, SessionService],
            multi: true,
        },
        interceptorProviders,
    ],
}).catch(err => console.error(err));

export function initializeApp(
    appInitService: AppInitService,
    localStorageService: LocalStorageService,
    sessionService: SessionService
) {
    return (): Promise<any> => {
        return appInitService.Init(localStorageService, sessionService);
    };
}
