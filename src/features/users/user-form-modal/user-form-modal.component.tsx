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
          <article className={style.container_info}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Eg. Marco Scott"
                required
              />
            </div>

            <div>
              <label htmlFor="role">Select a role</label>
              <select id="role" name="role">
                <option value="admin">Admin</option>
                <option value="manager">Manager</option>
                <option value="member">Member</option>
              </select>
            </div>
          </article>

          <article className={style.container_url}>
            <div>
              <label htmlFor="picture_profile">Photo Profile</label>
              <input
                id="picture_profile"
                name="picture"
                type="url"
                placeholder="Eg. https://w.example.cc.png"
                autoComplete="off"
              />
            </div>

            <div>
              <label htmlFor="picture_cover">Photo Cover</label>
              <input
                id="picture_cover"
                name="cover"
                type="url"
                placeholder="Eg. https://w.example.cc.png"
                autoComplete="off"
              />
            </div>
          </article>

          <article className={style.container_desc}>
            <label htmlFor="description">Your Description</label>
            <textarea
              id="description"
              name="description"
              defaultValue={"Hello world!, this is a example😋"}
            ></textarea>
          </article>
        </fieldset>

        <button className={style.submit} type="submit">
          Save changes
        </button>
      </form>
    </article>
  );
};
