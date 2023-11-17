import { IFormBase } from '@models/form.model';
import { IGroupLink } from '@models/group/group-link.model';
import { ILink } from '@models/link/link.model';

export type TCreateLinkForm = IFormBase;

export interface ICreateLinkConfig {
    groupLink: IGroupLink;
}

export interface ICreateLinkEvent {
    groupLink: IGroupLink;
    link: ILink;
}
