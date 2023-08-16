import { UserItem } from "./user-item.component";
import { Background, Profile } from "../../ui/index";

import { UsersMap } from "@users-types/types";

import * as style from "./list-of-users.css";
import { UserFormModal } from "..";

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
          <UserItem
            key={user.id}
            handleDelete={handleDeleteUser}
            {...{ user, handleUserById, handleOpenModal }}
          >
            <Profile {...user} key={user.id}>
              <span
                className={
                  style.role[user.role as "member" | "manager" | "admin"]
                }
              >
                {user.role}
              </span>
            </Profile>

            {currentId === user.id && (
              <>
                <Background active={openModal} />
                <UserFormModal
                  open={openModal}
                  title={`Edit user: ${user.name}`}
                  handleSubmit={(event) => handleUpdateUser(event, user.id)}
                  handleClick={handleOpenModal}
                />
              </>
            )}
          </UserItem>
        );
      })}
    </article>
  );
};
