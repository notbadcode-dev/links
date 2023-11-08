import { Injectable } from '@angular/core';
import { SOCIAL_LOGIN_BUTTON } from './social-login-button.constant';
import { SocialLoginButtonConfig } from './social-login-button.model';

@Injectable({
    providedIn: 'root',
})
export class ConfigSocialLoginButtonService {
    /**
     * @description Get apple social login button config
     * @returns ButtonConfig
     */
    getAppleSocialLoginButton(): SocialLoginButtonConfig {
        return {
            altImage: 'apple',
            reference: '',
            svgImage: SOCIAL_LOGIN_BUTTON.FILES.SVG_APPLE,
        };
    }

    /**
     * @description Get google social login button config
     * @returns ButtonConfig
     */
    getGoogleSocialLoginButton(): SocialLoginButtonConfig {
        return {
            altImage: 'google',
            reference: '',
            svgImage: SOCIAL_LOGIN_BUTTON.FILES.SVG_GOOGLE,
        };
    }
}
