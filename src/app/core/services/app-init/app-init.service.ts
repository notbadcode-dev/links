import { Injectable } from '@angular/core';
import { LocalStorageService } from '@app/core/services/local-storage/local-storage.service';
import { SessionService } from '@app/core/services/session/session.service';

@Injectable({
    providedIn: 'root',
})
export class AppInitService {
    constructor(private localStorageService: LocalStorageService, private sessionService: SessionService) {}

    init(): Promise<void> {
        return new Promise<void>((resolve) => {
            console.info('Initialize with AppInitService.init()');
            const TOKEN: string = this.localStorageService.getLocalStorageTokenItem;

            if (!TOKEN) {
                this.sessionService.destroySession();
                resolve();
            }

            this.sessionService.initializeSession(TOKEN);
            resolve();
        });
    }
}
