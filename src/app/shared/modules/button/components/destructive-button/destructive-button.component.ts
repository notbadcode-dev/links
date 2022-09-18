import { Component } from '@angular/core';
import { ButtonComponent } from '../button.component';

@Component({
  selector: 'lnk-destructive-button',
  templateUrl: '../button.component.html',
  styleUrls: ['./destructive-button.component.scss'],
})
export class DestructiveButtonComponent extends ButtonComponent {}
