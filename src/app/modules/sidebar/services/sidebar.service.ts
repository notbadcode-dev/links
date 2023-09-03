import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SidebarService {
    private hiddenSidebarObservable: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

    /**
     * @description Get hidden sidebar
     * @returns Observable<boolean>
     */
    get getHiddenSidebar(): Observable<boolean> {
        return this.hiddenSidebarObservable.asObservable();
    }

    /**
     * @description Set hidden sidebar
     * @param  {boolean} value
     * @returns void
     */
    setHiddenSidebar(value: boolean): void {
        this.hiddenSidebarObservable.next(value);
    }
}
