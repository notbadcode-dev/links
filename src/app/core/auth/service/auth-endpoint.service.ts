import { Injectable } from '@angular/core';
import { EnvironmentService } from '@services/environment/environment.service';

@Injectable({
    providedIn: 'root',
})
export class AuthEndpointService {
    constructor(private _environmentService: EnvironmentService) {}

    private authApiUrl = `${this._environmentService.getAuthApi}/authentication`;

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
