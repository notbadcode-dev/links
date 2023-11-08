import { Injectable } from '@angular/core';
import { IGroupLink } from '@models/group/group-link.model';
import { ECardAlignTitle } from '@shared/modules/card/card.enum';
import { CardConfig } from '@shared/modules/card/card.model';

@Injectable({
    providedIn: 'root',
})
export class ConfigCardService {
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
}
