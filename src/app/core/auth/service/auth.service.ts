import { Injectable } from '@angular/core';
import { HttpBaseService } from '@app/core/http-services/http-base/http-base.service';
import { IGetUserByToken } from '@app/core/models/user/get-user-by-token.model';
import { IUser, IUserLogin } from '@app/core/models/user/user.model';
import { EnvironmentService } from '@app/core/services/environment/environment.service';
import { EMPTY, Observable } from 'rxjs';
import { AuthEndpointService } from './auth-endpoint.service';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(
        private _httpBaseService: HttpBaseService,
        private _authEndpointService: AuthEndpointService,
        private _environmentService: EnvironmentService
    ) {}

    /**
     * @description Login on application with username and password
     * @param  {IUserLogin} userLogin
     * @returns Observable<string> - token
     */
    public userSignIn(userLogin: IUserLogin): Observable<string> {
        userLogin.applicationId = this._environmentService.getApplicationId;
        return this._httpBaseService.httpPost<string, IUserLogin>(this._authEndpointService.getSignInEndpoint, userLogin);
    }

    /**
     * @description Get user according token
     * @param  {IGetUserByToken} getUserByToken
     * @returns Observable<IUser>
     */
    public getUserByToken(getUserByToken: IGetUserByToken): Observable<IUser> {
        const TOKEN: string = getUserByToken?.token?.trim() ?? '';
        const APPLICATION_ID: number = getUserByToken?.applicationId ?? 0;

        if (!TOKEN?.length || !APPLICATION_ID) {
            return EMPTY;
        }

        return this._httpBaseService.httpPost<IUser, IGetUserByToken>(this._authEndpointService.getUserByTokenEndpoint, getUserByToken);
    }
}
