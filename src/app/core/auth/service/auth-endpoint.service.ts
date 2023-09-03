import { Injectable } from '@angular/core';
import { ENVIRONMENT } from '@environment/environment';

@Injectable({
    providedIn: 'root',
})
export class AuthEndpointService {
    private authApiUrl = `${ENVIRONMENT.authApi}/authentication`;

    public get getSignUpEndpoint(): string {
        return `${this.authApiUrl}/signUp`;
    }

    public get getSignInEndpoint(): string {
        return `${this.authApiUrl}/signIn`;
    }

    public get getUserByTokenEndpoint(): string {
        return `${this.authApiUrl}/getUserByToken`;
    }
}
