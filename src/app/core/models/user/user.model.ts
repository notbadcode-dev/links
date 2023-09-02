export interface IUser {
    id: number;
    userName: string;
}

export interface IUserLogin extends IUser {
    applicationId: number;
}
