import { usersStore } from "..";

export type { PayloadAction } from "@reduxjs/toolkit";

type Children = React.ReactNode

export interface User {
    name: string;
    role: string;
    picture: string;
}

export type UserId = string

export interface UserWithId extends User {
    id: UserId;
}

export interface Users {
    users: UserWithId[]
}

export interface ProfileItem extends Omit<User, 'role'> {
    children: Children
}

export interface HandleUserItem extends UserWithId {
    handleRemove: (id: UserId) => void
    children: Children
}

export type RootState = ReturnType<typeof usersStore.getState>
export type AppDispatch = typeof usersStore.dispatch