import { ChangeEvent, FormEvent } from "react";
import { usersStore } from "../users";

type Children = React.ReactNode

export type { PayloadAction } from "@reduxjs/toolkit";


export type BackgroundType = {
    active: boolean
}

export type UserId = string


export interface User {
    name: string;
    description: string;
    role: string;
    picture?: string;
    cover?: string;
}

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
    children: Children;
    handleCloseModal: (props: Modal) => void,
}

export type UsersMap = Users & {
    handleDeleteUser: (id: UserId) => void,
    handleUpdateUser: (event: FormEvent<HTMLFormElement>, id: UserId) => void
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
    handleDelete: (id: UserId) => void
}

export interface Filter {
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export type RootState = ReturnType<typeof usersStore.getState>
export type AppDispatch = typeof usersStore.dispatch