import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonConfig } from './button.model';

@Component({
  selector: 'lnk-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() set _config(_config: ButtonConfig){
    if (_config) {
      this.config = _config;
    }
  };

  @Output() onClickEvent: EventEmitter<ButtonConfig> = new EventEmitter();

  config!: ButtonConfig;

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * @description Emits the click event to the parent component.
   * @returns void
   */
  onClick(config: ButtonConfig): void {
    this.onClickEvent.emit(config);
  }
}
