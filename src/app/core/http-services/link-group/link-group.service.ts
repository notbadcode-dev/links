import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReorderLinkRequest } from '@app/core/models/user-link.model';
import { environment } from '@environment/environment';
import { map, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class LinkGroupService {
    private controller = 'linkGroup';
    private endpoints = {
        reorderLink: `${environment.linkApi}/${this.controller}/reorderLink`,
    };

    constructor(private _http: HttpClient) {}

    /**
     * @description Create a new user link
     * @param  {UserLink} userLink
     * @returns Observable<number> - Created user link id
     */
    create(reorderLinkRequest: ReorderLinkRequest): Observable<number> {
        return this._http.post(this.endpoints.reorderLink, reorderLinkRequest).pipe(map((result: any) => result));
    }
}
