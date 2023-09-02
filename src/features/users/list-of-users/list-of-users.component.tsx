import React from "react";

import { UserItem } from "./user-item.component";

import { UsersMap } from "@global-types/types";

import * as style from "./list-of-users.css";

export const ListOfUsers: React.FC<UsersMap> = ({
  users,
  handleDeleteUser,
}) => {
  return (
    <article className={style.article}>
      {users.map((user) => {
        return (
          <UserItem
            key={user.id}
            handleDelete={handleDeleteUser}
            {...{ user }}
          />
        );
      })}
    </article>
  );
};
