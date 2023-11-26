export const enum EButtonType {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    ACCENT = 'accent',
    DESTRUCTIVE = 'destructive',
}

export type TButtonType = EButtonType.PRIMARY | EButtonType.SECONDARY | EButtonType.ACCENT | EButtonType.DESTRUCTIVE;

export const enum EButtonWeight {
    EXTRA_SMALL = 'extraSmall',
    SMALL = 'small',
    LARGE = 'large',
    EXTRA_LARGE = 'extraLarge',
}

export type TButtonWeight = EButtonWeight;
