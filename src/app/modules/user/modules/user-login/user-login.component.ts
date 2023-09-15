import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '@app/core/auth/service/auth.service';
import { APP_CONSTANT } from '@app/core/constants/app.constant';
import { FORM_CONSTANT } from '@app/core/constants/form.constant';
import { IUserLogin } from '@app/core/models/user/user.model';
import { SessionService } from '@app/core/services/session/session.service';
import { UtilStringService } from '@app/core/services/util/util-string/util-string.service';
import { SocialLoginButtonConfig } from '@app/modules/user/modules/user-login/components/social-login-button/social-login-button.model';
import { SocialLoginButtonModule } from '@app/modules/user/modules/user-login/components/social-login-button/social-login-button.module';
import { ButtonModule } from '@app/shared/modules/button/button.module';
import { ButtonConfig, ButtonConfigHelper } from '@app/shared/modules/button/components/button.model';
import { ECardAlignTitle } from '@app/shared/modules/card/card.enum';
import { CardConfig } from '@app/shared/modules/card/card.model';
import { CardModule } from '@app/shared/modules/card/card.module';
import { EInputType } from '@app/shared/modules/input/components/input.enum';
import { InputConfig } from '@app/shared/modules/input/components/input.model';
import { InputModule } from '@app/shared/modules/input/input.module';
import { TextWithDelimiterModule } from '@app/shared/modules/text-with-delimiter/text-with-delimiter.module';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { SOCIAL_LOGIN_BUTTON } from './components/social-login-button/social-login-button.constant';
import { IUserLoginForm } from './user-login.interface';

@Component({
    selector: 'lnk-user-login',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        InputModule,
        CardModule,
        ButtonModule,
        SocialLoginButtonModule,
        SocialLoginButtonModule,
        TextWithDelimiterModule,
        TranslateModule,
    ],
    templateUrl: './user-login.component.html',
    styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent implements OnInit {
    cardConfig!: CardConfig;
    userLoginForm!: FormGroup;
    userNameInputConfig!: InputConfig;
    passwordInputConfig!: InputConfig;
    loginButtonConfig!: ButtonConfig;
    appleSocialLoginButton!: SocialLoginButtonConfig;
    googleSocialLoginButton!: SocialLoginButtonConfig;

    constructor(
        private _authService: AuthService,
        private _sessionService: SessionService,
        private _utilStringService: UtilStringService,
        private _translateService: TranslateService
    ) {}

    ngOnInit(): void {
        this.initializeUserLoginForm();
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
     * @description Initialize userLoginForm
     * @returns void
     */
    private initializeUserLoginForm(): void {
        this.userLoginForm = new FormGroup<IUserLoginForm>({
            // userName: new FormControl('', { nonNullable: true, validators: Validators.required }),
            // password: new FormControl('', { nonNullable: true, validators: Validators.required }),
            userName: new FormControl('notbadcode@gmail.com', { nonNullable: true, validators: Validators.required }),
            password: new FormControl('6900', { nonNullable: true, validators: Validators.required }),
        });

        this.userLoginFormStatusChanges();
    }

    /**
     * @description Listen status on userLoginForm
     * @returns void
     */
    private userLoginFormStatusChanges(): void {
        this.userLoginForm.statusChanges.subscribe((status: string) => {
            this.loginButtonConfig.disabled = this._utilStringService.isEqualsTextWithoutSensitiveCase(status, FORM_CONSTANT.INVALID);
        });
    }

    /**
     * @private Initialize card config
     * @returns void
     */
    private initializeCardConfig(): void {
        this.cardConfig = {
            title: this._translateService.instant('COMPONENTS.LOGIN.TITLE'),
            alignTitle: ECardAlignTitle.CENTER,
        };
    }

    private initializeSocialButtonConfig(): void {
        this.appleSocialLoginButton = {
            altImage: 'apple',
            reference:
                'https://user-api.setapp.com/v1/auth/apple?state=eyJwYXlsb2FkIjp7InNpZ251cFBhcmFtcyI6eyJpbm5lclJlZGlyZWN0VXJpIjoiL3N1YnNjcmlwdGlvbiJ9fSwidGltZXN0YW1wIjoxNjk0MzAxNzM1MzExfQ%3D%3D',
            svgImage: SOCIAL_LOGIN_BUTTON.FILES.SVG_APPLE,
        };

        this.googleSocialLoginButton = {
            altImage: 'google',
            reference:
                'https://accounts.google.com/o/oauth2/v2/auth?client_id=627325736153-dhnfoqli9fuf40ld8s1c5imtu7p833hs.apps.googleusercontent.com&amp;redirect_uri=https%3A%2F%2Fmy.setapp.com%2Fauth%2Fgoogle&amp;response_type=token&amp;scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&amp;state=eyJwYXlsb2FkIjp7InNpZ251cFBhcmFtcyI6eyJpbm5lclJlZGlyZWN0VXJpIjoiL3N1YnNjcmlwdGlvbiJ9fSwidGltZXN0YW1wIjoxNjk0MzAxNzM1MzExfQ%3D%3D',
            svgImage: SOCIAL_LOGIN_BUTTON.FILES.SVG_GOOGLE,
        };
    }

    /**
     * @private Initialize input config
     * @returns void
     */
    private initializeInputConfig(): void {
        this.userNameInputConfig = {
            label: 'Username',
            title: 'Username',
            disabled: false,
            readonly: false,
            type: EInputType.TEXT,
            parentFormGroup: this.userLoginForm,
            formControlName: 'userName',
        };

        this.passwordInputConfig = {
            label: 'Password',
            title: 'Password',
            disabled: false,
            readonly: false,
            type: EInputType.PASSWORD,
            parentFormGroup: this.userLoginForm,
            formControlName: 'password',
        };
    }

    /**
     * @private Initialize button config
     * @returns void
     */
    private initializeButtonConfig(): void {
        this.loginButtonConfig = ButtonConfigHelper.getPrimaryButtonConfig({
            text: 'Login',
            tooltip: 'Start session',
            disabled: true,
            icon: 'ri-user-line',
            hotkeys: [APP_CONSTANT.MASTER_HOTKEY, 'L'],
        });
    }

    /**
     * @description Call AuthService with user data for sign in APP
     * @returns Observable<string>
     */
    private getUserSignObservable(userLogin: IUserLogin): Observable<string> {
        return this._authService.userSignIn(userLogin);
    }
}
