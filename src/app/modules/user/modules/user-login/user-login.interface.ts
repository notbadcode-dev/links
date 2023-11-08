import { FormControl } from '@angular/forms';

export interface IUserLoginForm {
    [key: string]: FormControl<string | null>;
}
