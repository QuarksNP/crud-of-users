import type { HandleUserItem } from "@users-types/types";

import { XMarkIcon, PencilIcon } from "@heroicons/react/24/outline";

import * as style from "./user-item.component.css";
import React from "react";

export const UserItem: React.FC<HandleUserItem> = ({
  id,
  children,
  handleRemove,
}) => {
  return (
    <section className={style.section}>
      {children}
      <div className={style.actionsContainer}>
        <button>
          <PencilIcon />
        </button>
        <button onClick={() => handleRemove(id)}>
          <XMarkIcon />
        </button>
      </div>
    </section>
  );
};
