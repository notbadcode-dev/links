import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLink, UserLinkHelper } from '@app/core/models/user-link.model';
import { UtilStringService } from '@app/core/services/util/util-string/util-string.service';
import { environment } from '@environment/environment';
import { map, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class LinkService {
    private controller = 'link';

    private endpoints = {
        getAllUserLink: `${environment.linkApi}/${this.controller}/getAll?active=1&favorite=1`,
        getAllUserLinkByGroupId: `${environment.linkApi}/${this.controller}/getLinkByUserLinkIdAndUserId/{0}`,
        createUserLink: `${environment.linkApi}/${this.controller}/create`,
        updateUserLink: `${environment.linkApi}/${this.controller}/update`,
        deleteUserLink: `${environment.linkApi}/${this.controller}/delete/{0}`,
        toggleFavoriteUserLink: `${environment.linkApi}/${this.controller}/toggleFavorite/{0}`,
        toggleActiveUserLink: `${environment.linkApi}/${this.controller}/toggleActive/{0}`,
    };

    constructor(private _http: HttpClient, private _utilStringService: UtilStringService) {}

    /**
     * @description Get all user links
     * @returns Observable<UserLink[]>
     */
    getAll(): Observable<UserLink[]> {
        return this._http.get(this.endpoints.getAllUserLink).pipe(
            map((result: any) => {
                return UserLinkHelper.mapToObjectList<UserLink>(result);
            })
        );
    }

    /**
     * @description Get all favorite user links
     * @returns Observable<UserLink[]>
     */
    getAllFavorite(): Observable<UserLink[]> {
        return this.getAll().pipe(map((result: UserLink[]) => result.filter((result: UserLink) => result.favorite)));
    }

    /**
     * @description Get all deactivate user links
     * @returns Observable<UserLink[]>
     */
    getAllDeactivate(): Observable<UserLink[]> {
        return this.getAll().pipe(map((result: UserLink[]) => result.filter((result: UserLink) => !result.active)));
    }

    /**
     * @description Get all user links by group id
     * @returns Observable<UserLink[]>
     */
    getAllByGroupId(groupId: number): Observable<UserLink[]> {
        return this._http.get(this._utilStringService.formatString(this.endpoints.getAllUserLinkByGroupId, [groupId])).pipe(
            map((result: any) => {
                return UserLinkHelper.mapToObjectList<UserLink>(result);
            })
        );
    }

    /**
     * @description Create a new user link
     * @param  {UserLink} userLink
     * @returns Observable<number> - Created user link id
     */
    create(userLink: UserLink): Observable<number> {
        return this._http.post(this.endpoints.createUserLink, userLink).pipe(map((result: any) => result));
    }

    /**
     * @description Update a user link
     * @param  {UserLink} userLink
     * @returns Observable<number> - Updated user link id
     */
    update(userLink: UserLink): Observable<number> {
        return this._http.put(this.endpoints.updateUserLink, userLink).pipe(map((result: any) => result));
    }

    /**
     * @description Delete a user link
     * @param  {number} userLinkId
     * @returns Observable<number> - Deleted user link id
     */
    delete(userLinkId: number): Observable<UserLink> {
        return this._http
            .delete(this._utilStringService.formatString(this.endpoints.deleteUserLink, [userLinkId]))
            .pipe(map((result: any) => result));
    }

    /**
     * @description Update a user link changing a property favorite.
     * @param  {number} userLinkId
     * @returns Observable<UserLink> - Updated user link
     */
    toggleFavorite(userLinkId: number): Observable<UserLink> {
        return this._http
            .put(this._utilStringService.formatString(this.endpoints.toggleFavoriteUserLink, [userLinkId]), null)
            .pipe(map((result: any) => UserLinkHelper.mapToObject(result)));
    }

    /**
     * @description Update a user link changing a property active.
     * @param  {number} userLinkId
     * @returns Observable<UserLink> - Updated user link
     */
    toggleActive(userLinkId: number): Observable<UserLink> {
        return this._http
            .put(this._utilStringService.formatString(this.endpoints.toggleActiveUserLink, [userLinkId]), null)
            .pipe(map((result: any) => UserLinkHelper.mapToObject(result)));
    }
}
