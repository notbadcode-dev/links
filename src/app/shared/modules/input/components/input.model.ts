import { FormGroup } from '@angular/forms';
import { EInputType, TInputTypes } from './input.enum';

export class InputConfig {
    constructor(
        public label: string,
        public title: string,
        public disabled: boolean,
        public readonly: boolean,
        public type: TInputTypes,
        public parentFormGroup?: FormGroup,
        public formControlName?: string,
        public placeholder?: string,
        public hint?: string,
        public errorMessage?: string,
        public prependIcon?: string,
        public prependTooltip?: string,
        public appendIcon?: string,
        public appendTooltip?: string
    ) {}
}

export class InputConfigHelper {
    /**
     * @description Generate default input config
     * @returns {InputConfig}
     */
    static defaultInputConfig(): InputConfig {
        return new InputConfig('', '', false, false, EInputType.TEXT);
    }
}
