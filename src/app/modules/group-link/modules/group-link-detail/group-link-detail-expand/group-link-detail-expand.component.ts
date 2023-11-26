import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkListItemModule } from '@shared/modules/link-list-item/link-list-item.module';
import { ButtonModule } from '@shared/modules/button/button.module';
import { CreateLinkModule } from '@shared/modules/create-link/create-link.module';
import { SimpleCardModule } from '@shared/modules/card/modules/simple-card/simple-card.module';
import { IGroupLinkListItem } from '@modules/group-link/modules/group-link-list/group-link-list.interface';
import { GroupLinkDataService } from '@modules/group-link/services/group-link-data.service';
import { ModalModule } from '@shared/modules/modal/modal.module';
import { ConfigButtonService } from '@services/config/config-button/config-button.service';
import { ButtonConfig } from '@shared/modules/button/components/button.model';

@Component({
    selector: 'lnk-group-link-detail-expand',
    standalone: true,
    imports: [CommonModule, LinkListItemModule, ButtonModule, CreateLinkModule, ModalModule, SimpleCardModule],
    templateUrl: './group-link-detail-expand.component.html',
    styleUrls: ['../group-link-detail.component.scss', './group-link-detail-expand.component.scss'],
})
export class GroupLinkDetailExpandComponent implements OnInit {
    @Input() set _groupLinkListItem(_groupLinkListItem: IGroupLinkListItem) {
        if (_groupLinkListItem) {
            this.groupLinkListItem = _groupLinkListItem;
        }
    }

    @Output() _cancel = new EventEmitter<boolean>();

    groupLinkListItem!: IGroupLinkListItem;

    cancelCreateLinkButtonConfig!: ButtonConfig;

    constructor(
        public _groupLinkDataService: GroupLinkDataService,
        public _configButtonService: ConfigButtonService
    ) {}

    ngOnInit(): void {
        this.initializeButtonConfig();
    }

    /**
     * @description Cancel expand group link
     * @param  {IGroupLinkListItem} groupLinkListItem
     * @returns void
     */
    cancelExpandGroupLink(groupLinkListItem: IGroupLinkListItem): void {
        if (!groupLinkListItem) {
            return;
        }

        this._cancel.emit(true);
    }

    /**
     * @private
     * @description Initialize button config
     * @returns void
     */
    private initializeButtonConfig(): void {
        this.cancelCreateLinkButtonConfig = this._configButtonService.getCancelButtonButtonConfig();
    }
}
