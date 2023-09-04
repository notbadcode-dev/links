import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ERROR_INPUT_MESSAGE } from './input.constant';
import { InputConfig } from './input.model';

@Component({
    selector: 'lnk-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
    @Input() set _config(_config: InputConfig) {
        if (_config) {
            this.config = _config;
            this.initializeFormControl(_config);
        }
    }

    @Output() onInputFocusEvent: EventEmitter<string> = new EventEmitter();

    @Output() onInputValueChangeEvent: EventEmitter<string> = new EventEmitter();

    public config!: InputConfig;

    public inputControl: FormControl = new FormControl('');

    public isOptional = true;

    public errorMessage = ERROR_INPUT_MESSAGE;

    ngOnInit(): void {}

    /**
     * @description Initilize formControl and initilizae listen changes
     * @param  {InputConfig} config
     * @returns {void}
     */
    private initializeFormControl(config: InputConfig): void {
        if (!config) {
            return;
        }

        if (!config.parentFormGroup) {
            return;
        }

        if (!config.formControlName || config.formControlName.length === 0) {
            return;
        }

        const FORM_GROUP: FormGroup = config.parentFormGroup;
        const FORM_CONTROL_NAME: string = config.formControlName;
        const FORM_CONTROL: FormControl = FORM_GROUP.get(FORM_CONTROL_NAME) as FormControl;

        this.inputControl = FORM_CONTROL;

        this.inputControl.valueChanges.subscribe((inputValue: string) => {
            if (typeof inputValue === 'string') {
                const INPUT_ELEMENT: HTMLElement | null = document.getElementById(this.config.label);
                this.onInputValueChangeEvent.emit(inputValue);

                if (INPUT_ELEMENT) {
                    if (inputValue.length > 0) {
                        INPUT_ELEMENT?.classList.add('not-empty');
                    }

                    if (inputValue.length === 0) {
                        INPUT_ELEMENT?.classList.remove('not-empty');
                    }
                }
            }
        });

        this.isOptional = !this.inputControl.hasValidator(Validators.required);
    }

    public onFocus(): void {
        this.onInputFocusEvent.emit(this.inputControl?.value || '');
    }
}
