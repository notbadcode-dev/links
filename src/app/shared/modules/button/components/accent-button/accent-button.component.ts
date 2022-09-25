import { Component } from '@angular/core';
import { ButtonComponent } from '../button.component';

@Component({
    selector: 'lnk-accent-button',
    templateUrl: '../button.component.html',
    styleUrls: ['./accent-button.component.scss'],
})
export class AccentButtonComponent extends ButtonComponent {}
