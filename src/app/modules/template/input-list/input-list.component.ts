import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
        const baseInputConfig: InputConfig = {
            ...InputConfigHelper.defaultInputConfig(),
            label: 'Only input',
            title: 'This is a only input',
            parentFormGroup: this.inputListForm,
            formControlName: 'onlyInput',
        };
        this.onlyInputConfig = baseInputConfig;

        const prependIcon = 'ri-user-line';
        const prependIconTooltip = 'Prepend tooltip';

        this.prependOnlyInputConfig = {
            ...baseInputConfig,
            label: 'P. only input',
            prependIcon: prependIcon,
            prependTooltip: prependIconTooltip,
        };

        const appendIcon = 'ri-user-line';
        const appendIconTooltip = 'Append tooltip';

        this.appendOnlyInputConfig = {
            ...baseInputConfig,
            label: 'A. only input',
            appendIcon: appendIcon,
            appendTooltip: appendIconTooltip,
        };

        this.prependAppendOnlyInputConfig = {
            ...this.prependOnlyInputConfig,
            label: 'P/A only input',
            appendIcon: appendIcon,
            appendTooltip: appendIconTooltip,
        };
    }

    generateDisabledInputList(): void {
        const baseInputConfig: InputConfig = {
            ...InputConfigHelper.defaultInputConfig(),
            label: 'Disabled input',
            title: '',
            formControlName: 'disabledInput',
            parentFormGroup: this.inputListForm,
        };
        this.disabledInputConfig = baseInputConfig;

        const prependIcon = 'ri-user-line';
        const prependIconTooltip = 'Prepend tooltip';

        this.prependDisabledInputConfig = {
            ...baseInputConfig,
            label: 'P. disabled input',
            prependIcon: prependIcon,
            prependTooltip: prependIconTooltip,
        };

        const appendIcon = 'ri-user-line';
        const appendIconTooltip = 'Append tooltip';

        this.appendDisabledInputConfig = {
            ...baseInputConfig,
            label: 'A. disabled input',
            appendIcon: appendIcon,
            appendTooltip: appendIconTooltip,
        };

        this.prependAppendDisabledInputConfig = {
            ...this.prependDisabledInputConfig,
            label: 'P/A disabled input',
            appendIcon: appendIcon,
            appendTooltip: appendIconTooltip,
        };
    }

    generateErrorRequiredInputList(): void {
        const baseInputConfig: InputConfig = {
            ...InputConfigHelper.defaultInputConfig(),
            label: 'Error Required input',
            title: 'This is a input with error required',
            formControlName: 'errorRequierdInput',
            parentFormGroup: this.inputListForm,
        };
        this.errorRequiredInputConfig = baseInputConfig;

        const prependIcon = 'ri-user-line';
        const prependIconTooltip = 'Prepend tooltip';

        this.prependErrorRequiredInputConfig = {
            ...baseInputConfig,
            label: 'P. E. required input',
            prependIcon: prependIcon,
            prependTooltip: prependIconTooltip,
        };

        const appendIcon = 'ri-user-line';
        const appendIconTooltip = 'Append tooltip';

        this.appendErrorRequiredInputConfig = {
            ...baseInputConfig,
            label: 'A. E. required input',
            appendIcon: appendIcon,
            appendTooltip: appendIconTooltip,
        };

        this.prependAppendErrorRequiredInputConfig = {
            ...this.prependErrorRequiredInputConfig,
            label: 'P/A E. required input',
            appendIcon: appendIcon,
            appendTooltip: appendIconTooltip,
        };
    }

    generateHintInputList(): void {
        const title = 'This is a input with hint';
        const baseInputConfig = {
            ...InputConfigHelper.defaultInputConfig(),
            label: 'Hint input',
            title: title,
            hint: title,
            formControlName: 'hintInput',
        };
        this.hintInputConfig = baseInputConfig;

        const prependIcon = 'ri-user-line';
        const prependIconTooltip = 'Prepend tooltip';

        this.prependHintInputConfig = {
            ...baseInputConfig,
            label: 'P. Hint input',
            prependIcon: prependIcon,
            prependTooltip: prependIconTooltip,
        };

        const appendIcon = 'ri-user-line';
        const appendIconTooltip = 'Append tooltip';

        this.appendHintInputConfig = {
            ...baseInputConfig,
            label: 'A. Hint input',
            appendIcon: appendIcon,
            appendTooltip: appendIconTooltip,
        };

        this.prependAppendHintInputConfig = {
            ...this.prependHintInputConfig,
            label: 'P/A Hint input',
            appendIcon: appendIcon,
            appendTooltip: appendIconTooltip,
        };
    }

    generatePlaceholderInputList(): void {
        const baseInputConfig = {
            ...this.onlyInputConfig,
            label: 'Placeholder input',
            title: 'This is a input with placeholder',
            formControlName: 'placeholderInput',
            placeholder: 'eg.: placeholder',
        };
        this.placeholderInputConfig = baseInputConfig;

        const prependIcon = 'ri-user-line';
        const prependIconTooltip = 'Prepend tooltip';

        this.prependPlaceholderInputConfig = {
            ...baseInputConfig,
            label: 'P. Placeholder input',
            prependIcon: prependIcon,
            prependTooltip: prependIconTooltip,
        };

        const appendIcon = 'ri-user-line';
        const appendIconTooltip = 'Append tooltip';

        this.appendPlaceholderInputConfig = {
            ...baseInputConfig,
            label: 'A. Placeholder input',
            appendIcon: appendIcon,
            appendTooltip: appendIconTooltip,
        };

        this.prependAppendPlaceholderInputConfig = {
            ...this.prependPlaceholderInputConfig,
            label: 'P/A Placeholder input',
            appendIcon: appendIcon,
            appendTooltip: appendIconTooltip,
        };
    }
}
