import { Component } from '@angular/core';
import { ButtonComponent } from '../button.component';

@Component({
  selector: 'lnk-secondary-button',
  templateUrl: '../button.component.html',
  styleUrls: ['./secondary-button.component.scss'],
})
export class SecondaryButtonComponent extends ButtonComponent {}
