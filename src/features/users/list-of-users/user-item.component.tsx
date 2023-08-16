import type { HandleUserItem } from "@users-types/types";

import { XMarkIcon, PencilIcon } from "@heroicons/react/24/outline";

import * as style from "./user-item.css";
import React from "react";

export const UserItem: React.FC<HandleUserItem> = ({
  user,
  children,
  handleDelete,
  handleUserById,
  handleOpenModal,
}) => {
  return (
    <section className={style.section}>
      {children}
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
    </section>
  );
};
