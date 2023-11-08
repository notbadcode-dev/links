import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { APP_ICON_CONSTANT } from '@constants/app-icon.constant';
import { InputConfig, InputConfigHelper } from '@shared/modules/input/components/input.model';
import { InputModule } from '@shared/modules/input/input.module';

@Component({
    selector: 'lnk-input-list',
    standalone: true,
    imports: [CommonModule, InputModule, ReactiveFormsModule],
    templateUrl: './input-list.component.html',
    styleUrls: ['./input-list.component.scss'],
})
export class InputListComponent implements OnInit {
    inputListForm!: FormGroup;

    onlyInputConfig!: InputConfig;

    disabledInputConfig!: InputConfig;

    errorRequiredInputConfig!: InputConfig;

    hintInputConfig!: InputConfig;

    placeholderInputConfig!: InputConfig;

    prependOnlyInputConfig!: InputConfig;

    prependDisabledInputConfig!: InputConfig;

    prependErrorRequiredInputConfig!: InputConfig;

    prependHintInputConfig!: InputConfig;

    prependPlaceholderInputConfig!: InputConfig;

    appendOnlyInputConfig!: InputConfig;

    appendDisabledInputConfig!: InputConfig;

    appendErrorRequiredInputConfig!: InputConfig;

    appendHintInputConfig!: InputConfig;

    appendPlaceholderInputConfig!: InputConfig;

    prependAppendOnlyInputConfig!: InputConfig;

    prependAppendDisabledInputConfig!: InputConfig;

    prependAppendErrorRequiredInputConfig!: InputConfig;

    prependAppendHintInputConfig!: InputConfig;

    prependAppendPlaceholderInputConfig!: InputConfig;

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit(): void {
        this.initializeFormGroup();
        this.generateTemplateInputList();
    }

    /**
     * @description Initialize FromGroup configuration
     * @returns {void}
     */
    initializeFormGroup(): void {
        this.inputListForm = this.formBuilder.group({
            onlyInput: new FormControl(''),
            disabledInput: new FormControl(''),
            errorRequierdInput: new FormControl('', Validators.required),
            hintInput: new FormControl(''),
            placeholderInput: new FormControl(''),
        });

        this.inputListForm.get('disabledInput')?.disable();
    }

    /**
     * @description Generate input list from input config for draw on template
     * @returns {void}
     */
    generateTemplateInputList(): void {
        this.generateOnlyInputList();
        this.generateDisabledInputList();
        this.generateErrorRequiredInputList();
        this.generateHintInputList();
        this.generatePlaceholderInputList();
    }

    generateOnlyInputList(): void {
        const BASE_INPUT_CONFIG: InputConfig = {
            ...InputConfigHelper.defaultInputConfig(),
            label: 'Only input',
            title: 'This is a only input',
            parentFormGroup: this.inputListForm,
            formControlName: 'onlyInput',
        };
        this.onlyInputConfig = BASE_INPUT_CONFIG;

        const PREPEND_ICON = APP_ICON_CONSTANT.USER;
        const PREPEND_ICON_TOOLTIP = 'Prepend tooltip';

        this.prependOnlyInputConfig = {
            ...BASE_INPUT_CONFIG,
            label: 'P. only input',
            prependIcon: PREPEND_ICON,
            prependTooltip: PREPEND_ICON_TOOLTIP,
        };

        const APPEND_ICON = APP_ICON_CONSTANT.USER;
        const APPEND_ICON_TOOLTIP = 'Append tooltip';

        this.appendOnlyInputConfig = {
            ...BASE_INPUT_CONFIG,
            label: 'A. only input',
            appendIcon: APPEND_ICON,
            appendTooltip: APPEND_ICON_TOOLTIP,
        };

        this.prependAppendOnlyInputConfig = {
            ...this.prependOnlyInputConfig,
            label: 'P/A only input',
            appendIcon: APPEND_ICON,
            appendTooltip: APPEND_ICON_TOOLTIP,
        };
    }

    generateDisabledInputList(): void {
        const BASE_INPUT_CONFIG: InputConfig = {
            ...InputConfigHelper.defaultInputConfig(),
            label: 'Disabled input',
            title: '',
            formControlName: 'disabledInput',
            parentFormGroup: this.inputListForm,
        };
        this.disabledInputConfig = BASE_INPUT_CONFIG;

        const PREPEND_ICON = APP_ICON_CONSTANT.USER;
        const PREPEND_ICON_TOOLTIP = 'Prepend tooltip';

        this.prependDisabledInputConfig = {
            ...BASE_INPUT_CONFIG,
            label: 'P. disabled input',
            prependIcon: PREPEND_ICON,
            prependTooltip: PREPEND_ICON_TOOLTIP,
        };

        const APPEND_ICON = APP_ICON_CONSTANT.USER;
        const APPEND_ICON_TOOLTIP = 'Append tooltip';

        this.appendDisabledInputConfig = {
            ...BASE_INPUT_CONFIG,
            label: 'A. disabled input',
            appendIcon: APPEND_ICON,
            appendTooltip: APPEND_ICON_TOOLTIP,
        };

        this.prependAppendDisabledInputConfig = {
            ...this.prependDisabledInputConfig,
            label: 'P/A disabled input',
            appendIcon: APPEND_ICON,
            appendTooltip: APPEND_ICON_TOOLTIP,
        };
    }

    generateErrorRequiredInputList(): void {
        const BASE_INPUT_CONFIG: InputConfig = {
            ...InputConfigHelper.defaultInputConfig(),
            label: 'Error Required input',
            title: 'This is a input with error required',
            formControlName: 'errorRequierdInput',
            parentFormGroup: this.inputListForm,
        };
        this.errorRequiredInputConfig = BASE_INPUT_CONFIG;

        const PREPEND_ICON = APP_ICON_CONSTANT.USER;
        const PREPEND_ICON_TOOLTIP = 'Prepend tooltip';

        this.prependErrorRequiredInputConfig = {
            ...BASE_INPUT_CONFIG,
            label: 'P. E. required input',
            prependIcon: PREPEND_ICON,
            prependTooltip: PREPEND_ICON_TOOLTIP,
        };

        const APPEND_ICON = APP_ICON_CONSTANT.USER;
        const APPEND_ICON_TOOLTIP = 'Append tooltip';

        this.appendErrorRequiredInputConfig = {
            ...BASE_INPUT_CONFIG,
            label: 'A. E. required input',
            appendIcon: APPEND_ICON,
            appendTooltip: APPEND_ICON_TOOLTIP,
        };

        this.prependAppendErrorRequiredInputConfig = {
            ...this.prependErrorRequiredInputConfig,
            label: 'P/A E. required input',
            appendIcon: APPEND_ICON,
            appendTooltip: APPEND_ICON_TOOLTIP,
        };
    }

    generateHintInputList(): void {
        const TITLE = 'This is a input with hint';
        const BASE_INPUT_CONFIG = {
            ...InputConfigHelper.defaultInputConfig(),
            label: 'Hint input',
            title: TITLE,
            hint: TITLE,
            formControlName: 'hintInput',
        };
        this.hintInputConfig = BASE_INPUT_CONFIG;

        const PREPEND_ICON = APP_ICON_CONSTANT.USER;
        const PREPEND_ICON_TOOLTIP = 'Prepend tooltip';

        this.prependHintInputConfig = {
            ...BASE_INPUT_CONFIG,
            label: 'P. Hint input',
            prependIcon: PREPEND_ICON,
            prependTooltip: PREPEND_ICON_TOOLTIP,
        };

        const APPEND_ICON = APP_ICON_CONSTANT.USER;
        const APPEND_ICON_TOOLTIP = 'Append tooltip';

        this.appendHintInputConfig = {
            ...BASE_INPUT_CONFIG,
            label: 'A. Hint input',
            appendIcon: APPEND_ICON,
            appendTooltip: APPEND_ICON_TOOLTIP,
        };

        this.prependAppendHintInputConfig = {
            ...this.prependHintInputConfig,
            label: 'P/A Hint input',
            appendIcon: APPEND_ICON,
            appendTooltip: APPEND_ICON_TOOLTIP,
        };
    }

    generatePlaceholderInputList(): void {
        const BASE_INPUT_CONFIG = {
            ...this.onlyInputConfig,
            label: 'Placeholder input',
            title: 'This is a input with placeholder',
            formControlName: 'placeholderInput',
            placeholder: 'eg.: placeholder',
        };
        this.placeholderInputConfig = BASE_INPUT_CONFIG;

        const PREPEND_ICON = APP_ICON_CONSTANT.USER;
        const PREPEND_ICON_TOOLTIP = 'Prepend tooltip';

        this.prependPlaceholderInputConfig = {
            ...BASE_INPUT_CONFIG,
            label: 'P. Placeholder input',
            prependIcon: PREPEND_ICON,
            prependTooltip: PREPEND_ICON_TOOLTIP,
        };

        const APPEND_ICON = APP_ICON_CONSTANT.USER;
        const APPEND_ICON_TOOLTIP = 'Append tooltip';

        this.appendPlaceholderInputConfig = {
            ...BASE_INPUT_CONFIG,
            label: 'A. Placeholder input',
            appendIcon: APPEND_ICON,
            appendTooltip: APPEND_ICON_TOOLTIP,
        };

        this.prependAppendPlaceholderInputConfig = {
            ...this.prependPlaceholderInputConfig,
            label: 'P/A Placeholder input',
            appendIcon: APPEND_ICON,
            appendTooltip: APPEND_ICON_TOOLTIP,
        };
    }
}
