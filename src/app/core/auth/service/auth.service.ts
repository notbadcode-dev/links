import { Injectable } from '@angular/core';
import { AuthEndpointService } from '@auth/service/auth-endpoint.service';
import { HttpBaseService } from '@http-services/http-base/http-base.service';
import { IGetUserByToken } from '@models/user/get-user-by-token.model';
import { IUser, IUserLogin } from '@models/user/user.model';
import { EnvironmentService } from '@services/environment/environment.service';
import { EMPTY, Observable } from 'rxjs';

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
