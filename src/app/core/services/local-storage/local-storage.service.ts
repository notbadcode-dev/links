import { Injectable } from '@angular/core';
import { User } from '@app/core/models/user.model';
import { LOCAL_STORAGE_KEY } from '@constants/local-storage.constant';

@Injectable({
    providedIn: 'root',
})
export class LocalStorageService {
    constructor() {}

    private getLocalStorageItem(localStorageKey: string): any {
        if (!localStorageKey || !localStorageKey.length) {
            return;
        }

        const localStorageItem: any = localStorage.getItem(localStorageKey);
        if (typeof localStorageItem === 'object' && localStorageItem !== null) {
            return JSON.parse(localStorageItem);
        }

        return localStorageItem;
    }

    private setLocalStorageItem(localStorageKey: string, localStorageValue: any): void {
        if (!localStorageKey || !localStorageKey.length) {
            return;
        }

        if (!localStorageValue) {
            return;
        }

        if (typeof localStorageValue === 'object' && localStorageValue !== null) {
            localStorage.setItem(localStorageKey, JSON.stringify(localStorageValue));
            return;
        }

        localStorage.setItem(localStorageKey, localStorageValue);
    }

    public removeAllLocalStorage(): void {
        localStorage.clear();
    }

    get getLocalStorageTokenItem(): string {
        const token: string = this.getLocalStorageItem(LOCAL_STORAGE_KEY.TOKEN);

        if (!token || !token.length) {
            return '';
        }

        return token;
    }

    public setLocalStorageTokenItem(token: string): void {
        if (!token || !token.length) {
            return;
        }
        this.setLocalStorageItem(LOCAL_STORAGE_KEY.TOKEN, token);
    }

    get getLocalStorageUserItem(): string {
        const token: string = this.getLocalStorageItem(LOCAL_STORAGE_KEY.USER_DATA);

        if (!token || !token.length) {
            return '';
        }

        return token;
    }

    public setLocalStorageUserItem(user: User): void {
        if (!user || !user.id || !user.userName || !user.userName.length) {
            return;
        }
        this.setLocalStorageItem(LOCAL_STORAGE_KEY.USER_DATA, user);
    }
}
