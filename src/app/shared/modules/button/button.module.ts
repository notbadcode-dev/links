import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TooltipModule } from '../tooltip/tooltip.module';
import { AccentButtonComponent } from './components/accent-button/accent-button.component';
import { ButtonComponent } from './components/button.component';
import { DestructiveButtonComponent } from './components/destructive-button/destructive-button.component';
import { PrimaryButtonComponent } from './components/primary-button/primary-button.component';
import { SecondaryButtonComponent } from './components/secondary-button/secondary-button.component';

const COMPONENT_LIST = [
    ButtonComponent,
    PrimaryButtonComponent,
    SecondaryButtonComponent,
    AccentButtonComponent,
    DestructiveButtonComponent,
];

const MODULE_LIST = [CommonModule, TooltipModule];

@NgModule({
    declarations: [COMPONENT_LIST],
    imports: [MODULE_LIST],
    exports: [COMPONENT_LIST],
})
export class ButtonModule {}
