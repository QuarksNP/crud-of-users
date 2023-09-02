import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction, User, UserId, UserWithId } from "@global-types/types";

const initialState: UserWithId[] = (() => {
    const persistedState = localStorage.getItem("__users__state__");
    if (persistedState) {
        const usersStorage = JSON.parse(persistedState).users
        return usersStorage
    }

    return []
})();

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addNewUser: (state, action: PayloadAction<User>) => {
            const id = crypto.randomUUID()

            return [...state, { id, ...action.payload }]
        },

        updateUserById: (state, action: PayloadAction<UserWithId>) => {
            const currentUser = action.payload
            return state.map(user => user.id === currentUser.id ? currentUser : user)
        },

        deleteUserById: (state, action: PayloadAction<UserId>) => {
            const id = action.payload
            return state.filter(user => user.id !== id)
        }
    },
})

export default usersSlice.reducer

export const { addNewUser, updateUserById, deleteUserById } = usersSlice.actions