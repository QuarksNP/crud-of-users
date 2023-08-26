import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./root-reducers";

import { localStorageMiddleware, asyncWithLocalStorageMiddleware } from "../users";

export const store = configureStore({
    reducer: rootReducer,
    middleware: [localStorageMiddleware, asyncWithLocalStorageMiddleware]
})