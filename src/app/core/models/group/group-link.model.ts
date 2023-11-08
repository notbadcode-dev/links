import { ILink } from '@models/link/link.model';
import { ITag } from '@models/tag/tag.model';
import { TGroupLinkGradientType } from 'src/app/core/enum/group-link-gradient-type.enum';

export interface IGroupLink {
    id: number;
    name: string;
    linkList: ILink[];
    tagList?: ITag[];
    colorFrom?: string;
    colorTo?: string;
    gradientType?: TGroupLinkGradientType;
    displayOrder?: number | null;
}
