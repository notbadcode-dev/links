import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SidebarService {
    private hiddenSidebarObservable: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

    constructor() {}

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
     */
    setHiddenSidebar(value: boolean) {
        this.hiddenSidebarObservable.next(value);
    }
}
