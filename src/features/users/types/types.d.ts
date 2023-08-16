import { FormEvent } from "react";
import { usersStore } from "..";

type Children = React.ReactNode

export type Modal = {
    openCreateUserModal?: boolean, 
    openUpdateUserModal?: boolean
}

export type { PayloadAction } from "@reduxjs/toolkit";

export interface User {
    name: string;
    role: string;
    picture: string;
}

export type UserId = string

export interface ButtonModal {
    handleClick: (props: Modal) => void,
}


export interface UserWithId extends User {
    id: UserId;
}

export interface Users {
    users: UserWithId[]
}

export interface UserModal {
    open?: boolean;
    title: string;
    handleClick: (props: Modal) => void,
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void
}

export type UsersMap = Users & {
    handleDeleteUser: (id: UserId) => void,
    handleUpdateUser: (event: FormEvent<HTMLFormElement>, id: UserId) => void
    handleUserById: (id: UserId) => void,
    handleOpenModal: (id: ModalId) => void
    openModal?: boolean,
    currentId: string
}

export interface ProfileItem extends Omit<User, 'role'> {
    children: Children
}

export interface handleUserById {
    handleDelete: (id: UserId) => void
    handleGetId: (id: UserId) => void
    user: UserWithId
    children: Children
}

export interface UpdateUserItemById {
    user: UserWithId,
    handleUpdateUser: (event: FormEvent<HTMLFormElement>, id: UserId) => void
}

export interface HandleUserItem {
    user: UserWithId,
    children: Children,
    handleDelete: (id: UserId) => void
    handleUserById: (id: UserId) => void,
    handleOpenModal: (id: ModalId) => void


}

export type RootState = ReturnType<typeof usersStore.getState>
export type AppDispatch = typeof usersStore.dispatch