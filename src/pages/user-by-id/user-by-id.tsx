import { useRoute } from "wouter";

import {
  useAppSelector,
  getUserById,
  useUsersActions,
  UserFormModal,
} from "../../features/users";

import * as style from "./user-by-id.css";

export default function UserByIdPage() {
  const users = useAppSelector((state) => state.users);

  const { handleUser } = useUsersActions();

  const [, params] = useRoute("/:id");

  const currentUser = getUserById(params?.id, users);

  return (
    <section className={style.section}>
      <h1>{currentUser?.name} Profile</h1>

      <picture className={style.picture}>
        <img src={currentUser?.picture} />
      </picture>

      <UserFormModal handleSubmit={(event) => handleUser(event, params?.id)} />
    </section>
  );
}
