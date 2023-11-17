export interface IChildEvent<T = null> {
    data: T | null;
    isCancel: boolean;
}

export interface IClosedModalEvent<T = null> {
    data: T | null;
}
