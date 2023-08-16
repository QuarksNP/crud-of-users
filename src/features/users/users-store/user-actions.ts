import { UserId } from "@users-types/types"

import { useAppDispatch } from "./list-of-users.dispatch"

import { addNewUser, deleteUserById, updateUserById } from "./users-slice"

import { getFormData } from "../utils/getFormData"
import { FormEvent } from "react"

export const useUsersActions = () => {
    const dispatch = useAppDispatch()

    const handleCreateUser = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const form = event.currentTarget
        const formData = new FormData(form)

        const {name, role, picture} = getFormData(formData)

        dispatch(addNewUser({ name, role, picture }))

        form.reset()
    }

    const handleUpdateUser = (event: FormEvent<HTMLFormElement>, id: UserId) => {
        event.preventDefault()

        const form = event.currentTarget
        const formData = new FormData(form)

        const {name, role, picture} = getFormData(formData)

        dispatch(updateUserById({ name, role, picture, id }))

        form.reset()
    }

    const handleDeleteUser = (id: UserId) => {
        dispatch(deleteUserById(id))
    }

    return { handleCreateUser, handleUpdateUser, handleDeleteUser }
}