import { FormControl } from '@angular/forms';

export interface IFormBase {
    [key: string]: FormControl<string | null>;
}
