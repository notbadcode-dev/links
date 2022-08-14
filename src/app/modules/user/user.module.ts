import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserSigninComponent } from './components/user-signin/user-signin.component';
import { UserLogoutComponent } from './components/user-logout/user-logout.component';
import { UserRecoveryComponent } from './components/user-recovery/user-recovery.component';



@NgModule({
  declarations: [
    UserLoginComponent,
    UserSigninComponent,
    UserLogoutComponent,
    UserRecoveryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
