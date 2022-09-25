import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserLogin } from '@models/user-login.model';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private endpoints = {
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
}
