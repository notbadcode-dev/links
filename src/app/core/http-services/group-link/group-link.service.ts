import { Injectable } from '@angular/core';
import { GroupLinkEndpointService } from '@http-services/group-link-endpoint/group-link-endpoint.service';
import { HttpBaseService } from '@http-services/http-base/http-base.service';
import { IGroupLink } from '@models/group/group-link.model';
import { IPaginateItem } from '@models/pagination-item/pagination-item.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class GroupLinkService {
    constructor(private _httpBaseService: HttpBaseService, private _groupLinkEndpointService: GroupLinkEndpointService) {}

    /**
     * @description Create a group link
     * @param  {IGroupLink} groupLinkCreate
     * @returns Observable<Link[]>
     */
    create(groupLinkCreate: IGroupLink): Observable<IGroupLink> {
        return this._httpBaseService.httpPost<IGroupLink, IGroupLink>(this._groupLinkEndpointService.getCreateEndpoint, groupLinkCreate);
    }

    /**
     * @description Update a group link
     * @param  {IGroupLink} groupLink
     * @returns Observable<IGroupLink>
     */
    update(groupLink: IGroupLink): Observable<IGroupLink> {
        return this._httpBaseService.httpPatch<IGroupLink, IGroupLink>(
            this._groupLinkEndpointService.getUpdateEndpoint(groupLink.id),
            groupLink
        );
    }

    /**
     * @description Get group link by id
     * @param  {number} groupLinkId
     * @returns Observable<IGroupLink>
     */
    getOneById(groupLinkId: number): Observable<IGroupLink> {
        return this._httpBaseService.httpGet<IGroupLink>(this._groupLinkEndpointService.getOneByIdEndpoint(groupLinkId));
    }

    /**
     * @description Get all group links with paginated
     * @param  {IPaginateItem<IGroupLink>} paginateGroupLinkList
     * @returns Observable<IPaginateItem<IGroupLink>>
     */
    getAllPaginated(paginateGroupLinkList: IPaginateItem<IGroupLink>): Observable<IPaginateItem<IGroupLink>> {
        return this._httpBaseService.httpPost<IPaginateItem<IGroupLink>, IPaginateItem<IGroupLink>>(
            this._groupLinkEndpointService.getAllPaginatedEndpoint,
            paginateGroupLinkList
        );
    }

    /**
     * @description Delete group link
     * @param  {number} groupLinkId
     * @returns Observable<IGroupLink>
     */
    delete(groupLinkId: number): Observable<IGroupLink> {
        return this._httpBaseService.httpDelete<IGroupLink>(this._groupLinkEndpointService.getDeleteEndpoint(groupLinkId));
    }
}
