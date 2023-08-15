import { useAppSelector } from "../../users-store/list-of-users.selector";
import { useUsersActions } from "../../users-store/user-actions";

import { UserItem } from "../user-item-component/user-item.component";
import { Profile } from "../../../ui/index";


import * as style from "./list-of-users.component.css";

export const ListOfUsers: React.FC = () => {
  const users = useAppSelector((state) => state.users);

  const { handleRemoveUser } = useUsersActions();

  return (
    <article className={style.article}>
      {users.map((user) => {
        return (
          <UserItem key={user.id} {...user} handleRemove={handleRemoveUser}>
            <Profile {...user}>
              <span
                className={
                  style.role[user.role as "member" | "manager" | "admin"]
                }
              >
                {user.role}
              </span>
            </Profile>
          </UserItem>
        );
      })}
    </article>
  );
};
