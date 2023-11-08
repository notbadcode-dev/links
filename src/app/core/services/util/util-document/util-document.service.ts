import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { ASSETS_CONSTANTS } from '@constants/assets.constant';

@Injectable({
    providedIn: 'root',
})
export class UtilDocumentService {
    constructor(@Inject(DOCUMENT) private document: Document) {}

    public getLogoFile(fileName: string): string {
        return `${this.getLogosPath}/${fileName}`;
    }

    public getCorporateLogoFile(fileName: string): string {
        return `${this.getCorporateLogosPath}/${fileName}`;
    }

    public getFlagLogoFile(fileName: string): string {
        return `${this.getFlagsPath}/${fileName}`;
    }

    private get getAssetsPath(): string {
        return `${this.getLocationOrigin}${ASSETS_CONSTANTS.ASSETS_PATH}`;
    }

    private get getImagesPath(): string {
        return `${this.getAssetsPath}${ASSETS_CONSTANTS.IMAGES_PATH}`;
    }

    private get getLogosPath(): string {
        return `${this.getImagesPath}${ASSETS_CONSTANTS.LOGOS_PATH}`;
    }

    private get getCorporateLogosPath(): string {
        return `${this.getLogosPath}${ASSETS_CONSTANTS.CORPORATE_PATH}`;
    }

    private get getFlagsPath(): string {
        return `${this.getLogosPath}${ASSETS_CONSTANTS.FLAGS_PATH}`;
    }

    private get getLocationOrigin(): string {
        return this.document.location.origin;
    }
}
