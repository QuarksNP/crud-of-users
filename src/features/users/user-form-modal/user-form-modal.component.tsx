import { UserModal } from "@users-types/types";

import { ButtonCloseModal } from "./Button-close-modal.component";

import * as style from "./user-form-modal.css";

export const UserFormModal: React.FC<UserModal> = ({
  open,
  title,
  handleClick,
  handleSubmit,
}) => {
  if (!open) return null;

  return (
    <article className={style.article}>
      <div className={style.close}>
        <ButtonCloseModal
          handleClick={() =>
            handleClick({
              openCreateUserModal: false,
              openUpdateUserModal: false,
            })
          }
        />
      </div>
      <form onSubmit={handleSubmit}>
        <h1 className={style.title}>{title}</h1>
        <span>Believe in the best to do the best</span>

        <fieldset className={style.fieldset}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Eg. Marco Scott"
            required
          />

          <label htmlFor="role">Select a role</label>
          <select id="role" name="role">
            <option value="member">Member</option>
            <option value="manager">Manager</option>
            <option value="admin">Admin</option>
          </select>

          <label htmlFor="picture_profile">Photo Profile</label>
          <input
            id="picture_profile"
            name="picture"
            type="url"
            placeholder="Eg. https://w.example.cc/full/9m/picture-9mjoy1.png"
          />

          <label htmlFor="picture_cover">Photo Cover</label>
          <input
            id="picture_cover"
            name="cover"
            type="url"
            placeholder="Eg. https://w.example.cc/full/9m/cover-9mjoy1.png"
          />

          <label htmlFor="description">Your Description</label>
          <textarea id="description" name="description">
            Hello world!, this is a example😋
          </textarea>
        </fieldset>

        <button className={style.submit} type="submit">
          Save changes
        </button>
      </form>
    </article>
  );
};
