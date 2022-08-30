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
  public isOptional: boolean = true;

  public errorMessage = ERROR_INPUT_MESSAGE;

  constructor() {}

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

    const formGroup: FormGroup = config.parentFormGroup;
    const formControlName: string = config.formControlName;
    const formControl: FormControl = formGroup.get(formControlName) as FormControl;

    this.inputControl = formControl;

    this.inputControl.valueChanges.subscribe((inputValue: string) => {
      if (typeof inputValue === 'string') {
        const inputElement: HTMLElement | null = document.getElementById(this.config.label);
        this.onInputValueChangeEvent.emit(inputValue);

        if (inputElement) {
          if (inputValue.length > 0) {
            inputElement?.classList.add('not-empty');
          }

          if (inputValue.length === 0) {
            inputElement?.classList.remove('not-empty');
          }
        }
      }
    });

    this.isOptional = !this.inputControl.hasValidator(Validators.required);
  }

  public onFocus() {
    this.onInputFocusEvent.emit(this.inputControl?.value || '');
  }
}
