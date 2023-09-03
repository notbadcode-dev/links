import { Injectable } from '@angular/core';
import { LocalStorageService } from '@app/core/services/local-storage/local-storage.service';
import { SessionService } from '@app/core/services/session/session.service';

@Injectable({
    providedIn: 'root',
})
export class AppInitService {
    constructor() {}

    Init(localStorageService: LocalStorageService, sessionService: SessionService) {
        return new Promise<void>((resolve, reject) => {
            console.info('Initialize with AppInitService.init()');
            if (!localStorageService || !sessionService) {
                sessionService.destroySession();
            }

            const token: string = localStorageService.getLocalStorageTokenItem;
            if (!token) {
                sessionService.destroySession();
            }

            if (token) {
                sessionService.initializeSession(token);
            }

            resolve();
        });
    }
}
