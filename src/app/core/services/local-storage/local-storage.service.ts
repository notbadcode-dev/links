import { Injectable } from '@angular/core';
import { LOCAL_STORAGE_KEY } from '@constants/local-storage.constant';
import { IUser } from '@models/user/user.model';

@Injectable({
    providedIn: 'root',
})
export class LocalStorageService {
    private getLocalStorageItem(localStorageKey: string): any {
        if (!localStorageKey || !localStorageKey.length) {
            return;
        }

        const LOCAL_STORAGE_ITEM: any = localStorage.getItem(localStorageKey);
        if (typeof LOCAL_STORAGE_ITEM === 'object' && LOCAL_STORAGE_ITEM !== null) {
            return JSON.parse(LOCAL_STORAGE_ITEM);
        }

        return LOCAL_STORAGE_ITEM;
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
        const TOKEN: string = this.getLocalStorageItem(LOCAL_STORAGE_KEY.TOKEN);

        if (!TOKEN || !TOKEN.length) {
            return '';
        }

        return TOKEN;
    }

    public setLocalStorageTokenItem(token: string): void {
        if (!token || !token.length) {
            return;
        }
        this.setLocalStorageItem(LOCAL_STORAGE_KEY.TOKEN, token);
    }

    get getLocalStorageUserItem(): string {
        const TOKEN: string = this.getLocalStorageItem(LOCAL_STORAGE_KEY.USER_DATA);

        if (!TOKEN || !TOKEN.length) {
            return '';
        }

        return TOKEN;
    }

    public setLocalStorageUserItem(user: IUser): void {
        if (!user || !user.id || !user.userName || !user.userName.length) {
            return;
        }
        this.setLocalStorageItem(LOCAL_STORAGE_KEY.USER_DATA, user);
    }
}
