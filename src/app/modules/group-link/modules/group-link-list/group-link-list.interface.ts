import { APP_ICON_CONSTANT } from '@constants/app-icon.constant';
import { IGroupLink } from '@models/group/group-link.model';
import { EButtonWeight } from '@shared/modules/button/components/button.enum';
import { ButtonConfig, ButtonConfigHelper } from '@shared/modules/button/components/button.model';
import { CardConfigHelper, ICardConfig } from '@shared/modules/card/models/card.model';
import { ICreateLinkConfig } from '@shared/modules/create-link/components/create-link.interface';

export interface IGroupLinkListItem {
    cardConfig: ICardConfig<IGroupLink>;
    addNewLinkIntoGroupLinkButtonConfig: ButtonConfig;
    expandGroupLinkButtonConfig: ButtonConfig;
    createLinkConfig: ICreateLinkConfig;
    openModalCreateNewLink: boolean;
}

export class GroupLinkListItemHelper {
    public static getDefault(groupLink: IGroupLink): IGroupLinkListItem {
        return {
            cardConfig: GroupLinkListItemHelper.getGroupLinkCardConfig(groupLink),
            addNewLinkIntoGroupLinkButtonConfig: GroupLinkListItemHelper.getCreateLinkButtonConfig(),
            expandGroupLinkButtonConfig: GroupLinkListItemHelper.getExpandGroupLinkButtonConfig(),
            createLinkConfig: {
                groupLink: groupLink,
            },
            openModalCreateNewLink: false,
        };
    }

    public static getGroupLinkCardConfig(groupLink: IGroupLink): ICardConfig<IGroupLink> {
        return {
            ...CardConfigHelper.getCardConfig(groupLink.name, groupLink),
            expandConfig: {
                expanded: null,
            },
        };
    }

    public static getCreateLinkButtonConfig(): ButtonConfig {
        return ButtonConfigHelper.getPrimaryButtonConfig({
            text: 'COMPONENTS.CREATE_LINK.BUTTON.CREATE_LINK.TEXT',
            tooltip: 'COMPONENTS.CREATE_LINK.BUTTON.CREATE_LINK.TOOLTIP',
            disabled: false,
            weight: EButtonWeight.LARGE,
            icon: APP_ICON_CONSTANT.ADD,
            hotkeys: [],
        });
    }

    public static getExpandGroupLinkButtonConfig(): ButtonConfig {
        return ButtonConfigHelper.getAccentButtonConfig({
            text: '',
            tooltip: 'COMPONENTS.LINK-LIST-ITEM.BUTTON.EXPAND_GROUP_LINK.TOOLTIP',
            disabled: false,
            weight: EButtonWeight.SMALL,
            icon: APP_ICON_CONSTANT.EXPAND,
            hotkeys: [],
        });
    }

    public static getDiscussGroupLinkButtonConfig(): ButtonConfig {
        return ButtonConfigHelper.getPrimaryButtonConfig({
            text: '',
            tooltip: 'COMPONENTS.LINK-LIST-ITEM.BUTTON.EXPAND_GROUP_LINK.TOOLTIP',
            disabled: false,
            weight: EButtonWeight.SMALL,
            icon: APP_ICON_CONSTANT.TIMES,
            hotkeys: [],
        });
    }
}
