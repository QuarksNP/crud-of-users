import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users-slice"

const localStorageMiddleware = (store) => (next) => (action) => {
    next(action);
    localStorage.setItem("__users__state__", JSON.stringify(store.getState()))
}

export const usersStore = configureStore({
    reducer: {
        users: usersReducer
    },
    middleware: [localStorageMiddleware]
})
