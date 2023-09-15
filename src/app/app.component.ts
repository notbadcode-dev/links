import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LANGUAGE } from '@constants/language.constant';
import { HomeModule } from '@modules/home/home.module';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    standalone: true,
    styles: [],
    template: '<lnk-home></lnk-home>',
    imports: [CommonModule, RouterModule, HomeModule],
})
export class AppComponent {
    constructor(private _translateService: TranslateService) {
        this.initializeLanguage(_translateService);
    }

    /**
     * @private
     * @description Set language for translate service
     * @param  {TranslateService} translateService
     * @param  {string} languageCode='en' utf-8 code of language
     * @returns void
     */
    private initializeLanguage(translateService: TranslateService, languageCode: string = LANGUAGE.ENGLISH.CODE): void {
        translateService.setDefaultLang(languageCode);
        translateService.use(languageCode);
    }
}
