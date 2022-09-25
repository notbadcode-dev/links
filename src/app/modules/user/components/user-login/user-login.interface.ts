import { FormControl } from '@angular/forms';

export interface UserLoginForm {
    userName: FormControl<string>;
    paraphrase?: FormControl<string>;
}
