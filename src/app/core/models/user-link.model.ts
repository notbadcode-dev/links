import { UtilHelper } from './util.mode';

export class UserLink {
    constructor(
        public id: number,
        public userId: number,
        public linkId: number,
        public name: string,
        public link: string,
        public color: string,
        public favorite: boolean,
        public active: boolean,
        public groupId?: number,
        public groupName?: string,
        public linkOrder?: number,
        public createdAt?: Date | null,
        public lastModifiedAt?: Date | null
    ) {}
}

export class UserLinkHelper extends UtilHelper {}

export class ReorderLinkRequest {
    constructor(
        public groupId: number,
        public newLinkIdOnPosition: number,
        public lastLinkIdOnPosition: number
    ) {}
}

export class ReorderLinkResponse {
    constructor(public newLinkOnPosition: UserLink, public lastLinkIdOnPosition: UserLink) {}
}
