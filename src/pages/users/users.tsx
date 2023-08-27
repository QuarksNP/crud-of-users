import {
  ButtonOpenModal,
  UserFormModal,
  UserContainerModal,
  FilterUsers,
  ListOfUsers,
  useAppSelector,
  useUsersActions,
  useOpenModal,
  useFilterUsersByName,
} from "../../features/users";

import { Background } from "../../features/ui";

import * as style from "./users.css";

export default function UsersPage() {
  const users = useAppSelector((state) => state.users);

  const { usersFiltered, handleFilterUsersByName } =
    useFilterUsersByName(users);

  const { openModal, handleOpenModal } = useOpenModal();

  const { handleDeleteUser, handleUser } = useUsersActions();

  if (!users.length)
    return (
      <article className={style.no_users_article}>
        <h1>There isn't users yet😥</h1>
        <ButtonOpenModal handleClick={handleOpenModal} />

        <Background active={openModal} />

        <UserContainerModal open={openModal} handleCloseModal={handleOpenModal}>
          <UserFormModal handleSubmit={handleUser} />
        </UserContainerModal>
      </article>
    );

  return (
    <section className={style.section}>
      <Background active={openModal} />

      <header className={style.header}>
        <ButtonOpenModal handleClick={handleOpenModal} />
        <FilterUsers handleChange={handleFilterUsersByName} />
      </header>

      <UserContainerModal open={openModal} handleCloseModal={handleOpenModal}>
        <UserFormModal handleSubmit={handleUser} />
      </UserContainerModal>
      
      <ListOfUsers
        users={usersFiltered.length ? usersFiltered : users}
        handleUpdateUser={handleUser}
        {...{
          handleDeleteUser,
        }}
      />
    </section>
  );
}
