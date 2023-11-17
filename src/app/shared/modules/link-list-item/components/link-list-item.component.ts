import { Component, Input, OnInit } from '@angular/core';
import { ILink } from '@models/link/link.model';
import { ConfigButtonService } from '@services/config/config-button/config-button.service';
import { UtilWindowService } from '@services/util/util-window/util-window.service';
import { ButtonConfig } from '@shared/modules/button/components/button.model';
import { LINK_LIST_ITEM_CONSTANT } from '../constant/link-list-item.constant';

@Component({
    selector: 'lnk-link-list-item',
    templateUrl: './link-list-item.component.html',
    styleUrls: ['./link-list-item.component.scss'],
})
export class LinkListItemComponent implements OnInit {
    @Input() _linkListItemPosition = LINK_LIST_ITEM_CONSTANT.LIMIT;
    @Input() _limit = LINK_LIST_ITEM_CONSTANT.DEFAULT_LINK_LIST_ITEM_INDEX_POSITION;
    @Input() _linkListItem: ILink | null = null;

    openUrlButtonConfig!: ButtonConfig;

    showLinkItem = true;

    constructor(private _utilWindowService: UtilWindowService, private _configButtonService: ConfigButtonService) {}

    ngOnInit(): void {
        this.initializeButtonConfig();
        this.showLinkItem = this.getShowLinkItem();
    }

    /**
     * @description Open a link in a new browser tab.
     * @param {string} link - The link to the external web page.
     * @returns {void}
     */
    openExternalLink(link: string): void {
        this._utilWindowService.openNewTab(link);
    }

    /**
     * @private
     * @description Initialize button config
     * @returns void
     */
    private initializeButtonConfig(): void {
        this.openUrlButtonConfig = this._configButtonService.getOpenUrlButtonConfig();
    }

    /**
     * @private
     * @description get showLinkItem according _linkListItemPosition and _limit
     * @returns boolean
     */
    private getShowLinkItem(): boolean {
        if (this._linkListItemPosition === null || this._linkListItemPosition === undefined || !this._limit) {
            return false;
        }

        return this._limit >= this._linkListItemPosition;
    }
}
