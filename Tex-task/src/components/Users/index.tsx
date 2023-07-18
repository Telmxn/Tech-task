import { useEffect, useState } from "react";
import style from "./users.module.css";
import { getUsers } from "../../store/actions/userThunk";
import { useAppDispatch, useAppSelector } from "../../store";
import { IUser } from "../../types/user";
import User from "../User";

const Users: React.FC<IUser[]> = () => {
  const [showAll, setShowAll] = useState(false);
  const { users, status } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(getUsers());
  }, []);

  const showUser = (id: number) => {
    const user = users.find((user: IUser) => user.id === id);
    console.log(user);
  };

  return (
    <div className={style.users}>
      {users.slice(0, showAll == false ? 3 : undefined).map((user: IUser) => {
        return (
          <User
            key={user.id}
            id={user.id}
            name={user.name}
            nickname={user.nickname}
            photo={user.photo}
            showUser={showUser}
          />
        );
      })}
      {showAll == false ? (
        <button onClick={() => setShowAll(true)}>View all</button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Users;
