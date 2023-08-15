import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction, User, UserId, UserWithId } from "@users-types/types";

const initialState: UserWithId[] = (() => {
    const persistedState = localStorage.getItem("__users__state__");
    if(persistedState) {
        return JSON.parse(persistedState).users
    }
})();

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addNewUser: (state, action: PayloadAction<User>) => {
            const id = crypto.randomUUID()
            return [...state, { id, ...action.payload }]
        },
        deleteUserById: (state, action: PayloadAction<UserId>) => {
            const id = action.payload
            return state.filter(users => users.id !== id)
        }
    },
})

export default usersSlice.reducer

export const { addNewUser, deleteUserById } = usersSlice.actions