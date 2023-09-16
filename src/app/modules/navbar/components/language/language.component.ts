import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ASSETS_CONSTANTS } from '@app/core/constants/assets.constant';
import { LANGUAGE_CONSTANT } from '@app/core/constants/language.constant';
import { AppTranslateService } from '@app/core/services/app-translate/app-translate.service';
import { UtilDocumentService } from '@app/core/services/util/util-document/util-document.service';
import { ISelectableLanguage } from './models/language.model';

@Component({
    selector: 'lnk-language',
    templateUrl: './language.component.html',
    styleUrls: ['./language.component.scss'],
})
export class LanguageComponent implements OnInit, AfterViewInit {
    @ViewChild('languageList', { static: true }) languageList!: ElementRef;

    selectedLanguage: ISelectableLanguage | null = null;
    selectableLanguageList: ISelectableLanguage[] = new Array<ISelectableLanguage>();

    isMouseOverUl = false;

    private showOptions = false;
    private hideTimeout!: ReturnType<typeof setTimeout>;

    constructor(private _appTranslateService: AppTranslateService, private _utilDocumentService: UtilDocumentService) {}

    ngOnInit(): void {
        this.initializeSelectableLanguageList();
    }

    ngAfterViewInit(): void {
        this.languageList.nativeElement.addEventListener('mouseenter', () => {
            this.isMouseOverUl = true;
        });

        this.languageList.nativeElement.addEventListener('mouseleave', () => {
            this.isMouseOverUl = false;
        });
    }

    /**
     * @description Manage change language on select
     * @param  {string} languageCode
     * @returns void
     */
    public changeLanguage(languageCode: string): void {
        this._appTranslateService.setUseLanguage(languageCode);
        this.selectLanguage(languageCode);
        this.toggleOptions();
        this.isMouseOverUl = false;
        this.showOptions = false;
    }

    /**
     * @description Toggle option
     * @returns void
     */
    public toggleOptions(): void {
        this.showOptions = !this.showOptions;
    }

    /**
     * @private
     * @description Manage view when mouse enter on component
     * @returns void
     */
    @HostListener('mouseenter')
    private onMouseEnter(): void {
        clearTimeout(this.hideTimeout);
        this.isMouseOverUl = true;
    }

    /**
     * @private
     * @description Manage view when mouse leave from component
     * @returns void
     */
    @HostListener('mouseleave')
    private onMouseLeave(): void {
        this.hideTimeout = setTimeout(() => {
            if (!this.isMouseOverUl) {
                this.showOptions = false;
            }
        }, 1000);
    }

    /**
     * @private
     * @description Initialize selectable language list
     * @returns void
     */
    private initializeSelectableLanguageList(): void {
        this.selectableLanguageList = this.getSelectableLanguageList(LANGUAGE_CONSTANT.ENGLISH.CODE);
        this.selectLanguage(LANGUAGE_CONSTANT.ENGLISH.CODE);
    }

    /**
     * @private
     * @description Get selectable language list
     * @returns ISelectorLanguage
     */
    private getSelectableLanguageList(excludedSelectableLanguageCode = ''): ISelectableLanguage[] {
        return this._appTranslateService
            .getLanguageList()
            .filter((languageCode: string) => {
                if (!excludedSelectableLanguageCode?.length) {
                    return true;
                }

                return excludedSelectableLanguageCode !== languageCode;
            })
            .map((languageCode: string) => {
                return {
                    logoFlagPath: `${this._utilDocumentService.getFlagLogoFile(languageCode)}${ASSETS_CONSTANTS.FLAGS_EXTENSION}`,
                    alternativeText: 'COMPONENTS.LANGUAGE.LIST.' + languageCode.toUpperCase() + '.LONG',
                    languageCode: languageCode,
                };
            });
    }

    /**
     * @private
     * @description Set selected language
     * @param  {string} languageCode
     * @returns void
     */
    private selectLanguage(languageCode: string): void {
        this.selectedLanguage =
            this.getSelectableLanguageList()?.find(
                (selectableLanguage: ISelectableLanguage) => selectableLanguage.languageCode === languageCode
            ) ?? null;

        this.selectableLanguageList = this.getSelectableLanguageList(this.selectedLanguage?.languageCode);
    }
}
