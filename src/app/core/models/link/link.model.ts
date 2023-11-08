import { IGroupLink } from '@models/group/group-link.model';
import { ICommonLink } from '@models/link/link-common.model';
import { ITag } from '@models/tag/tag.model';

export interface ILink extends ICommonLink {
    id: number;
    displayOrder?: number | null;
    tagList?: ITag[];
    linkGroupId?: number | null;
    linkGroup?: IGroupLink | null;
}
