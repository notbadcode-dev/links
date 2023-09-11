import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SocialLoginButtonComponent } from './social-login-button.component';

const COMPONENT_LIST = [SocialLoginButtonComponent];
const MODULE_LIST = [CommonModule];

@NgModule({
    declarations: [COMPONENT_LIST],
    imports: [MODULE_LIST],
    exports: [COMPONENT_LIST],
})
export class SocialLoginButtonModule {}
