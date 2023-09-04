import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '@app/core/auth/service/auth.service';
import { IUserLogin } from '@app/core/models/user/user.model';
import { SessionService } from '@app/core/services/session/session.service';
import { Observable } from 'rxjs';
import { IUserLoginForm } from './user-login.interface';

@Component({
    selector: 'lnk-user-login',
    standalone: true,
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    templateUrl: './user-login.component.html',
    styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent implements OnInit {
    // userName: 'notbadcode@gmail.com',
    // password: 'wAa$00ab',

    userLoginForm!: FormGroup;

    constructor(private _authService: AuthService, private _sessionService: SessionService) {}

    ngOnInit(): void {
        this.initializeUserLoginForm();
    }

    /**
     * @description Initialize userLoginForm
     * @returns void
     */
    private initializeUserLoginForm(): void {
        this.userLoginForm = new FormGroup<IUserLoginForm>({
            userName: new FormControl('notbadcode@gmail.com', { nonNullable: true }),
            password: new FormControl('6900', { nonNullable: true }),
        });

        this.userLoginFormValueChanges();
    }

    /**
     * @description Listen changes on userLoginForm
     * @returns void
     */
    private userLoginFormValueChanges(): void {
        this.userLoginForm.valueChanges.subscribe((userLoginForm: IUserLogin) => {
            console.log(userLoginForm);
        });
    }

    /**
     * @description Call AuthService with user data for sign in APP
     * @returns Observable<string>
     */
    private getUserSignObservable(userLogin: IUserLogin): Observable<string> {
        return this._authService.userSignIn(userLogin);
    }

    public userSign(): void {
        this.getUserSignObservable(this.userLoginForm.value).subscribe((token: string) => {
            if (!token || !token.length) {
                return;
            }
            this._sessionService.initializeSession(token);
        });
    }
}
