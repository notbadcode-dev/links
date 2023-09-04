import { Injectable } from '@angular/core';
import { ENVIRONMENT } from '@environment/environment';
import { IEnvironment } from '@environment/environment.interface';

@Injectable({
    providedIn: 'root',
})
export class EnvironmentService {
    private _environment: IEnvironment = ENVIRONMENT;

    get getApplicationId(): number {
        return this._environment.applicationId;
    }

    get getProduction(): boolean {
        return this._environment.production;
    }

    get getHost(): string {
        return this._environment.host;
    }

    get getAuthApi(): string {
        return this._environment.authApi;
    }

    get getLinkApi(): string {
        return this._environment.linkApi;
    }
}
