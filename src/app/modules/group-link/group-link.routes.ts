import { Routes } from '@angular/router';
import { RELATIVE_ROUTES } from '@constants/routes.constant';

export const GROUP_LINK_ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: RELATIVE_ROUTES.GROUP_LINK,
    },
    {
        path: RELATIVE_ROUTES.LIST,
        loadComponent: () =>
            import('@modules/group-link/modules/group-link-list/group-link-list.component').then((c) => c.GroupLinkListComponent),
    },
    {
        path: RELATIVE_ROUTES.DETAIL,
        loadComponent: () =>
            import('@modules/group-link/modules/group-link-detail/group-link-detail.component').then((c) => c.GroupLinkDetailComponent),
    },
];
