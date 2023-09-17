export interface IUser {
    id: number;
    username: string;
    connectedFrom: Date;
}

export interface IUserLogin extends IUser {
    applicationId: number;
}
