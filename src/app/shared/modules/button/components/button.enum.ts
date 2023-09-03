export const enum EButtonType {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    ACCENT = 'accent',
    DESTRUCTIVE = 'destructive',
}

export type TButtonType = EButtonType.PRIMARY | EButtonType.SECONDARY | EButtonType.ACCENT | EButtonType.DESTRUCTIVE;
