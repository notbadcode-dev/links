import { Injectable } from '@angular/core';
import { IGroupLink } from '@models/group/group-link.model';
import { TranslateService } from '@ngx-translate/core';
import { ECardAlignTitle } from '@shared/modules/card/enums/card.enum';
import { CardExpandConfigHelper, ICardConfig } from '@shared/modules/card/models/card.model';

@Injectable({
    providedIn: 'root',
})
export class ConfigCardService {
    constructor(private _translateService: TranslateService) {}

    /**
     * @description Get login card config
     * @returns ButtonConfig
     */
    getUserLoginCardConfig(): ICardConfig {
        return {
            title: 'COMPONENTS.USER_LOGIN.CARD.LOGIN.TITLE',
            styleConfig: {
                alignTitle: ECardAlignTitle.CENTER,
            },
            expandConfig: CardExpandConfigHelper.getDefault(),
        };
    }

    /**
     * @description Get create link config
     * @returns ButtonConfig
     */
    getCreateLinkCardConfig(groupLinkName: string): ICardConfig | null {
        if (!groupLinkName?.length) {
            return null;
        }

        return {
            title: this._translateService.instant('COMPONENTS.CREATE_LINK.CARD.CREATE_LINK.TITLE'),
            styleConfig: {
                alignTitle: ECardAlignTitle.LEFT,
            },
            expandConfig: CardExpandConfigHelper.getDefault(),
        };
    }
}
