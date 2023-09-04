import { Injectable } from '@angular/core';
import { EnvironmentService } from '@services/environment/environment.service';

@Injectable({
    providedIn: 'root',
})
export class LinkEndpointService {
    constructor(private _environmentService: EnvironmentService) {}

    private linkApiUrl = `${this._environmentService.getLinkApi}/link`;

    public get getCreateEndpoint(): string {
        return `${this.linkApiUrl}/`;
    }

    public getUpdateEndpoint(linkId: number): string {
        return `${this.linkApiUrl}/${linkId}`;
    }

    public getOneByIdEndpoint(linkId: number): string {
        return `${this.linkApiUrl}/${linkId}`;
    }

    public get getAllEndpoint(): string {
        return `${this.linkApiUrl}/`;
    }

    public get getAllPaginatedEndpoint(): string {
        return `${this.linkApiUrl}/paginate/`;
    }

    public getActivateEndpoint(linkId: number): string {
        return `${this.linkApiUrl}/activate/${linkId}`;
    }

    public getDeactivateEndpoint(linkId: number): string {
        return `${this.linkApiUrl}/deactivate/${linkId}`;
    }

    public getFavoriteEndpoint(linkId: number): string {
        return `${this.linkApiUrl}/favorite/${linkId}`;
    }

    public getUnfavoriteEndpoint(linkId: number): string {
        return `${this.linkApiUrl}/unfavorite/${linkId}`;
    }

    public getDeleteEndpoint(linkId: number): string {
        return `${this.linkApiUrl}/${linkId}`;
    }
}
