import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
    selector: 'lnk-user-login',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './user-login.component.html',
    styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent implements OnInit {
    constructor(private _authService: AuthService) {}

    ngOnInit(): void {
        this._authService
            .userSignIn({
                userName: 'notbadcode.dev@gmail.com',
                paraphrase: 'wAa$00ab',
            })
            .subscribe((response: any) => {
                console.log(response);
            });
    }
}
