import { Component, Input, OnDestroy } from '@angular/core';
import { TIMEOUT_CONSTANT } from '@constants/timeout.constant';
import { AppBackdropService } from '@services/app-backdrop/app-backdrop.service';
import { Subject, takeUntil, timer } from 'rxjs';

@Component({
    selector: 'lnk-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnDestroy {
    @Input() set _isOpen(_isOpen: boolean) {
        this.isOpen = _isOpen;

        if (this.isOpen) {
            this._appBackdropService.showBackdrop();
        } else {
            timer(TIMEOUT_CONSTANT.TIMER_CLOSE_MODAL)
                .pipe(takeUntil(this.destroy$))
                .subscribe(() => {
                    this._appBackdropService.hideBackdrop();
                });
        }
    }

    private destroy$ = new Subject<void>();

    isOpen = false;

    constructor(private _appBackdropService: AppBackdropService) {}

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
