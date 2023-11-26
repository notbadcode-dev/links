import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GroupLinkService } from '@http-services/group-link/group-link.service';
import { IGroupLink } from '@models/group/group-link.model';
import { IPaginateItem, PartialPaginateItemHelper } from '@models/pagination-item/pagination-item.model';
import { AppBackdropService } from '@services/app-backdrop/app-backdrop.service';
import { ButtonModule } from '@shared/modules/button/button.module';
import { ICardConfig } from '@shared/modules/card/models/card.model';
import { SimpleCardModule } from '@shared/modules/card/modules/simple-card/simple-card.module';
import { CreateLinkModule } from '@shared/modules/create-link/create-link.module';
import { LinkListItemModule } from '@shared/modules/link-list-item/link-list-item.module';
import { ModalModule } from '@shared/modules/modal/modal.module';
import { IGroupLinkListItem, GroupLinkListItemHelper } from './group-link-list.interface';
import { GroupLinkDetailSimpleComponent } from '@modules/group-link/modules/group-link-detail/group-link-detail-simple/group-link-detail-simple.component';
import { GroupLinkDetailExpandComponent } from '@modules/group-link/modules/group-link-detail/group-link-detail-expand/group-link-detail-expand.component';
import { GroupLinkDataService } from '@modules/group-link/services/group-link-data.service';

@Component({
    selector: 'lnk-group-link-list',
    standalone: true,
    imports: [
        CommonModule,
        LinkListItemModule,
        ButtonModule,
        CreateLinkModule,
        SimpleCardModule,
        ModalModule,
        GroupLinkDetailSimpleComponent,
        GroupLinkDetailExpandComponent,
    ],
    templateUrl: './group-link-list.component.html',
    styleUrls: ['./group-link-list.component.scss'],
})
export class GroupLinkListComponent implements OnInit {
    isOpenCreateLinkModal = false;

    groupLinkCardConfigList: ICardConfig<IGroupLink>[] = [];
    groupLinkListItemList: IGroupLinkListItem[] = [];

    constructor(
        public _groupLinkDataService: GroupLinkDataService,
        private _groupLinkService: GroupLinkService
    ) {}

    ngOnInit(): void {
        this.getPaginatedGroupLinkList();
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
                this.groupLinkListItemList = groupLinkPaginate?.itemList?.map(GroupLinkListItemHelper.getDefault) ?? [];
            });
    }
}
