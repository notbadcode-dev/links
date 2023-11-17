import { Injectable } from '@angular/core';
import { TOASTR_CLASS, TOASTR_CLASSES, TOASTR_METHODS } from '@constants/toastr.constant';
import { UtilWindowService } from '@services/util/util-window/util-window.service';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ActiveToast, IndividualConfig, ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root',
})
export class PushNotifyService {
    constructor(private _toastrService: ToastrService, private _utilWindowService: UtilWindowService) {}

    error(text: string, title?: string, options?: Partial<IndividualConfig>): void {
        this.applyStyles(this.error.name, text, title ? title : undefined, options ? options : undefined);
    }

    success(text: string, title?: string, options?: Partial<IndividualConfig>): void {
        this.applyStyles(this.success.name, text, title ? title : undefined, options ? options : undefined);
    }

    warning(text: string, title?: string, options?: Partial<IndividualConfig>): void {
        this.applyStyles(this.warning.name, text, title ? title : undefined, options ? options : undefined);
    }

    info(text: string, title?: string, options?: Partial<IndividualConfig>): void {
        this.applyStyles(this.info.name, text, title ? title : undefined, options ? options : undefined);
    }

    applyStyles(functionName: string, text: string, title?: string, options?: Partial<IndividualConfig>): void {
        if (!functionName?.length) {
            return;
        }

        if (!text?.length) {
            return;
        }

        if (options) {
            options.toastClass = (TOASTR_CLASS as Record<string, string>)[functionName.toLowerCase()];
        } else {
            options = { toastClass: (TOASTR_CLASS as Record<string, string>)[functionName?.toLowerCase()] };
        }

        if (this._utilWindowService.isMobilePlatform()) {
            options.positionClass = TOASTR_CLASSES.BOTTOM_FULL;
        }

        switch (functionName.toLowerCase()) {
            case TOASTR_METHODS.ERROR:
                this._toastrService.error(text, title ? title : '', options);
                break;
            case TOASTR_METHODS.WARNING:
                this._toastrService.warning(text, title ? title : '', options);
                break;
            case TOASTR_METHODS.SUCCESS:
                this._toastrService.success(text, title ? title : '', options);
                break;
            case TOASTR_METHODS.INFO:
                this._toastrService.info(text, title ? title : '', options);
                break;

            default:
                break;
        }
    }

    /**
     * @description Close specified notify
     * @param  {number} toastId - Id notification to close
     * @return void
     */
    clearToast(toastId: number): void {
        if (toastId && typeof toastId === 'number' && this._toastrService.toasts.filter((toast) => toast.toastId === toastId).length > 0) {
            this._toastrService.clear(toastId);
        }
    }

    clearAll(): void {
        this._toastrService.clear();
    }

    /**
     * @description Get last toast opened
     * @returns number
     */
    getLastToastId<C = null>(): number {
        const LAST_TOAST: ActiveToast<C> = this._toastrService.toasts[this._toastrService.toasts.length - 1];

        if (!LAST_TOAST) {
            return 0;
        }

        return LAST_TOAST.toastId;
    }

    /**
     * @description Get configuration for fixed toast
     * @returns Partial
     */
    getFixedToastConfig(): Partial<IndividualConfig> {
        return {
            timeOut: 0,
            closeButton: true,
        };
    }
}
