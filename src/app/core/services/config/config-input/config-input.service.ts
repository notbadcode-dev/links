import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EInputType } from '@shared/modules/input/components/input.enum';
import { InputConfig } from '@shared/modules/input/components/input.model';

@Injectable({
    providedIn: 'root',
})
export class ConfigInputService {
    /**
     * @description Get userName input config
     * @param  {FormGroup} form
     * @param  {string} formControlName
     * @returns InputConfig
     */
    getUserNameInputConfig(form: FormGroup, formControlName: string): InputConfig {
        return {
            label: 'COMPONENTS.USER_LOGIN.INPUT.USERNAME.LABEL',
            title: 'COMPONENTS.USER_LOGIN.INPUT.USERNAME.LABEL',
            disabled: false,
            readonly: false,
            type: EInputType.TEXT,
            parentFormGroup: form,
            formControlName: formControlName,
        };
    }

    /**
     * @description Get password input config
     * @param  {FormGroup} form
     * @param  {string} formControlName
     * @returns InputConfig
     */
    getPasswordInputConfig(form: FormGroup, formControlName: string): InputConfig {
        return {
            label: 'COMPONENTS.USER_LOGIN.INPUT.USERNAME.LABEL',
            title: 'COMPONENTS.USER_LOGIN.INPUT.USERNAME.LABEL',
            disabled: false,
            readonly: false,
            type: EInputType.TEXT,
            parentFormGroup: form,
            formControlName: formControlName,
        };
    }
}
