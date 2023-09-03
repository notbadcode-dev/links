import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { APP_CONSTANT } from '@app/core/constants/app.constant';
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

    public config!: ButtonConfig;
    public onlyIcon!: boolean;

    ngOnInit(): void {}

    /**
     * @description Emits the click event to the parent component.
     * @returns void
     */
    private getOnlyIcon(config: ButtonConfig): boolean {
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
    public onClick(config: ButtonConfig): void {
        this.onClickEvent.emit(config);
    }

    @HostListener('document:keypress', ['$event'])
    /**
     * @description Receive keyBoardEvent and manage hotkey on this component.
     * @returns void
     */
    handleKeyboardEvent(event: KeyboardEvent): void {
        if (this.validateArgumentsForHandleKeyboardEvent(event)) {
            this.onClick(this.config);
            event.preventDefault();
        }
    }

    validateArgumentsForHandleKeyboardEvent(event: KeyboardEvent): boolean {
        if (!event) {
            return false;
        }

        if (!this.config || !this.config?.hotkeys || this.config?.hotkeys?.length === 0) {
            return false;
        }

        if (this.config.disabled) {
            return false;
        }

        if (!event.ctrlKey) {
            return false;
        }

        const HOT_KEY: string =
            this.config?.hotkeys
                ?.find((findHotKey: string) => findHotKey !== APP_CONSTANT.MASTER_HOTKEY)
                ?.toString()
                ?.toUpperCase() || '';
        if (HOT_KEY === '') {
            return false;
        }

        const KEY_PRESSED: string = event?.key?.toString()?.toUpperCase() || '';

        if (KEY_PRESSED === '') {
            return true;
        }

        if (KEY_PRESSED !== HOT_KEY) {
            return false;
        }

        return true;
    }
}
