import { Injectable } from '@angular/core';
import { EMPTY, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser, IUserLogin } from '@app/core/models/user/user.model';
import { HttpBaseService } from '../http-services/http-base/http-base.service';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private endpoints = {
        signIn: `${environment.authApi}/authentication/sign-in`,
    };

    //#region Constructor

    constructor(private _http: HttpBaseService) {}

    //#endregion

    //#region Public method

    /**
     * @description Call API with user data for sign in APP
     * @param  {IUserLogin} userLogin
     * @returns Observable<string> - token
     */
    public userSignIn(userLogin: IUserLogin): Observable<string> {
        return this._http.httpPost(this.endpoints.signIn, userLogin).pipe(
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
    public getUserByToken(token: string): Observable<IUser> {
        if (!token || !token.length) {
            return EMPTY;
        }

        return this._http.httpGet(this.endpoints.signIn).pipe(
            map((result: any) => {
                return result;
            })
        );
    }

    //#endregion

    //#region Private methods

    private get;

    //#endregion
}
