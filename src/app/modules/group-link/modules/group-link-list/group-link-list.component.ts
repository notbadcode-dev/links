import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GroupLinkService } from '@http-services/group-link/group-link.service';
import { IGroupLink } from '@models/group/group-link.model';
import { IPaginateItem, PartialPaginateItemHelper } from '@models/pagination-item/pagination-item.model';
import { AppBackdropService } from '@services/app-backdrop/app-backdrop.service';
import { ConfigButtonService } from '@services/config/config-button/config-button.service';
import { ConfigCardService } from '@services/config/config-card/config-card.service';
import { ButtonModule } from '@shared/modules/button/button.module';
import { ButtonConfig } from '@shared/modules/button/components/button.model';
import { CardConfig } from '@shared/modules/card/models/card.model';
import { SimpleCardModule } from '@shared/modules/card/modules/simple-card/simple-card.module';
import { CreateLinkModule } from '@shared/modules/create-link/create-link.module';
import { LinkListItemModule } from '@shared/modules/link-list-item/link-list-item.module';
import { ModalModule } from '@shared/modules/modal/modal.module';
import { IGroupLinkListItem } from './group-link-list.interface';

@Component({
    selector: 'lnk-group-link-list',
    standalone: true,
    imports: [CommonModule, LinkListItemModule, ButtonModule, CreateLinkModule, SimpleCardModule, ModalModule],
    templateUrl: './group-link-list.component.html',
    styleUrls: ['./group-link-list.component.scss'],
})
export class GroupLinkListComponent implements OnInit {
    isOpenCreateLinkModal = false;

    linkIndexOffset = 1;

    groupLinkCardConfigList: CardConfig<IGroupLink>[] = [];
    groupLinkListItemList: IGroupLinkListItem[] = [];

    addNewLinkIntoGroupLinkButtonConfig!: ButtonConfig;

    constructor(
        private _groupLinkService: GroupLinkService,
        private _configCardService: ConfigCardService,
        private _configButtonService: ConfigButtonService,
        private _appBackdropService: AppBackdropService
    ) {}

    ngOnInit(): void {
        this.initializeButtonConfig();
        this.getPaginatedGroupLinkList();
    }

    initializeButtonConfig(): void {
        this.addNewLinkIntoGroupLinkButtonConfig = this._configButtonService.getCreateLinkButtonConfig();
    }

    /**
     * @description Add new link into a group link
     * @param  {IGroupLinkListItem} groupLinkListItem
     * @returns void
     */
    addNewLinkIntoGroup(groupLinkListItem: IGroupLinkListItem): void {
        if (!groupLinkListItem) {
            return;
        }

        groupLinkListItem.openModalCreateNewLink = true;
        this._appBackdropService.showBackdrop();
    }

    /**
     * @private
     * @description Get paginated group link list
     * @returns void
     */
    private getPaginatedGroupLinkList(): void {
        this._groupLinkService
            .getAllPaginated(PartialPaginateItemHelper.mapToObject())
            .subscribe((groupLinkPaginate: IPaginateItem<IGroupLink>) => {
                this.generateGroupLinkListItemList(groupLinkPaginate?.itemList);
            });
    }

    /**
     * @private
     * @description generate group link card list config list
     * @param  {IGroupLink[] = []} groupLinkList
     * @returns void
     */
    private generateGroupLinkListItemList(groupLinkList: IGroupLink[] = []): void {
        if (!groupLinkList?.length) {
            return;
        }

        this.groupLinkListItemList = groupLinkList.map((groupLink: IGroupLink) => {
            return {
                cardConfig: this._configCardService.getGroupLinkCardConfig(groupLink),
                addNewLinkIntoGroupLinkButtonConfig: this._configButtonService.getCreateLinkButtonConfig(),
                createLinkConfig: {
                    groupLink: groupLink,
                },
                openModalCreateNewLink: false,
            };
        });
    }
}
