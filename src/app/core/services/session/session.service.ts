import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/core/auth/service/auth.service';
import { ABSOLUTE_ROUTES } from '@app/core/constants/routes.constant';
import { IGetUserByToken } from '@app/core/models/user/get-user-by-token.model';
import { IUser } from '@app/core/models/user/user.model';
import { LocalStorageService } from '@app/core/services/local-storage/local-storage.service';
import { SidebarService } from '@app/modules/sidebar/services/sidebar.service';
import { ENVIRONMENT } from '@environment/environment';

@Injectable({
    providedIn: 'root',
})
export class SessionService {
    constructor(
        private _localStorageService: LocalStorageService,
        private _sidebarService: SidebarService,
        private _authService: AuthService,
        private _router: Router
    ) {}

    initializeSession(token: string): void {
        if (!token || !token.length) {
            return;
        }

        this._localStorageService.setLocalStorageTokenItem(token);

        const GET_USER_BY_TOKEN: IGetUserByToken = {
            applicationId: ENVIRONMENT.applicationId,
            token: token,
        };
        this._authService.getUserByToken(GET_USER_BY_TOKEN).subscribe({
            next: (response: IUser) => {
                this._router.navigate([ABSOLUTE_ROUTES.LOGOUT]);
                this._localStorageService.setLocalStorageUserItem(response);
                this._sidebarService.setHiddenSidebar(false);
            },
            error: (e) => {
                this.destroySession();
            },
        });
    }

    destroySession(): void {
        this._localStorageService.removeAllLocalStorage();
        this._sidebarService.setHiddenSidebar(true);
        this._router.navigate([ABSOLUTE_ROUTES.LOGIN]);
    }
}
