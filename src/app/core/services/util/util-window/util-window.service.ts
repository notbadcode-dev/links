import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class UtilWindowService {
    /**
     * @description Open a link on a new tab on navigator
     * @param  {string} link
     * @returns void
     */
    openNewTab(link: string): void {
        window.open(link, '_blank');
    }
    /**
     * @description Scroll to top on view
     * @returns void
     */
    scrollToTop(): void {
        window.scrollTo(0, 0);
    }
}
