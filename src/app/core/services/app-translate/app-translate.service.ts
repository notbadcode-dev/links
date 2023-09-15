import { Injectable } from '@angular/core';
import { LANGUAGE } from '@app/core/constants/language.constant';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
    providedIn: 'root',
})
export class AppTranslateService {
    constructor(private _translateService: TranslateService) {}

    /**
     * @private
     * @description Set language for translate service
     * @returns void
     */
    public initializeLanguage(): void {
        this._translateService.setDefaultLang(LANGUAGE.ENGLISH.CODE);
        this.setUseLanguage(LANGUAGE.ENGLISH.CODE);
    }

    /**
     * @description Set use language on translate service
     * @param  {string} languageCode
     * @returns void
     */
    public setUseLanguage(languageCode: string): void {
        this._translateService.use(languageCode);
    }

    /**
     * @private
     * @description Set default language on translate service
     * @param  {string} languageCode
     * @returns void
     */
    private setLanguageDefaultLanguage(languageCode: string): void {
        this._translateService.setDefaultLang(languageCode);
    }
}
