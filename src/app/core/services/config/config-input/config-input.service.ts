import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EInputType } from '@shared/modules/input/enums/input.enum';
import { InputConfig } from '@shared/modules/input/models/input.model';

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
            label: 'COMPONENTS.USER_LOGIN.INPUT.PASSWORD.LABEL',
            title: 'COMPONENTS.USER_LOGIN.INPUT.PASSWORD.LABEL',
            disabled: false,
            readonly: false,
            type: EInputType.TEXT,
            parentFormGroup: form,
            formControlName: formControlName,
        };
    }

    /**
     * @description Get name input config
     * @param  {FormGroup} form
     * @param  {string} formControlName
     * @returns InputConfig
     */
    getGroupLinkNameLinkInputConfig(form: FormGroup, formControlName: string): InputConfig {
        return {
            label: 'COMPONENTS.CREATE_LINK.INPUT.GROUP_LINK_NAME.LABEL',
            title: 'COMPONENTS.CREATE_LINK.INPUT.GROUP_LINK_NAME.LABEL',
            disabled: true,
            readonly: true,
            type: EInputType.TEXT,
            parentFormGroup: form,
            formControlName: formControlName,
        };
    }

    /**
     * @description Get name input config
     * @param  {FormGroup} form
     * @param  {string} formControlName
     * @returns InputConfig
     */
    getNameLinkInputConfig(form: FormGroup, formControlName: string): InputConfig {
        return {
            label: 'COMPONENTS.CREATE_LINK.INPUT.NAME.LABEL',
            title: 'COMPONENTS.CREATE_LINK.INPUT.NAME.LABEL',
            disabled: false,
            readonly: false,
            type: EInputType.TEXT,
            parentFormGroup: form,
            formControlName: formControlName,
        };
    }

    /**
     * @description Get url input config
     * @param  {FormGroup} form
     * @param  {string} formControlName
     * @returns InputConfig
     */
    getUrlLinkInputConfig(form: FormGroup, formControlName: string): InputConfig {
        return {
            label: 'COMPONENTS.CREATE_LINK.INPUT.URL.LABEL',
            title: 'COMPONENTS.CREATE_LINK.INPUT.URL.LABEL',
            disabled: false,
            readonly: false,
            type: EInputType.TEXT,
            parentFormGroup: form,
            formControlName: formControlName,
        };
    }
}
