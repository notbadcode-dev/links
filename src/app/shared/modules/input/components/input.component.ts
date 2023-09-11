import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { INPUT_CONSTANT } from './input.constant';
import { InputConfig } from './input.model';

@Component({
    selector: 'lnk-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit, OnDestroy {
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
    public isEmpty = true;
    public errorMessage = INPUT_CONSTANT.ERROR_INPUT_MESSAGE;

    private destroy$ = new Subject<void>();

    ngOnInit(): void {}

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    /**
     * @description Called when focus on input
     * @returns void
     */
    public onFocus(): void {
        this.onInputFocusEvent.emit(this.inputControl?.value || '');
    }

    /**
     * @description Delete input
     * @returns void
     */
    public deleteInput(): void {
        this.inputControl.patchValue('');
    }

    /**
     * @description Initialize formControl and initialize listen changes
     * @param  {InputConfig} config
     * @returns {void}
     */
    private initializeFormControl(config: InputConfig): void {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        const { parentFormGroup, formControlName } = config;

        if (!config) {
            return;
        }

        if (!parentFormGroup) {
            return;
        }

        if (!formControlName?.length) {
            return;
        }

        const FORM_GROUP: FormGroup = parentFormGroup as FormGroup;
        const FORM_CONTROL_NAME: string = formControlName;
        const FORM_CONTROL: FormControl = FORM_GROUP.get(FORM_CONTROL_NAME) as FormControl;

        this.inputControl = FORM_CONTROL;
        this.isOptional = !this.inputControl.hasValidator(Validators.required);

        this.formControlValueChanges();
        this.manageEmptyClassToInputElement(this.inputControl?.value);
    }

    /**
     * @private
     * @description Listen value changes on input formControl
     * @returns void
     */
    private formControlValueChanges(): void {
        if (!this.inputControl) {
            return;
        }

        this.inputControl.valueChanges.pipe(takeUntil(this.destroy$)).subscribe((inputValue: string) => {
            if (typeof inputValue === 'string') {
                this.onInputValueChangeEvent.emit(inputValue);
                this.manageEmptyClassToInputElement(inputValue);
            }
        });
    }
    /**
     * @private
     * @description Add or removed empty class to input HTML Element
     * @param  {string} inputValue
     * @returns void
     */
    private manageEmptyClassToInputElement(inputValue: string): void {
        this.isEmpty = !inputValue?.length;
    }
}
