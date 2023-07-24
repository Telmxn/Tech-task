import { FC } from "react";
import { IUser } from "../../types/user";
import style from "./userDetail.module.css";

type IUserDetailPreview = Omit<IUser, "nickname">;

interface IUserDetailProps {
  user: IUserDetailPreview;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
}

const UserDetail: FC<IUserDetailProps> = ({ user, setUser }) => {
  const closeDetail = (
    e: React.MouseEvent<HTMLDivElement | HTMLButtonElement, MouseEvent>
  ) => {
    const target = e.target as HTMLDivElement;
    target.id == "overlay" && setUser(null);
    target.id == "close" && setUser(null);
  };

  return (
    <div id="overlay" className={style.overlay} onClick={closeDetail}>
      <div className={style.userDetail}>
        <button id="close" className={style.close} onClick={closeDetail}>
          x
        </button>
        <div className={style.topPart}>
          <img src={`images/${user.photo}`} alt="User" />
          <h4>{user.name}</h4>
          <p>{user.position}</p>
        </div>
        <div className={style.bottomPart}>
          <p>
            <b>Phone</b> {user.phone}
          </p>
          <p>
            <b>Email</b> <a href={`mailto:${user.email}`}>{user.email}</a>
          </p>
        </div>
        <button className={style.sendMessage}>Send message</button>
      </div>
    </div>
  );
};

export default UserDetail;
