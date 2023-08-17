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

        const {name, description, role, picture, cover} = getFormData(formData)

        console.log(picture)

        dispatch(addNewUser({ name, role, picture, cover, description }))

        form.reset()
    }

    const handleUpdateUser = (event: FormEvent<HTMLFormElement>, id: UserId) => {
        event.preventDefault()

        const form = event.currentTarget
        const formData = new FormData(form)

        const {name, description, role, picture, cover} = getFormData(formData)

        dispatch(updateUserById({ name, role, picture, cover, description, id }))

        form.reset()
    }

    const handleDeleteUser = (id: UserId) => {
        dispatch(deleteUserById(id))
    }

    return { handleCreateUser, handleUpdateUser, handleDeleteUser }
}