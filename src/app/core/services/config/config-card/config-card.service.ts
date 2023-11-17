import { Injectable } from '@angular/core';
import { IGroupLink } from '@models/group/group-link.model';
import { TranslateService } from '@ngx-translate/core';
import { ECardAlignTitle } from '@shared/modules/card/enums/card.enum';
import { CardConfig } from '@shared/modules/card/models/card.model';

@Injectable({
    providedIn: 'root',
})
export class ConfigCardService {
    constructor(private _translateService: TranslateService) {}

    /**
     * @description Get login card config
     * @returns ButtonConfig
     */
    getUserLoginCardConfig(): CardConfig {
        return {
            title: 'COMPONENTS.USER_LOGIN.CARD.LOGIN.TITLE',
            alignTitle: ECardAlignTitle.CENTER,
        };
    }

    /**
     * @description Get group link card config
     * @returns ButtonConfig
     */
    getGroupLinkCardConfig(groupLink: IGroupLink): CardConfig<IGroupLink> {
        return new CardConfig<IGroupLink>(groupLink.name, groupLink);
    }

    /**
     * @description Get create link config
     * @returns ButtonConfig
     */
    getCreateLinkCardConfig(groupLinkName: string): CardConfig | null {
        if (!groupLinkName?.length) {
            return null;
        }

        return {
            title: this._translateService.instant('COMPONENTS.CREATE_LINK.CARD.CREATE_LINK.TITLE') + groupLinkName,
            alignTitle: ECardAlignTitle.LEFT,
        };
    }
}
