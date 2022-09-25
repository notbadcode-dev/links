import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input.component';
import { TooltipModule } from '../tooltip/tooltip.module';
import { ReactiveFormsModule } from '@angular/forms';

const COMPONENT_LIST = [InputComponent];
const MODULE_LIST = [CommonModule, TooltipModule, ReactiveFormsModule];

@NgModule({
    declarations: [COMPONENT_LIST],
    imports: [MODULE_LIST],
    exports: [COMPONENT_LIST],
})
export class InputModule {}
