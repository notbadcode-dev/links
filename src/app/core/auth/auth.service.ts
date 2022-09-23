import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserLogin } from '../models/user-login.model';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private endpoints = {
        signIn: `${environment.notBadCodeApi}/auth/signin`,
        signOut: `${environment.notBadCodeApi}/auth/signout`,
    };

    constructor(private _http: HttpClient) {}

    public userSignIn(userLogin: UserLogin): Observable<any> {
        return this._http.post(this.endpoints.signIn, userLogin).pipe(
            map((result: any) => {
                return result;
            })
        );
    }

    public userSignOut(): any {}
}
