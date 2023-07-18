import style from "./user.module.css";

const User = (props: {
  name: string;
  nickname: string;
  photo: string;
  showUser: any;
}) => {
  const { name, nickname, photo, showUser } = props;
  return (
    <div className={style.user}>
      <div className={style.leftPart}>
        <img src={`/images/${photo}`} alt="User" />
        <div className={style.userInfo}>
          <p>{name}</p>
          <span>{nickname}</span>
        </div>
      </div>
      <button onClick={() => showUser(nickname)}>View</button>
    </div>
  );
};

export default User;
