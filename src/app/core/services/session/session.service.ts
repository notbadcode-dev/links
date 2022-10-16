import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/core/auth/auth.service';
import { ABSOLUTE_ROUTES } from '@app/core/constants/routes.constant';
import { User } from '@app/core/models/user.model';
import { SidebarService } from '@app/modules/sidebar/services/sidebar.service';
import { LocalStorageService } from '@services/local-storage/local-storage.service';

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

        this._authService.getUserByToken(token).subscribe({
            next: (response: User) => {
                this._router.navigate([ABSOLUTE_ROUTES.LOGOUT]);
                this._localStorageService.setLocalStorageUserItem(response);
                this._sidebarService.setHiddenSidebar(false);
            },
            error: e => {
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
