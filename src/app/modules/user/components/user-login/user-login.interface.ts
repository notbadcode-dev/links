import { FormControl } from '@angular/forms';

export interface IUserLoginForm {
    userName: FormControl<string>;
    password?: FormControl<string>;
}
