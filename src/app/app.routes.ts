import { Routes } from '@angular/router';
import { RELATIVE_ROUTES } from '@constants/routes.constant';

const APP_ROUTES_FOR_ROOT: Routes = [
    {
        path: RELATIVE_ROUTES.UNKNOWM,
        redirectTo: RELATIVE_ROUTES.USER,
    },
    {
        path: RELATIVE_ROUTES.USER,
        loadChildren: () => import('@modules/user/user.routes').then((module: { USER_ROUTES: Routes }) => module.USER_ROUTES),
    },
    {
        path: RELATIVE_ROUTES.GROUP_LINK,
        loadChildren: () =>
            import('@modules/group-link/group-link.routes').then((module: { GROUP_LINK_ROUTES: Routes }) => module.GROUP_LINK_ROUTES),
    },
    {
        path: RELATIVE_ROUTES.TEMPLATE,
        loadChildren: () =>
            import('@modules/template/template.routes').then((module: { TEMPLATE_ROUTE_LIST: Routes }) => module.TEMPLATE_ROUTE_LIST),
    },
];

export default APP_ROUTES_FOR_ROOT;
