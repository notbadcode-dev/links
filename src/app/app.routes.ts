import { Routes } from '@angular/router';
import { RELATIVE_ROUTES } from '@constants/routes.constant';

const APP_ROUTES_FOR_ROOT: Routes = [
    {
        path: '*',
        redirectTo: RELATIVE_ROUTES.USER,
    },
    {
        path: RELATIVE_ROUTES.USER,
        loadChildren: () => import('./modules/user/user.routes').then(mod => mod.USER_ROUTES),
    },
    {
        path: RELATIVE_ROUTES.TEMPLATE,
        loadChildren: () =>
            import('../app/modules/template/template.routes').then(mod => mod.TEMPLATE_ROUTES),
    },
];

export default APP_ROUTES_FOR_ROOT;
