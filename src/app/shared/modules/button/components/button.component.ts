import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonConfig } from './button.model';

@Component({
  selector: 'lnk-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() set _config(_config: ButtonConfig) {
    if (_config) {
      this.config = _config;
      this.onlyIcon = this.getOnlyIcon(_config);
    }
  }

  @Output() onClickEvent: EventEmitter<ButtonConfig> = new EventEmitter();

  config!: ButtonConfig;
  onlyIcon!: boolean;

  constructor() {}

  ngOnInit(): void {}

  /**
   * @description Emits the click event to the parent component.
   * @returns void
   */
  getOnlyIcon(config: ButtonConfig): boolean {
    if (!config) {
      return false;
    }

    if (config.text || config.text.length > 0) {
      return false;
    }

    if (!config.icon || config.icon.length === 0) {
      return false;
    }

    return true;
  }

  /**
   * @description Emits the click event to the parent component.
   * @returns void
   */
  onClick(config: ButtonConfig): void {
    this.onClickEvent.emit(config);
  }
}
