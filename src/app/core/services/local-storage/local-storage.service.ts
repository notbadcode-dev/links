import { Injectable } from '@angular/core';
import { LOCAL_STORAGE_KEY } from '@constants/local-storage.constant';
import { IUser } from '@models/user/user.model';

@Injectable({
    providedIn: 'root',
})
export class LocalStorageService {
    public removeAllLocalStorage(): void {
        localStorage.clear();
    }

    public get getLocalStorageTokenItem(): string {
        const TOKEN: string | null = this.getLocalStorageItem<string>(LOCAL_STORAGE_KEY.TOKEN);

        if (!TOKEN || !TOKEN.length) {
            return '';
        }

        return TOKEN;
    }

    public setLocalStorageTokenItem(token: string): void {
        if (!token || !token.length) {
            return;
        }
        this.setLocalStorageItem<string>(LOCAL_STORAGE_KEY.TOKEN, token);
    }

    getLocalStorageUserItem(): IUser | null {
        const USER: IUser | null = this.getLocalStorageItem<IUser>(LOCAL_STORAGE_KEY.USER_DATA) ?? null;

        return USER;
    }

    public setLocalStorageUserItem(user: IUser): void {
        if (!user || !user.id || !user.userName || !user.userName.length) {
            return;
        }
        this.setLocalStorageItem<IUser>(LOCAL_STORAGE_KEY.USER_DATA, user);
    }

    private getLocalStorageItem<T>(localStorageKey: string): T | null {
        if (!localStorageKey || !localStorageKey.length) {
            return null;
        }

        const LOCAL_STORAGE_ITEM: string | null = localStorage.getItem(localStorageKey);

        if (LOCAL_STORAGE_ITEM !== null) {
            try {
                return JSON.parse(LOCAL_STORAGE_ITEM) as T;
            } catch (error) {
                console.error(`Error parsing localStorage item '${localStorageKey}':`, error);
                return null;
            }
        }

        return null;
    }

    private setLocalStorageItem<T>(localStorageKey: string, localStorageValue: T): void {
        if (!localStorageKey || !localStorageKey.length) {
            return;
        }

        if (!localStorageValue) {
            return;
        }

        try {
            const SERIALIZED_VALUE: string = JSON.stringify(localStorageValue);
            localStorage.setItem(localStorageKey, SERIALIZED_VALUE);
        } catch (error) {
            console.error(`Error serializing and setting localStorage item '${localStorageKey}':`, error);
        }
    }
}
