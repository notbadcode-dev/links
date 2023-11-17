import { Component, Input } from '@angular/core';

@Component({
    selector: 'lnk-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
    @Input() set _isOpen(isOpen: boolean) {
        this.isOpen = isOpen;
    }

    isOpen = false;
}
