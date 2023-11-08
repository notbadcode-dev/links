export enum EMessageType {
    info = 'info',
    success = 'success',
    warning = 'warning',
    error = 'error',
}

export type TMessageType = EMessageType.info | EMessageType.success | EMessageType.warning | EMessageType.error;
