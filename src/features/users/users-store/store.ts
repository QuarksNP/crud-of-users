import { type Middleware, configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users-slice";

import { notification } from "../users-utils/notification";

const localStorageMiddleware: Middleware = (store) => (next) => (action) => {
    next(action);
    localStorage.setItem("__users__state__", JSON.stringify(store.getState()))
}

const asyncWithLocalStorageMiddleware: Middleware = (store) => (next) => (action) => {
    console.log(store)
    const { payload,  type} = action

    next(action)

    if(type === 'users/addNewUser'){
       notification(
        {
            successMessage: `User: (${payload.name}), successfully added`,
            errorMessage: `There was an error adding the user: (${payload.name})`
        })
    }

    if(type === 'users/updateUserById'){
        notification(
         {
             successMessage: `User: (${payload.name}), successfully updated`,
             errorMessage: `There was an error updating the user: (${payload.name})`
         })
     }

     if(type === 'users/deleteUserById'){
        notification(
         {
             successMessage: `User successfully deleted`,
             errorMessage: `There was an error deleting the user: (${payload.name})`
         })
     }
}

export const usersStore = configureStore({
    reducer: {
        users: usersReducer
    },
    middleware: [localStorageMiddleware, asyncWithLocalStorageMiddleware]
})
