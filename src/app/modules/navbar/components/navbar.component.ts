import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'lnk-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
    openArrow = false;

    constructor() {}

    ngOnInit(): void {}

    arrowAction(): void {
        this.openArrow = !this.openArrow;
    }
}
