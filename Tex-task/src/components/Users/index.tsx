import { useEffect, useState } from "react";
import style from "./users.module.css";
import { getUsers } from "../../store/actions/userThunk";
import { useAppDispatch, useAppSelector } from "../../store";
import { IUser } from "../../types/user";
import User from "../User";
import UserDetail from "../UserDetail";
import { extractLocalUser } from "../../utils/extractLocalUser";
import { isUser } from "../../utils/typeGuards";

const Users: React.FC<IUser[]> = () => {
  const [showAll, setShowAll] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);
  const { users } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(getUsers());
  }, []);

  const showUser = (nickname: string) => {
    const newUser = users?.find(
      (user: IUser) => user.nickname === nickname
    ) as unknown as IUser;
    if (isUser(newUser)) {
      extractLocalUser(newUser);
    }
    newUser && setUser(newUser);
    console.log(newUser);
  };

  return (
    <>
      <div className={style.users}>
        {users.slice(0, showAll == false ? 3 : undefined).map((user: IUser) => {
          return (
            <User
              key={user.nickname}
              name={user.name}
              nickname={user.nickname}
              photo={user.photo}
              showUser={showUser}
            />
          );
        })}
        {showAll || <button onClick={() => setShowAll(true)}>View all</button>}
      </div>
      {user && (
        <UserDetail
          name={user.name}
          photo={user.photo}
          position={user.position}
          phone={user.phone}
          email={user.email}
          setUser={setUser}
        />
      )}
    </>
  );
};

export default Users;
