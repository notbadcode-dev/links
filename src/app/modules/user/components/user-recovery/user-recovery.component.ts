import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lnk-user-recovery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-recovery.component.html',
  styleUrls: ['./user-recovery.component.scss'],
})
export class UserRecoveryComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
