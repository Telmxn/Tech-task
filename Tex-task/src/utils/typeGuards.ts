import { IUser } from "./../types/user";

export const isUser = (user: IUser) => "nickname" in user;
