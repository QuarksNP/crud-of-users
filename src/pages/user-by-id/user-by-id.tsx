import { Link, useRoute } from "wouter";

import {
  getUserById,
  useUsersActions,
  UserFormModal,
} from "../../features/users";

import { useAppSelector } from "../../features/store";

import * as style from "./user-by-id.css";

export default function UserByIdPage() {
  const users = useAppSelector((state) => state.users);

  const { handleUser } = useUsersActions();

  const [, params] = useRoute("/user/:id");

  const currentUser = getUserById(params?.id, users);

  return (
    <section className={style.section}>
      <Link href="/">
        <button className={style.btn_home}>
          🏠Home
        </button>
      </Link>
      <h1>{currentUser?.name} Profile</h1>

      <picture className={style.picture}>
        <img src={currentUser?.picture} />
      </picture>

      <UserFormModal handleSubmit={(event) => handleUser(event, params?.id)} />
    </section>
  );
}
