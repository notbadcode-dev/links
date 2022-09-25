import { Component } from '@angular/core';
import { ButtonComponent } from '../button.component';

@Component({
    selector: 'lnk-primary-button',
    templateUrl: '../button.component.html',
    styleUrls: ['./primary-button.component.scss'],
})
export class PrimaryButtonComponent extends ButtonComponent {}
