import {
  ButtonOpenModal,
  UserFormModal,
  ListOfUsers,
  useAppSelector,
  useUsersActions,
  useOpenModal,
  useGetUserId,
} from "../features/users";

import { Background } from "../features/ui";

export default function UsersPage() {
  const { openModal, handleOpenModal } = useOpenModal();
  const { currentId, handleUserById } = useGetUserId();

  const users = useAppSelector((state) => state.users);

  const { handleDeleteUser, handleUpdateUser, handleCreateUser } =
    useUsersActions();

  return (
    <section>
      <Background active={openModal.openCreateUserModal} />
      <ButtonOpenModal handleClick={handleOpenModal} />
      <UserFormModal
        open={openModal.openCreateUserModal}
        title={"Add members to team"}
        handleSubmit={handleCreateUser}
        handleClick={handleOpenModal}
      />
      <ListOfUsers
        openModal={openModal.openUpdateUserModal}
        {...{
          users,
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
