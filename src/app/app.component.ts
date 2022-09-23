import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LANGUAGE } from './constants/language.constant';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeadersInterceptor } from './core/interceptors/headers.interceptor';

@Component({
    selector: 'app-root',
    standalone: true,
    template: `<router-outlet></router-outlet>`,
    imports: [CommonModule, RouterModule],
    providers: [{ provide: HTTP_INTERCEPTORS, useClass: HeadersInterceptor, multi: true }],
})
export class AppComponent {
    constructor(translateService: TranslateService) {
        this.initilizeLanguage(translateService, LANGUAGE.ENGLISH.CODE);
    }

    /**
     * @description Set language for translate service
     * @param  {TranslateService} translateService
     * @param  {string} languageCode utf-8 code of language
     * @returns void
     */
    initilizeLanguage(translateService: TranslateService, languageCode: string): void {
        translateService.setDefaultLang(languageCode);
        translateService.use(languageCode);
    }
}
