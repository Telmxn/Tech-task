import { FC } from "react";
import style from "./user.module.css";
import { IUser } from "../../types/user";

type IUserPreview = Pick<IUser, "name" | "nickname" | "photo">;

interface IUserProps {
  user: IUserPreview;
  showUser: (nickname: string) => void;
}

const User: FC<IUserProps> = ({ user, showUser }) => {
  return (
    <div className={style.user}>
      <div className={style.leftPart}>
        <img src={`/images/${user.photo}`} alt="User" />
        <div className={style.userInfo}>
          <p>{user.name}</p>
          <span>{user.nickname}</span>
        </div>
      </div>
      <button onClick={() => showUser(user.nickname)}>View</button>
    </div>
  );
};

export default User;
