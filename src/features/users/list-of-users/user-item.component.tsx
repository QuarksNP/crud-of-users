import type { HandleUserItem } from "@users-types/types";

import { XMarkIcon, PencilIcon } from "@heroicons/react/24/outline";

import * as style from "./user-item.css";
import React from "react";

export const UserItem: React.FC<HandleUserItem> = ({
  user,
  handleDelete,
  handleUserById,
  handleOpenModal,
}) => {
  return (
    <section className={style.section}>

      <div className={style.actionsContainer}>
        <button
          type="button"
          onClick={() => {
            handleUserById(user.id);
            handleOpenModal({ openUpdateUserModal: true });
          }}
        >
          <PencilIcon />
        </button>

        <button type="button" onClick={() => handleDelete(user.id)}>
          <XMarkIcon />
        </button>
      </div>

      <div className={style.descContainer}>
        <picture className={style.pictures_container}>
          <img className={style.profile_cover} src={user.cover} />
          <img className={style.profile_picture} src={user.picture} />
        </picture>

        <div className={style.basicDesc}>
          <span className={style.name}>{user.name}</span>

          <span
            className={style.role[user.role as "member" | "manager" | "admin"]}
          >
            {user.role}
          </span>
          <p className={style.description}>{user.description}</p>

        </div>

      </div>
    </section>
  );
};
