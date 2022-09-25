import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'lnk-user-logout',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './user-logout.component.html',
    styleUrls: ['./user-logout.component.scss'],
})
export class UserLogoutComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
