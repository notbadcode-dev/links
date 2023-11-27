import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonModule } from '@shared/modules/button/button.module';
import { CreateLinkModule } from '@shared/modules/create-link/create-link.module';
import { LinkListItemModule } from '@shared/modules/link-list-item/link-list-item.module';
import { IGroupLinkListItem } from '@modules/group-link/modules/group-link-list/group-link-list.interface';
import { SimpleCardModule } from '@shared/modules/card/modules/simple-card/simple-card.module';
import { GroupLinkDataService } from '@modules/group-link/services/group-link-data.service';
import { ModalModule } from '@shared/modules/modal/modal.module';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'lnk-group-link-detail-simple',
    standalone: true,
    imports: [CommonModule, LinkListItemModule, ButtonModule, CreateLinkModule, ModalModule, SimpleCardModule, TranslateModule],
    templateUrl: './group-link-detail-simple.component.html',
    styleUrls: ['../group-link-detail.component.scss', './group-link-detail-simple.component.scss'],
})
export class GroupLinkDetailSimpleComponent {
    @Input() set _groupLinkListItem(_groupLinkListItem: IGroupLinkListItem) {
        if (_groupLinkListItem) {
            this.groupLinkListItem = _groupLinkListItem;
        }
    }

    groupLinkListItem!: IGroupLinkListItem;

    constructor(public _groupLinkDataService: GroupLinkDataService) {}
}
