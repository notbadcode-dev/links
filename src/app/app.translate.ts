import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModuleConfig } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

function httpTranslateLoader(http: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(http);
}

const APP_TRANSLATE_FOR_ROOT: TranslateModuleConfig = {
    loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient],
    },
};

export default APP_TRANSLATE_FOR_ROOT;
