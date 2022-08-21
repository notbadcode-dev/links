import { Routes } from '@angular/router';
import { RELATIVE_ROUTES } from 'src/app/constants/routes.constant';

export const TEMPLATE_ROUTES: Routes = [{
        path: '',
        pathMatch: 'full',
        redirectTo: RELATIVE_ROUTES.COLOR,
    }, {
        path: RELATIVE_ROUTES.COLOR,
        loadComponent: () => import('./color-list/color-list.component').then(m => m.ColorListComponent)
    }, {
        path: RELATIVE_ROUTES.BUTTON,
        loadComponent: () => import('./button-list/button-list.component').then(m => m.ButtonListComponent)
    }
];