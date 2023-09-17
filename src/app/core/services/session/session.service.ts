import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth/service/auth.service';
import { ABSOLUTE_ROUTES } from '@constants/routes.constant';
import { IGetUserByToken } from '@models/user/get-user-by-token.model';
import { IUser } from '@models/user/user.model';
import { SidebarService } from '@modules/sidebar/services/sidebar.service';
import { EnvironmentService } from '@services/environment/environment.service';
import { LocalStorageService } from '@services/local-storage/local-storage.service';

@Injectable({
    providedIn: 'root',
})
export class SessionService {
    constructor(
        private _localStorageService: LocalStorageService,
        private _sidebarService: SidebarService,
        private _authService: AuthService,
        private _router: Router,
        private _environmentService: EnvironmentService
    ) {}

    initializeSession(token: string): void {
        if (!token || !token.length) {
            return;
        }

        this._localStorageService.setLocalStorageTokenItem(token);

        const GET_USER_BY_TOKEN: IGetUserByToken = {
            applicationId: this._environmentService.getApplicationId,
            token: token,
        };
        this._authService.getUserByToken(GET_USER_BY_TOKEN).subscribe({
            next: (response: IUser) => {
                this._router.navigate([ABSOLUTE_ROUTES.LOGOUT]);
                this._localStorageService.setLocalStorageUserItem(response);
                this._sidebarService.setHiddenSidebar(false);
            },
            error: () => {
                this.destroySession();
            },
        });
    }

    destroySession(): void {
        this._localStorageService.clearAllLocalStorageItems();
        this._sidebarService.setHiddenSidebar(true);
        this._router.navigate([ABSOLUTE_ROUTES.LOGIN]);
    }
}
