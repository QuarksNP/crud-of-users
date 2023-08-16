import { UserModal } from "@users-types/types";

import { ButtonCloseModal } from "./Button-close-modal.component";

import * as style from "./user-form-modal.css";


export const UserFormModal: React.FC<UserModal> = ({
  open,
  title,
  handleClick,
  handleSubmit,
}) => {
  if (!open) return;

  return (
    <article className={style.article}>
      <div className={style.close}>
        <ButtonCloseModal handleClick={() => handleClick({openCreateUserModal: false, openUpdateUserModal: false})} />
      </div>
      <form onSubmit={handleSubmit}>
        <h1>{title}</h1>
        <span>Believe in the best to do the best</span>

        <fieldset className={style.fieldset}>
          <input name="name" type="text" placeholder="Eg. Marco Scott" />
          <input
            name="picture"
            type="url"
            placeholder="Eg. https://w.example.cc/full/9m/example-9mjoy1.png"
          />

          <select name="role">
            <option value="member">Member</option>
            <option value="manager">Manager</option>
            <option value="admin">Admin</option>
          </select>
        </fieldset>

        <button className={style.submit} type="submit">
          Save changes
        </button>
      </form>
    </article>
  );
};
