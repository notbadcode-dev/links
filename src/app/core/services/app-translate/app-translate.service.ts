import { Injectable } from '@angular/core';
import { LANGUAGE_CONSTANT } from '@constants/language.constant';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
    providedIn: 'root',
})
export class AppTranslateService extends TranslateService {
    /**
     * @private
     * @description Set language for translate service
     * @returns void
     */
    public initializeLanguage(): void {
        this.addLangs([LANGUAGE_CONSTANT.TRANSLATE_ENGLISH_CODE, LANGUAGE_CONSTANT.TRANSLATE_SPANISH_CODE]);
        this.setDefaultLang(LANGUAGE_CONSTANT.TRANSLATE_ENGLISH_CODE);
        this.setUseLanguage(LANGUAGE_CONSTANT.TRANSLATE_ENGLISH_CODE);
    }

    /**
     * @description Set use language on translate service
     * @param  {string} languageCode
     * @returns void
     */
    public setUseLanguage(languageCode: string): void {
        this.use(languageCode);
    }

    /**
     * @description Translate a tag
     * @param  {string} translateTag
     * @returns string
     */
    public getTranslateText(translateTag: string): string {
        return this.instant(translateTag);
    }

    /**
     * @description Translate a tag
     * @param  {string} translateTag
     * @param  {T} parameters
     * @returns string
     */
    public getTranslateTextWithParameters<T>(translateTag: string, parameters: T): string {
        return this.instant(translateTag, parameters as object);
    }

    /**
     * @description Get configure language list
     * @returns string
     */
    public getLanguageList(): string[] {
        return this.getLangs();
    }

    /**
     * @private
     * @description Set default language on translate service
     * @param  {string} languageCode
     * @returns void
     */
    private setLanguageDefaultLanguage(languageCode: string): void {
        this.setDefaultLang(languageCode);
    }
}
