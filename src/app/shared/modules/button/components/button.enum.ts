export const enum EButtonType {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    ACCENT = 'accent',
    DESTRUCTIVE = 'destructive',
}

export type TButtonType = EButtonType.PRIMARY | EButtonType.SECONDARY | EButtonType.ACCENT | EButtonType.DESTRUCTIVE;

export const enum EButtonWeight {
    SMALL = 'small',
    LARGE = 'large',
    EXTRA_LARGE = 'extraLarge',
}

export type TButtonWeight = EButtonWeight.SMALL | EButtonWeight.LARGE | EButtonWeight.EXTRA_LARGE;
