import { Injectable } from '@angular/core';
import { HttpBaseService } from '@app/core/http-services/http-base/http-base.service';
import { IGetUserByToken } from '@app/core/models/user/get-user-by-token.model';
import { IUser, IUserLogin } from '@app/core/models/user/user.model';
import { EMPTY, map, Observable } from 'rxjs';
import { AuthEndpointService } from './auth-endpoint.service';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    //#region Constructor

    constructor(private _httpBaseService: HttpBaseService, private _authEndpointService: AuthEndpointService) {}

    //#endregion

    //#region Public method

    /**
     * @description Call API with user data for sign in APP
     * @param  {IUserLogin} userLogin
     * @returns Observable<string> - token
     */
    public userSignIn(userLogin: IUserLogin): Observable<string> {
        return this._httpBaseService.httpPost(this._authEndpointService.getSignInEndpoint, userLogin).pipe(
            map((result: any) => {
                return `${result}`;
            })
        );
    }

    /**
     * @description Call API with user data for sign in APP
     * @param  {IUserLogin} userLogin
     * @returns Observable<string> - token
     */
    public getUserByToken(getUserByToken: IGetUserByToken): Observable<IUser> {
        const TOKEN: string = getUserByToken?.token?.trim() ?? '';
        const APPLICATION_ID: number = getUserByToken?.applicationId ?? 0;

        if (!TOKEN?.length || !APPLICATION_ID) {
            return EMPTY;
        }

        return this._httpBaseService.httpPost(this._authEndpointService.getUserByTokenEndpoint, getUserByToken).pipe(
            map((result: any) => {
                return result;
            })
        );
    }

    //#endregion

    //#region Private methods

    //#endregion
}
