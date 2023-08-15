import * as style from "./create-user-form.component.css";

import { useUsersActions } from "../../users-store/user-actions";

export const CreateUserForm: React.FC = () => {
  const { handleCreateUser } = useUsersActions();

  return (
    <form className={style.form} onSubmit={handleCreateUser}>
      <h1>Add members to Team</h1>
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
  );
};
