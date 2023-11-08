import { ECardAlignTitle } from './card.enum';

export class CardConfig<T = object> {
    constructor(public title?: string, public containerItem?: T, public alignTitle = ECardAlignTitle.LEFT) {}
}
