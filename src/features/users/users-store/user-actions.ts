import { UserId } from "@users-types/types"

import { useAppDispatch } from "./list-of-users.dispatch"

import { addNewUser, deleteUserById, updateUserById } from "./users-slice"

import { getFormData } from "../utils/getFormData"

import IMAGE_ERROR from "../../../assets/image_error.png"

import { FormEvent } from "react"

export const useUsersActions = () => {
    const dispatch = useAppDispatch()

    const handleCreateUser = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const form = event.currentTarget
        const formData = new FormData(form)

        const { name, description, role, picture, cover } = getFormData(formData)

        const verifyPicture = await fetch(picture)
            .then((response) => {
                if (response.ok) return response.url
            })
            .catch((err) => {
                console.log(err)
                return IMAGE_ERROR
            })
        const verifyCover = await fetch(cover)
            .then((response) => {
                if (response.ok) return response.url
            })
            .catch((err) => {
                console.log(err)
                return IMAGE_ERROR
            })

        dispatch(addNewUser({ name, role, picture: verifyPicture, cover: verifyCover, description }))

        form.reset()
    }

    const handleUpdateUser = async (event: FormEvent<HTMLFormElement>, id: UserId) => {
        event.preventDefault()

        const form = event.currentTarget
        const formData = new FormData(form)

        const { name, description, role, picture, cover } = getFormData(formData)

        const verifyPicture = await fetch(picture)
            .then((response) => {
                if (response.ok) return response.url
            })
            .catch((err) => {
                console.log(err)
                return IMAGE_ERROR
            })
        const verifyCover = await fetch(cover)
            .then((response) => {
                if (response.ok) return response.url
            })
            .catch((err) => {
                console.log(err)
                return IMAGE_ERROR
            })

        dispatch(updateUserById({ name, role, picture: verifyPicture, cover: verifyCover, description, id }))

        form.reset()
    }

    const handleDeleteUser = (id: UserId) => {
        dispatch(deleteUserById(id))
    }

    return { handleCreateUser, handleUpdateUser, handleDeleteUser }
}