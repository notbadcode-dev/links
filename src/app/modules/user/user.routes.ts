import { Routes } from '@angular/router';
import { RELATIVE_ROUTES } from '@constants/routes.constant';

export const USER_ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: RELATIVE_ROUTES.LOGIN,
    },
    {
        path: RELATIVE_ROUTES.LOGIN,
        loadComponent: () => import('./modules/user-login/user-login.component').then((c) => c.UserLoginComponent),
    },
    {
        path: RELATIVE_ROUTES.LOGOUT,
        loadComponent: () => import('./modules/user-logout/user-logout.component').then((c) => c.UserLogoutComponent),
    },
    {
        path: RELATIVE_ROUTES.SIGN_IN,
        loadComponent: () => import('./modules/user-signin/user-signin.component').then((c) => c.UserSigninComponent),
    },
    {
        path: RELATIVE_ROUTES.RECOVERY,
        loadComponent: () => import('./modules/user-recovery/user-recovery.component').then((c) => c.UserRecoveryComponent),
    },
];
