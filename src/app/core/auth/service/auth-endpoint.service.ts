import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';

@Injectable({
    providedIn: 'root',
})
export class AuthEndpointService {
    private authApiUrl = `${environment.authApi}/authentication`;

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
