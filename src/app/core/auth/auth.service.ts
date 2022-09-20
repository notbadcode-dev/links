import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private endpoints = {
    signIn: `${environment.notBadCodeApi}/auth/signin`,
    signOut: `${environment.notBadCodeApi}/auth/signout`,
  };

  constructor(private _http: HttpClient) {}

  public userSignIn(): any {}

  public userSignOut(): any {}
}
