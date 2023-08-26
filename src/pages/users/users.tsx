import {
  ButtonOpenModal,
  UserFormModal,
  FilterUsers,
  ListOfUsers,
  useAppSelector,
  useUsersActions,
  useOpenModal,
  useGetUserId,
  useFilterUsersByName,
} from "../../features/users";

import { Background } from "../../features/ui";

import * as style from "./users.css";

export default function UsersPage() {
  const users = useAppSelector((state) => state.users);

  const { usersFiltered, handleFilterUsersByName } =
    useFilterUsersByName(users);

  const {
    openModal: { openCreateUserModal, openUpdateUserModal },
    handleOpenModal,
  } = useOpenModal();

  const { currentId, handleUserById } = useGetUserId();

  const { handleDeleteUser, handleUser } = useUsersActions();

  if (!users.length)
    return (
      <article className={style.no_users_article}>
        <h1>There isn't users yet😥</h1>
        <ButtonOpenModal handleClick={handleOpenModal} />

        <Background active={openCreateUserModal} />

        <UserFormModal
          open={openCreateUserModal}
          title={"Add members to team"}
          handleSubmit={handleUser}
          handleClick={handleOpenModal}
        />
      </article>
    );

  return (
    <section className={style.section}>
      <Background active={openCreateUserModal} />

      <header className={style.header}>
        <ButtonOpenModal handleClick={handleOpenModal} />
        <FilterUsers handleChange={handleFilterUsersByName} />
      </header>

      <UserFormModal
        open={openCreateUserModal}
        title={"Add members to team"}
        handleSubmit={handleUser}
        handleClick={handleOpenModal}
      />
      <ListOfUsers
        openModal={openUpdateUserModal}
        users={usersFiltered.length ? usersFiltered : users}
        handleUpdateUser={handleUser}
        {...{
          currentId,
          handleDeleteUser,
          handleOpenModal,
          handleUserById,
        }}
      />
    </section>
  );
}
