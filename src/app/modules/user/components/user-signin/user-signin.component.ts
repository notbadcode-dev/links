import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'lnk-user-signin',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './user-signin.component.html',
    styleUrls: ['./user-signin.component.scss'],
})
export class UserSigninComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
