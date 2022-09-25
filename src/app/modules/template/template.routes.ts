import { Routes } from '@angular/router';
import { RELATIVE_ROUTES } from '@constants/routes.constant';

export const TEMPLATE_ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: RELATIVE_ROUTES.COLOR,
    },
    {
        path: RELATIVE_ROUTES.COLOR,
        loadComponent: () => import('./color-list/color-list.component').then(c => c.ColorListComponent),
    },
    {
        path: RELATIVE_ROUTES.BUTTON,
        loadComponent: () => import('./button-list/button-list.component').then(c => c.ButtonListComponent),
    },
    {
        path: RELATIVE_ROUTES.INPUT,
        loadComponent: () => import('./input-list/input-list.component').then(c => c.InputListComponent),
    },
];
