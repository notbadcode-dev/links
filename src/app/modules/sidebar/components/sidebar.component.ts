import { Component, OnInit } from '@angular/core';
import { APP_CONSTANT } from '@app/core/constants/app.constant';
import { SessionService } from '@app/core/services/session/session.service';
import { ButtonConfig, ButtonConfigHelper } from '@app/shared/modules/button/components/button.model';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'lnk-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
    public logoutButtonConfig!: ButtonConfig;

    constructor(private _sessionService: SessionService, private translateService: TranslateService) {}

    ngOnInit(): void {
        this.initializeButtonConfig();
    }

    /**
     * @description Initialize buttons config on this component
     * @returns void
     */
    initializeButtonConfig(): void {
        this.logoutButtonConfig = ButtonConfigHelper.getDestructiveButtonConfig({
            text: 'COMPONENTS.SIDEBAR.BUTTON.LOGOUT.TEXT',
            tooltip: 'COMPONENTS.SIDEBAR.BUTTON.LOGOUT.TEXT',
            disabled: false,
            icon: 'ri-user-unfollow-line',
            hotkeys: [APP_CONSTANT.MASTER_HOTKEY, 'L'],
        });
    }

    /**
     * @description Close session
     * @returns void
     */
    logout(): void {
        this._sessionService.destroySession();
    }
}
