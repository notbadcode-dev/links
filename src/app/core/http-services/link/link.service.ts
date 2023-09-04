import { Injectable } from '@angular/core';
import { HttpBaseService } from '@http-services/http-base/http-base.service';
import { LinkEndpointService } from '@http-services/link-endpoint/link-endpoint.service';
import { ILinkCreate } from '@models/link/link-create.model';
import { ILink } from '@models/link/link.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class LinkService {
    private controller = 'link';

    constructor(private _httpBaseService: HttpBaseService, private _linkEndpointService: LinkEndpointService) {}

    /**
     * @description Create a link
     * @param  {ILinkCreate} linkCreate
     * @returns Observable<Link[]>
     */
    create(linkCreate: ILinkCreate): Observable<ILink> {
        return this._httpBaseService.httpPost<ILink, ILinkCreate>(this._linkEndpointService.getCreateEndpoint, linkCreate);
    }

    /**
     * @description Update a link
     * @param  {ILink} link
     * @returns Observable<Link[]>
     */
    update(link: ILink): Observable<ILink> {
        return this._httpBaseService.httpPatch<ILink, ILink>(this._linkEndpointService.getUpdateEndpoint(link.id), link);
    }

    /**
     * @description Get link by id
     * @param  {number} linkId
     * @returns Observable<Link>
     */
    getOneById(linkId: number): Observable<ILink> {
        return this._httpBaseService.httpGet<ILink>(this._linkEndpointService.getOneByIdEndpoint(linkId));
    }

    /**
     * @description Get all links
     * @returns Observable<Link[]>
     */
    getAll(): Observable<ILink[]> {
        return this._httpBaseService.httpGet<ILink[]>(this._linkEndpointService.getAllEndpoint);
    }

    /**
     * @description Toggle activate flag to TRUE
     * @param  {number} linkId
     * @returns Observable<Link>
     */
    activate(linkId: number): Observable<ILink> {
        return this._httpBaseService.httpPatch<ILink, null>(this._linkEndpointService.getActivateEndpoint(linkId));
    }

    /**
     * @description Toggle activate flag to FALSE
     * @param  {number} linkId
     * @returns Observable<Link>
     */
    deactivate(linkId: number): Observable<ILink> {
        return this._httpBaseService.httpPatch<ILink, null>(this._linkEndpointService.getDeactivateEndpoint(linkId));
    }

    /**
     * @description Toggle favorite flag to FALSE
     * @param  {number} linkId
     * @returns Observable<Link>
     */
    favorite(linkId: number): Observable<ILink> {
        return this._httpBaseService.httpPatch<ILink, null>(this._linkEndpointService.getFavoriteEndpoint(linkId));
    }

    /**
     * @description Toggle favorite flag to FALSE
     * @param  {number} linkId
     * @returns Observable<Link>
     */
    unFavorite(linkId: number): Observable<ILink> {
        return this._httpBaseService.httpPatch<ILink, null>(this._linkEndpointService.getUnfavoriteEndpoint(linkId));
    }

    /**
     * @description Delete link
     * @param  {number} linkId
     * @returns Observable<Link>
     */
    delete(linkId: number): Observable<ILink> {
        return this._httpBaseService.httpDelete<ILink>(this._linkEndpointService.getDeleteEndpoint(linkId));
    }
}
