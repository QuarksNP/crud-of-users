import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction, User, UserId, UserWithId } from "@users-types/types";

const initialState: UserWithId[] = [
    {
        id: '1',
        name: 'Alberto',
        role: 'Admin',
        picture: 'url'
    }
]

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