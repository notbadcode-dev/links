import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModuleConfig } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

const APP_TRANSLATE_FOR_ROOT: TranslateModuleConfig = {
    loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient],
    },
};

function httpTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

export default APP_TRANSLATE_FOR_ROOT;
