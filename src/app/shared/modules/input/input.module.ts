import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { TooltipModule } from '../tooltip/tooltip.module';
import { InputComponent } from './components/input.component';

const COMPONENT_LIST = [InputComponent];
const MODULE_LIST = [CommonModule, TooltipModule, ReactiveFormsModule, TranslateModule];

@NgModule({
    declarations: [COMPONENT_LIST],
    imports: [MODULE_LIST],
    exports: [COMPONENT_LIST],
})
export class InputModule {}
