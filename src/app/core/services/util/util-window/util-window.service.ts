import { Injectable } from '@angular/core';
import { WINDOW_CONSTANT } from '@constants/window.constant';

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
        if (!link?.length) {
            return;
        }

        window.open(link, WINDOW_CONSTANT.TARGET_BLANK);
    }

    /**
     * @description Scroll to top on view
     * @returns void
     */
    scrollToTop(): void {
        window.scrollTo(WINDOW_CONSTANT.SCROLL_TO_TOP_X, WINDOW_CONSTANT.SCROLL_TO_TOP_Y);
    }

    /**
     * @description Determine is mobile platform based of inner height
     * @returns boolean
     */
    isMobilePlatform(): boolean {
        return window.innerHeight < WINDOW_CONSTANT.INNER_HEIGHT_MOBILE;
    }
}
