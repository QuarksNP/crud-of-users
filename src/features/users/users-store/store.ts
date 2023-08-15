import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users-slice"

const indexedDBMiddleware = (store) => (next) => (action) => {
    next(action)
}

export const usersStore = configureStore({
    reducer: {
        users: usersReducer
    },

    middleware: [indexedDBMiddleware]
})
