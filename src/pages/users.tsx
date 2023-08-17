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
} from "../features/users";

import { Background } from "../features/ui";

export default function UsersPage() {
  const users = useAppSelector((state) => state.users);

  const { usersFiltered, handleFilterUsersByName } =
    useFilterUsersByName(users);
  const { openModal, handleOpenModal } = useOpenModal();
  const { currentId, handleUserById } = useGetUserId();

  const { handleDeleteUser, handleUpdateUser, handleCreateUser } =
    useUsersActions();
  console.log(usersFiltered);

  if (!users.length)
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          height: "100%",
          color: "white",
        }}
      >
        <h1>There isn't users yet😥</h1>
        <ButtonOpenModal handleClick={handleOpenModal} />

        <Background active={openModal.openCreateUserModal} />

        <UserFormModal
          open={openModal.openCreateUserModal}
          title={"Add members to team"}
          handleSubmit={handleCreateUser}
          handleClick={handleOpenModal}
        />
      </div>
    );

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "3rem",
        height: "100%",
      }}
    >
      <Background active={openModal.openCreateUserModal} />

      <header
        style={{
          display: "flex",
          flexWrap: "wrap-reverse",
          gap: "1rem",
          justifyContent: "space-between",
        }}
      >
        <ButtonOpenModal handleClick={handleOpenModal} />
        <FilterUsers handleChange={handleFilterUsersByName} />
      </header>

      <UserFormModal
        open={openModal.openCreateUserModal}
        title={"Add members to team"}
        handleSubmit={handleCreateUser}
        handleClick={handleOpenModal}
      />
      <ListOfUsers
        openModal={openModal.openUpdateUserModal}
        users={usersFiltered.length ? usersFiltered : users}
        {...{
          currentId,
          handleDeleteUser,
          handleOpenModal,
          handleUserById,
          handleUpdateUser,
        }}
      />
    </section>
  );
}
