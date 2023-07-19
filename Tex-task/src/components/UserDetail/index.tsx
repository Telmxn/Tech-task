import { IUser } from "../../types/user";
import style from "./userDetail.module.css";

const UserDetail = (props: {
  name: string;
  photo: string;
  position: string;
  phone: string;
  email: string;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
}) => {
  const { name, photo, position, phone, email, setUser } = props;

  const closeDetail = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLDivElement;
    target.id == "overlay" && setUser(null);
  };

  return (
    <div id="overlay" className={style.overlay} onClick={closeDetail}>
      <div className={style.userDetail}>
        <button className={style.close} onClick={() => setUser(null)}>
          x
        </button>
        <div className={style.topPart}>
          <img src={`images/${photo}`} alt="User" />
          <h4>{name}</h4>
          <p>{position}</p>
        </div>
        <div className={style.bottomPart}>
          <p>
            <b>Phone</b> {phone}
          </p>
          <p>
            <b>Email</b> <a href={`mailto:${email}`}>{email}</a>
          </p>
        </div>
        <button className={style.sendMessage}>Send message</button>
      </div>
    </div>
  );
};

export default UserDetail;
