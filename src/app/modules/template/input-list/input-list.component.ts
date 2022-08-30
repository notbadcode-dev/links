import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputModule } from 'src/app/shared/modules/input/input.module';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputConfig, InputConfigHelper } from 'src/app/shared/modules/input/components/input.model';

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
  errorRequiredInputConfig!: InputConfig;
  hintInputConfig!: InputConfig;
  disabledInputConfig!: InputConfig;
  placeholderInputConfig!: InputConfig;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initializeFormGroup();
    this.generateInputConfigList();
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

  generateInputConfigList(): void {
    this.onlyInputConfig = {
      ...InputConfigHelper.defaultInputConfig(),
      label: 'Only input',
      title: 'This is a only input',
      parentFormGroup: this.inputListForm,
      formControlName: 'onlyInput',
    };

    this.disabledInputConfig = {
      ...this.onlyInputConfig,
      label: 'Disabled input',
      title: '',
      formControlName: 'disabledInput',
    };

    this.errorRequiredInputConfig = {
      ...this.onlyInputConfig,
      label: 'Error Required input',
      title: 'This is a input with error required',
      formControlName: 'errorRequierdInput',
    };

    const title: string = 'This is a input with hint';
    this.hintInputConfig = {
      ...this.onlyInputConfig,
      label: 'Hint input',
      title: title,
      hint: title,
      formControlName: 'hintInput',
    };

    this.placeholderInputConfig = {
      ...this.onlyInputConfig,
      label: 'Placeholder input',
      title: 'This is a input with placeholder',
      formControlName: 'placeholderInput',
      placeholder: 'eg.: placeholder',
    };
  }
}
