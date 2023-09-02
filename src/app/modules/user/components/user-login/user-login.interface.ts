import { FormControl } from '@angular/forms';

export interface UserLoginForm {
    userName: FormControl<string>;
    password?: FormControl<string>;
}
