import { Injectable } from '@angular/core';
import { EnvironmentService } from '@services/environment/environment.service';

@Injectable({
    providedIn: 'root',
})
export class GroupLinkEndpointService {
    constructor(private _environmentService: EnvironmentService) {}

    private groupLinkApiUrl = `${this._environmentService.getLinkApi}/groupLink`;

    public get getCreateEndpoint(): string {
        return `${this.groupLinkApiUrl}/`;
    }

    public getUpdateEndpoint(groupLinkId: number): string {
        return `${this.groupLinkApiUrl}/${groupLinkId}`;
    }

    public getOneByIdEndpoint(groupLinkId: number): string {
        return `${this.groupLinkApiUrl}/${groupLinkId}`;
    }

    public getLinkListByIdEndpoint(): string {
        return `${this.groupLinkApiUrl}/`;
    }

    public get getAllPaginatedEndpoint(): string {
        return `${this.groupLinkApiUrl}/paginate/`;
    }

    public getDeleteEndpoint(groupLinkId: number): string {
        return `${this.groupLinkApiUrl}/${groupLinkId}`;
    }
}
