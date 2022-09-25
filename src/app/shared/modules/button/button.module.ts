import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button.component';
import { TooltipModule } from '../tooltip/tooltip.module';
import { PrimaryButtonComponent } from './components/primary-button/primary-button.component';
import { SecondaryButtonComponent } from './components/secondary-button/secondary-button.component';
import { AccentButtonComponent } from './components/accent-button/accent-button.component';
import { DestructiveButtonComponent } from './components/destructive-button/destructive-button.component';

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
