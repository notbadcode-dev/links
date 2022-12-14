import { Injectable } from '@angular/core';
import { SidebarService } from '@app/modules/sidebar/services/sidebar.service';
import { LocalStorageService } from '@services/local-storage/local-storage.service';
import { SessionService } from '../session/session.service';

@Injectable({
    providedIn: 'root',
})
export class AppInitService {
    constructor() {}

    Init(localStorageService: LocalStorageService, sessionService: SessionService) {
        return new Promise<void>((resolve, reject) => {
            console.info('Initialize wiwth AppInitService.init()');
            const token: string = localStorageService.getLocalStorageTokenItem;

            if (token) {
                sessionService.initializeSession(token);
            }

            resolve();
        });
    }
}
