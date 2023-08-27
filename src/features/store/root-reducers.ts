import { combineReducers } from "@reduxjs/toolkit";

import usersReducer from "../users/users-store/users.slice"

const rootReducer = combineReducers({
    users: usersReducer,
})

export default rootReducer