import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LANGUAGE } from '@constants/language.constant';
import { HomeModule } from './modules/home/home.module';

@Component({
    selector: 'app-root',
    standalone: true,
    template: `<lnk-home></lnk-home>`,
    imports: [CommonModule, RouterModule, HomeModule],
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
