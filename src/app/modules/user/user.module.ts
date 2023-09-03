import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserLogoutComponent } from './components/user-logout/user-logout.component';
import { UserRecoveryComponent } from './components/user-recovery/user-recovery.component';
import { UserSigninComponent } from './components/user-signin/user-signin.component';
import { UserRoutingModule } from './user-routing.module';

const COMPONENTS_LIST = [UserLoginComponent, UserSigninComponent, UserLogoutComponent, UserRecoveryComponent];
const MODULE_LIST = [CommonModule, UserRoutingModule];

@NgModule({
    declarations: [COMPONENTS_LIST],
    imports: [MODULE_LIST],
})
export class UserModule {}
