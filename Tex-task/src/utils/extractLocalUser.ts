import { IUser } from "../types/user";

export const extractLocalUser = (user: IUser) => ({
  name: user.name,
  email: user.email,
  nickname: user.nickname,
  phone: user.phone,
  photo: user.photo,
  position: user.position,
});
