import { Component, OnInit } from '@angular/core';
import { ConfigButtonService } from '@services/config/config-button/config-button.service';
import { SessionService } from '@services/session/session.service';
import { ButtonConfig } from '@shared/modules/button/components/button.model';

@Component({
    selector: 'lnk-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
    public logoutButtonConfig!: ButtonConfig;

    constructor(private _sessionService: SessionService, private _configButtonService: ConfigButtonService) {}

    ngOnInit(): void {
        this.initializeButtonConfig();
    }

    /**
     * @description Initialize buttons config on this component
     * @returns void
     */
    initializeButtonConfig(): void {
        this.logoutButtonConfig = this._configButtonService.getLogoutButtonConfig();
    }

    /**
     * @description Close session
     * @returns void
     */
    logout(): void {
        this._sessionService.destroySession();
    }
}
