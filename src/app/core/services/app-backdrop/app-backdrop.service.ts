import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AppBackdropService {
    private backdropSubject = new BehaviorSubject<boolean>(false);

    /**
     * @description Show backdrop
     * @returns void
     */
    showBackdrop(): void {
        this.backdropSubject.next(true);
    }
    /**
     * @description Hidden backdrop
     * @returns void
     */
    hideBackdrop(): void {
        this.backdropSubject.next(false);
    }

    /**
     * @description Get is backdrop visible or not
     * @returns Observable
     */
    getVisibleBackdrop(): Observable<boolean> {
        return this.backdropSubject.asObservable();
    }
}
