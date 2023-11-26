import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '@auth/service/auth.service';
import { FORM_CONSTANT } from '@constants/form.constant';
import { IUserLogin } from '@models/user/user.model';
import { SocialLoginButtonConfig } from '@modules/user/modules/user-login/components/social-login-button/social-login-button.model';
import { SocialLoginButtonModule } from '@modules/user/modules/user-login/components/social-login-button/social-login-button.module';
import { TranslateModule } from '@ngx-translate/core';
import { ConfigButtonService } from '@services/config/config-button/config-button.service';
import { ConfigCardService } from '@services/config/config-card/config-card.service';
import { ConfigInputService } from '@services/config/config-input/config-input.service';
import { SessionService } from '@services/session/session.service';
import { UtilStringService } from '@services/util/util-string/util-string.service';
import { ButtonModule } from '@shared/modules/button/button.module';
import { ButtonConfig } from '@shared/modules/button/components/button.model';
import { ICardConfig } from '@shared/modules/card/models/card.model';
import { SimpleCardModule } from '@shared/modules/card/modules/simple-card/simple-card.module';
import { InputModule } from '@shared/modules/input/input.module';
import { InputConfig } from '@shared/modules/input/models/input.model';
import { TextWithDelimiterModule } from '@shared/modules/text-with-delimiter/text-with-delimiter.module';
import { Observable } from 'rxjs';
import { ConfigSocialLoginButtonService } from './components/social-login-button/config-social-login-button.service';
import { TUserLoginForm } from './user-login.interface';

@Component({
    selector: 'lnk-user-login',
    standalone: true,
    imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputModule,
    SimpleCardModule,
    ButtonModule,
    SocialLoginButtonModule,
    SocialLoginButtonModule,
    TextWithDelimiterModule,
    TranslateModule
],
    templateUrl: './user-login.component.html',
    styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent implements OnInit {
    userLoginCardConfig!: ICardConfig;
    userLoginForm!: FormGroup;

    userNameInputConfig!: InputConfig;
    userNameFormControlName = 'userName';
    passwordInputConfig!: InputConfig;
    passwordFormControlName = 'password';

    loginButtonConfig!: ButtonConfig;

    appleSocialLoginButton!: SocialLoginButtonConfig;
    googleSocialLoginButton!: SocialLoginButtonConfig;

    constructor(
        private _authService: AuthService,
        private _sessionService: SessionService,
        private _utilStringService: UtilStringService,
        private _configSocialLoginButtonService: ConfigSocialLoginButtonService,
        private _configCardService: ConfigCardService,
        private _configInputService: ConfigInputService,
        private _configButtonService: ConfigButtonService
    ) {}

    ngOnInit(): void {
        this.initializeForm();
        this.initializeCardConfig();
        this.initializeInputConfig();
        this.initializeButtonConfig();
        this.initializeSocialButtonConfig();
    }

    /**
     * @description User sign in app
     * @returns void
     */
    public userSign(): void {
        this.getUserSignObservable(this.userLoginForm.value).subscribe((token: string) => {
            if (!token || !token.length) {
                return;
            }
            this._sessionService.initializeSession(token);
        });
    }

    /**
     * @private
     * @description Initialize userLoginForm
     * @returns void
     */
    private initializeForm(): void {
        this.userLoginForm = new FormGroup<TUserLoginForm>({
            [this.userNameFormControlName]: new FormControl('notbadcode@gmail.com', { nonNullable: true, validators: Validators.required }),
            [this.passwordFormControlName]: new FormControl('6900', { nonNullable: true, validators: Validators.required }),
        });

        this.userLoginFormStatusChanges();
    }

    /**
     * @private
     * @description Listen status on userLoginForm
     * @returns void
     */
    private userLoginFormStatusChanges(): void {
        this.userLoginForm.statusChanges.subscribe((status: string) => {
            this.loginButtonConfig.disabled = this._utilStringService.isEqualsTextWithoutSensitiveCase(status, FORM_CONSTANT.INVALID);
        });
    }

    /**
     * @private
     * @description Initialize card config
     * @returns void
     */
    private initializeCardConfig(): void {
        this.userLoginCardConfig = this._configCardService.getUserLoginCardConfig();
    }

    /**
     * @private
     * @description Initialize social button config
     * @returns void
     */
    private initializeSocialButtonConfig(): void {
        this.appleSocialLoginButton = this._configSocialLoginButtonService.getAppleSocialLoginButton();
        this.googleSocialLoginButton = this._configSocialLoginButtonService.getGoogleSocialLoginButton();
    }

    /**
     * @private
     * @description Initialize input config
     * @returns void
     */
    private initializeInputConfig(): void {
        this.userNameInputConfig = this._configInputService.getUserNameInputConfig(this.userLoginForm, this.userNameFormControlName);
        this.passwordInputConfig = this._configInputService.getPasswordInputConfig(this.userLoginForm, this.passwordFormControlName);
    }

    /**
     * @private
     * @description Initialize button config
     * @returns void
     */
    private initializeButtonConfig(): void {
        this.loginButtonConfig = this._configButtonService.getLoginButtonConfig();
    }

    /**
     * @private
     * @description Call AuthService with user data for sign in APP
     * @param  {IUserLogin} userLogin
     * @returns Observable<string>
     */
    private getUserSignObservable(userLogin: IUserLogin): Observable<string> {
        return this._authService.userSignIn(userLogin);
    }
}
