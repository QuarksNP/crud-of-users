import { UserModal } from "@users-types/types";

import { ButtonCloseModal } from "./Button-close-modal.component";

import * as style from "./user-form-modal.css";

export const UserContainerModal: React.FC<UserModal> = ({
  children,
  open,
  handleCloseModal,
}) => {
  if (!open) return null;

  return (
    <article className={style.article}>
      <div className={style.close}>
        <ButtonCloseModal handleClick={handleCloseModal} />
      </div>
      {children}
    </article>
  );
};
