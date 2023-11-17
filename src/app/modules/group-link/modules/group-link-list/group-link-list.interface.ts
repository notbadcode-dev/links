import { IGroupLink } from '@models/group/group-link.model';
import { ButtonConfig } from '@shared/modules/button/components/button.model';
import { CardConfig } from '@shared/modules/card/models/card.model';
import { ICreateLinkConfig } from '@shared/modules/create-link/components/create-link.interface';

export interface IGroupLinkListItem {
    cardConfig: CardConfig<IGroupLink>;
    addNewLinkIntoGroupLinkButtonConfig: ButtonConfig;
    createLinkConfig: ICreateLinkConfig;
    openModalCreateNewLink: boolean;
}
