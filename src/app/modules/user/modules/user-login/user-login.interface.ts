import { FormControl } from '@angular/forms';

export interface IUserLoginForm {
    userName: FormControl<string | null>;
    password?: FormControl<string | null>;
}
