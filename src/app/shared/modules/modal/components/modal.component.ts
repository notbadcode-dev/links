import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
import { AppBackdropService } from '@services/app-backdrop/app-backdrop.service';

@Component({
    selector: 'lnk-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
    @Input() set _isOpen(_isOpen: boolean) {
        setTimeout(() => {
            this.isOpen = _isOpen;

            if (this.isOpen) {
                this._appBackdropService.showBackdrop();
            } else {
                this._appBackdropService.hideBackdrop();
            }
        }, 100);
    }

    isOpen = false;

    constructor(private _appBackdropService: AppBackdropService) {}
}
