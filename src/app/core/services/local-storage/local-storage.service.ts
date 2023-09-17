import { Injectable } from '@angular/core';
import { LOCAL_STORAGE_KEY } from '@constants/local-storage.constant';
import { IUser } from '@models/user/user.model';
import { AppTranslateService } from '../app-translate/app-translate.service';
import { SharingDataService } from '../sharing-data/sharing-data.service';

@Injectable({
    providedIn: 'root',
})
export class LocalStorageService {
    constructor(private _appTranslateService: AppTranslateService, private _sharingDataService: SharingDataService) {}

    public clearAllLocalStorageItems(): void {
        localStorage.clear();
        this._sharingDataService.resetAllSubjects();
    }

    public get getLocalStorageTokenItem(): string {
        const TOKEN: string | null = this.getLocalStorageItem<string>(LOCAL_STORAGE_KEY.TOKEN);

        if (!TOKEN || !TOKEN.length) {
            return '';
        }

        return TOKEN;
    }

    public get getLocalStorageLanguageItem(): string {
        const LANGUAGE: string | null = this.getLocalStorageItem<string>(LOCAL_STORAGE_KEY.LANGUAGE);

        if (!LANGUAGE || !LANGUAGE.length) {
            return '';
        }

        return LANGUAGE;
    }

    public setLocalStorageTokenItem(token: string): void {
        this._sharingDataService.setUserIdLogged(token?.length > 0);
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
        user = {
            ...user,
            connectedFrom: new Date(),
        };
        this._sharingDataService.setUser(user ?? null);
        if (!user || !user.id || !user?.username?.length) {
            return;
        }
        this.setLocalStorageItem<IUser>(LOCAL_STORAGE_KEY.USER_DATA, user);
    }

    private getLocalStorageItem<T>(localStorageKey: string): T | null {
        if (!localStorageKey?.length) {
            return null;
        }

        const LOCAL_STORAGE_ITEM: string | null = localStorage.getItem(localStorageKey);

        if (LOCAL_STORAGE_ITEM !== null) {
            try {
                return JSON.parse(LOCAL_STORAGE_ITEM) as T;
            } catch (error) {
                this._appTranslateService.getTranslateText('SERVICES.LOCAL_STORAGE.ERRORS.SAVE_ITEM');
                console.error(`Error parsing localStorage item '${localStorageKey}':`, error);
                return null;
            }
        }

        return null;
    }

    private setLocalStorageItem<T>(itemKey: string, itemValue: T): void {
        if (!itemKey?.length) {
            return;
        }

        if (!itemValue) {
            return;
        }

        try {
            const SERIALIZED_VALUE: string = JSON.stringify(itemValue);
            localStorage.setItem(itemKey, SERIALIZED_VALUE);
        } catch (error) {
            this._appTranslateService.getTranslateText('SERVICES.LOCAL_STORAGE.ERRORS.SAVE_ITEM');
            console.error(`Error serializing and setting localStorage item '${itemKey}':`, error);
        }
    }
}
