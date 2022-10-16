import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User, UserLogin } from '@app/core/models/user.model';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private endpoints = {
        getUser: `${environment.notBadCodeApi}/user/getUser`,
        signIn: `${environment.notBadCodeApi}/auth/sign`,
        signOut: `${environment.notBadCodeApi}/auth/signout`,
    };

    constructor(private _http: HttpClient) {}

    /**
     * @description Call API with user data for sign in APP
     * @param  {UserLogin} userLogin
     * @returns Observable<string> - token
     */
    public userSignIn(userLogin: UserLogin): Observable<string> {
        return this._http.post(this.endpoints.signIn, userLogin).pipe(
            map((result: any) => {
                return `${result}`;
            })
        );
    }

    /**
     * @description Call API with user data for sign in APP
     * @param  {UserLogin} userLogin
     * @returns Observable<string> - token
     */
    public getUserByToken(token: string): Observable<User> {
        if (!token || !token.length) {
            return EMPTY;
        }

        return this._http.get(this.endpoints.getUser).pipe(
            map((result: any) => {
                return result;
            })
        );
    }
}
