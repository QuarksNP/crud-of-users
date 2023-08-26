import { configureStore } from "@reduxjs/toolkit";

import usersReducer from "../users/users-store/users.slice"

import { localStorageMiddleware, asyncWithLocalStorageMiddleware } from "../users";

export const store = configureStore({
    reducer: {
        users: usersReducer,
    },

    middleware: [localStorageMiddleware, asyncWithLocalStorageMiddleware]
})