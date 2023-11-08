import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GroupLinkService } from '@http-services/group-link/group-link.service';
import { IGroupLink } from '@models/group/group-link.model';
import { IPaginateItem, PartialPaginateItemHelper } from '@models/pagination-item/pagination-item.model';
import { ConfigCardService } from '@services/config/config-card/config-card.service';
import { ButtonConfig } from '@shared/modules/button/components/button.model';
import { CardConfig } from '@shared/modules/card/card.model';
import { CardModule } from '@shared/modules/card/card.module';
import { LinkListItemModule } from '@shared/modules/link-list-item/link-list-item.module';

@Component({
    selector: 'lnk-group-link-list',
    standalone: true,
    imports: [CommonModule, CardModule, LinkListItemModule],
    templateUrl: './group-link-list.component.html',
    styleUrls: ['./group-link-list.component.scss'],
})
export class GroupLinkListComponent implements OnInit {
    linkIndexOffset = 1;

    groupLinkCardConfigList: CardConfig<IGroupLink>[] = [];

    addNewLinkButtonConfig!: ButtonConfig;

    constructor(private _groupLinkService: GroupLinkService, private _configCardService: ConfigCardService) {}

    ngOnInit(): void {
        this.getPaginatedGroupLinkList();
    }
    /**
     * @description Get paginated group link list
     * @returns void
     */
    getPaginatedGroupLinkList(): void {
        this._groupLinkService
            .getAllPaginated(PartialPaginateItemHelper.mapToObject())
            .subscribe((groupLinkPaginate: IPaginateItem<IGroupLink>) => {
                console.log(groupLinkPaginate);
                this.generateGroupLinkCardConfigList(groupLinkPaginate?.itemList);
            });
    }

    /**
     * @description generate group link card list config list
     * @param  {IGroupLink[] = []} groupLinkList
     * @returns void
     */
    generateGroupLinkCardConfigList(groupLinkList: IGroupLink[] = []): void {
        if (!groupLinkList?.length) {
            return;
        }

        this.groupLinkCardConfigList = groupLinkList.map((groupLink: IGroupLink) => {
            return this._configCardService.getGroupLinkCardConfig(groupLink);
        });
    }
}
