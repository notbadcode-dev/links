import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputModule } from 'src/app/shared/modules/input/input.module';

@Component({
  selector: 'lnk-input-list',
  standalone: true,
  imports: [CommonModule, InputModule],
  templateUrl: './input-list.component.html',
  styleUrls: ['./input-list.component.scss'],
})
export class InputListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
