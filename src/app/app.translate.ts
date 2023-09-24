import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModuleConfig } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LANGUAGE_CONSTANT } from './core/constants/language.constant';

const APP_TRANSLATE_FOR_ROOT: TranslateModuleConfig = {
    loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) =>
            new TranslateHttpLoader(http, LANGUAGE_CONSTANT.TRANSLATE_FILE_PATH, LANGUAGE_CONSTANT.TRANSLATE_FILE_EXTENSION),
        deps: [HttpClient],
    },
};

export default APP_TRANSLATE_FOR_ROOT;
