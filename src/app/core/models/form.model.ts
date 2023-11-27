import { FormControl, FormControlState } from '@angular/forms';

export interface IFormBase {
    [key: string]: FormControl<string | null | FormControlState<string>>;
}
