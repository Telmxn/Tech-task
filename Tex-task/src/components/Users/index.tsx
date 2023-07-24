/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useState } from "react";
import style from "./users.module.css";
import { getUsers } from "../../store/actions/userThunk";
import { useAppDispatch, useAppSelector } from "../../store";
import { IUser } from "../../types/user";
import { User, UserDetail } from "..";
import { extractLocalUser } from "../../utils/extractLocalUser";
import { isUser } from "../../utils/typeGuards";

const Users: FC = () => {
  const [showAll, setShowAll] = useState<boolean>(false);
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
  };

  return (
    <>
      <div className={style.users}>
        {users.slice(0, showAll == false ? 3 : undefined).map((user: IUser) => {
          return <User key={user.nickname} user={user} showUser={showUser} />;
        })}
        {showAll || <button onClick={() => setShowAll(true)}>View all</button>}
      </div>
      {user && <UserDetail user={user} setUser={setUser} />}
    </>
  );
};

export default Users;
