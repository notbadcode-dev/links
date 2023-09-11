import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class UtilDocumentService {
    constructor(@Inject(DOCUMENT) private document: Document) {}

    public getLogoFile(fileName: string): string {
        return `${this.getLogoPath}/${fileName}`;
    }

    private get getAssetsPath(): string {
        return `${this.getLocationOrigin}/assets`;
    }

    private get getImagesPath(): string {
        return `${this.getAssetsPath}/images`;
    }

    private get getLogoPath(): string {
        return `${this.getImagesPath}/logo`;
    }

    private get getLocationOrigin(): string {
        return this.document.location.origin;
    }
}
