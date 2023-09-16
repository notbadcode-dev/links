import { APP_INITIALIZER, enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from '@app/app.component';
import { ENVIRONMENT } from '@environments/environment';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import APP_ROUTES_FOR_ROOT from '@app/app.routes';
import APP_TRANSLATE_FOR_ROOT from '@app/app.translate';

import { LANGUAGE_CONSTANT } from '@app/core/constants/language.constant';
import { INTERCEPTOR_PROVIDER_LIST } from '@app/core/interceptors/interceptor.index';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppInitService } from '@services/app-init/app-init.service';
import { LocalStorageService } from '@services/local-storage/local-storage.service';
import { SessionService } from '@services/session/session.service';

if (ENVIRONMENT.production) {
    enableProdMode();
}

function initializeApp(appInitService: AppInitService) {
    return (): Promise<void> => {
        return appInitService.init();
    };
}

export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(http, LANGUAGE_CONSTANT.TRANSLATE_FILE_PATH, LANGUAGE_CONSTANT.TRANSLATE_FILE_EXTENSION);
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
        importProvidersFrom(
            TranslateModule.forRoot({
                loader: {
                    provide: TranslateLoader,
                    useFactory: createTranslateLoader,
                    deps: [HttpClient],
                },
            })
        ),
    ],
}).catch((err) => console.error(err));
