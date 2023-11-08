import { Injectable } from '@angular/core';
import { IUser } from '@models/user/user.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SharingDataService {
    private userIsLoggedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    private userSubject: BehaviorSubject<IUser | null> = new BehaviorSubject<IUser | null>(null);

    public setUserIdLogged(userIsLogged: boolean): void {
        this.userIsLoggedSubject.next(userIsLogged);
    }

    public getUserIsLogged(): Observable<boolean> {
        return this.userIsLoggedSubject.asObservable();
    }

    public setUser(user: IUser | null): void {
        this.userSubject.next(user);
    }

    public getUser(): Observable<IUser | null> {
        return this.userSubject.asObservable();
    }

    public resetAllSubjects(): void {
        this.setUserIdLogged(false);
        this.setUser(null);
    }
}
