import { UserItem } from "./user-item.component";
import { Background } from "../../ui/index";

import { UsersMap } from "@users-types/types";

import * as style from "./list-of-users.css";
import { UserFormModal } from "..";
import React from "react";

export const ListOfUsers: React.FC<UsersMap> = ({
  users,
  currentId,
  openModal,
  handleOpenModal,
  handleUserById,
  handleUpdateUser,
  handleDeleteUser,
}) => {
  return (
    <article className={style.article}>
      {users.map((user) => {
        return (
          <React.Fragment key={user.id}>
            <UserItem
              key={user.id}
              handleDelete={handleDeleteUser}
              {...{ user, handleUserById, handleOpenModal }}
            />
            {currentId === user.id && (
              <React.Fragment key={user.id}>
                <Background active={openModal} key={user.id}/>
                <UserFormModal
                  key={user.id}
                  open={openModal}
                  title={`Edit user: ${user.name}`}
                  handleSubmit={(event) => handleUpdateUser(event, user.id)}
                  handleClick={handleOpenModal}
                />
              </React.Fragment>
            )}
          </React.Fragment>
        );
      })}
    </article>
  );
};
