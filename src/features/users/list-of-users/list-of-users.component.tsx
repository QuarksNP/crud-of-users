import React from "react";

import { UserItem } from "./user-item.component";
import { Background } from "../../ui/index";

import { UsersMap } from "@users-types/types";

import { UserFormModal } from "..";

import * as style from "./list-of-users.css";

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
              <React.Fragment key={`container-${user.id}`}>
                <Background active={openModal} key={`bg-${user.id}`} />
                <UserFormModal
                  key={`form-${user.id}`}
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
