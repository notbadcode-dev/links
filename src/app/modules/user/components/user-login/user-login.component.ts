import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from '@auth/auth.service';
import { UserLogin } from '@models/user-login.model';
import { LocalStorageService } from '@services/local-storage/local-storage.service';
import { UserLoginForm } from './user-login.interface';

@Component({
    selector: 'lnk-user-login',
    standalone: true,
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    templateUrl: './user-login.component.html',
    styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent implements OnInit {
    // userName: 'notbadcode.dev@gmail.com',
    // paraphrase: 'wAa$00ab',

    userLoginForm!: FormGroup;

    constructor(private _formBuilder: FormBuilder, private _authService: AuthService, private _localStorageService: LocalStorageService) {}

    ngOnInit(): void {
        this.initializeUserLoginForm();
    }

    /**
     * @description Initialize userLoginForm
     * @returns void
     */
    private initializeUserLoginForm(): void {
        this.userLoginForm = new FormGroup<UserLoginForm>({
            userName: new FormControl('notbadcode.dev@gmail.com', { nonNullable: true }),
            paraphrase: new FormControl('wAa$00ab', { nonNullable: true }),
        });

        this.userLoginFormValueChanges();
    }

    /**
     * @description Listen changes on userLoginForm
     * @returns void
     */
    private userLoginFormValueChanges(): void {
        this.userLoginForm.valueChanges.subscribe((userLoginForm: UserLogin) => {
            console.log(userLoginForm);
        });
    }

    /**
     * @description Call AuthService with user data for sign in APP
     * @returns Observable<string>
     */
    private getUserSignObservable(userlogin: UserLogin): Observable<string> {
        return this._authService.userSignIn(userlogin);
    }

    public userSign(): void {
        this.getUserSignObservable(this.userLoginForm.value).subscribe((token: string) => {
            if (!token || !token.length) {
                return;
            }

            this._localStorageService.setLocalStorageTokenItem(token);
        });
    }
}
