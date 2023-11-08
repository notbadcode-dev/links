import { Component, Input, OnInit } from '@angular/core';
import { ILink } from '@models/link/link.model';
import { ConfigButtonService } from '@services/config/config-button/config-button.service';
import { UtilWindowService } from '@services/util/util-window/util-window.service';
import { ButtonConfig } from '@shared/modules/button/components/button.model';

@Component({
    selector: 'lnk-link-list-item',
    templateUrl: './link-list-item.component.html',
    styleUrls: ['./link-list-item.component.scss'],
})
export class LinkListItemComponent implements OnInit {
    @Input() _linkListItemPosition = 0;
    @Input() _linkListItem: ILink | null = null;

    openUrlButtonConfig!: ButtonConfig;

    constructor(private _utilWindowService: UtilWindowService, private _configButtonService: ConfigButtonService) {}

    ngOnInit(): void {
        this.initializeButtonConfig();
    }

    /**
     * @private Initialize button config
     * @returns void
     */
    private initializeButtonConfig(): void {
        this.openUrlButtonConfig = this._configButtonService.getOpenUrlButtonConfig();
    }

    /**
     * @description Open a link in a new browser tab.
     * @param {string} link - The link to the external web page.
     * @returns {void}
     */
    openExternalLink(link: string): void {
        this._utilWindowService.openNewTab(link);
    }
}
