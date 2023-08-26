import { UserId } from "@users-types/types"

import { useAppDispatch } from "./users.dispatch"

import { addNewUser, deleteUserById, updateUserById } from "./users.slice"

import { getFormData } from "../users-utils/getFormData"

import { FormEvent } from "react"

export const useUsersActions = () => {
    const dispatch = useAppDispatch()

    const handleUser = async (event: FormEvent<HTMLFormElement>, id: UserId) => {
        event.preventDefault()

        const form = event.currentTarget
        const formData = new FormData(form)

        const { name, description, role, picture, cover } = getFormData(formData)

        if (id) {
            dispatch(updateUserById({ name, role, picture, cover, description, id }))

        } else {
            dispatch(addNewUser({ name, role, picture, cover, description }))
        }

        form.reset()
    }

    const handleDeleteUser = (id: UserId) => {
        dispatch(deleteUserById(id))
    }

    return { handleUser, handleDeleteUser }
}