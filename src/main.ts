import { APP_INITIALIZER, enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

import { ENVIRONMENT } from '@environments/environment';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { INTERCEPTOR_PROVIDER_LIST } from '@interceptors/interceptor.index';
import { AppInitService } from '@services/app-init/app-init.service';
import { LocalStorageService } from '@services/local-storage/local-storage.service';
import { SessionService } from '@services/session/session.service';
import { AppComponent } from './app/app.component';
import APP_ROUTES_FOR_ROOT from './app/app.routes';
import APP_TRANSLATE_FOR_ROOT from './app/app.translate';

if (ENVIRONMENT.production) {
    enableProdMode();
}

function initializeApp(appInitService: AppInitService) {
    return (): Promise<void> => {
        return appInitService.init();
    };
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(
            RouterModule.forRoot(APP_ROUTES_FOR_ROOT, { useHash: true }),
            TranslateModule.forRoot(APP_TRANSLATE_FOR_ROOT),
            HttpClientModule
        ),
        {
            provide: APP_INITIALIZER,
            useFactory: initializeApp,
            deps: [AppInitService, LocalStorageService, SessionService],
            multi: true,
        },
        INTERCEPTOR_PROVIDER_LIST,
    ],
}).catch((err) => console.error(err));
