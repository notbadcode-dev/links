import {Routes} from '@angular/router';
import { RELATIVE_ROUTES } from 'src/app/constants/routes.constant';
import { ColorComponent } from './color/color.component';

export const TEMPLATE_ROUTES: Routes = [{
        path: '',
        pathMatch: 'full',
        redirectTo: RELATIVE_ROUTES.COLOR
    }, {
        path: RELATIVE_ROUTES.COLOR,
        component: ColorComponent
    }
];