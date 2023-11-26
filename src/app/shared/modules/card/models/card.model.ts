import { ECardAlignTitle } from '../enums/card.enum';

export interface ICardConfig<T = object> {
    title?: string;
    containerItem?: T;
    styleConfig: ICardStyleConfig;
    expandConfig: ICardExpandConfig,
}

export class CardConfigHelper {
    public static getCardConfig<T>(title: string, containerItem: T): ICardConfig<T> {
        return {
            title: title,
            containerItem: containerItem,
            styleConfig: CardStyleConfigHelper.getDefault(),
            expandConfig: CardExpandConfigHelper.getDefault()
        }
    }
}

export interface ICardStyleConfig {
    alignTitle: ECardAlignTitle;
}

export class CardStyleConfigHelper {
    public static getDefault(): ICardStyleConfig {
        return {
            alignTitle: ECardAlignTitle.LEFT
        }
    }
}

export interface ICardExpandConfig {
    expanded: boolean | null;
}


export class CardExpandConfigHelper {
    public static getDefault(): ICardExpandConfig {
        return {
            expanded: false,
        }
    }
}
