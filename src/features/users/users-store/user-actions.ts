import { UserId } from "@users-types/types"

import { useAppDispatch } from "./list-of-users.dispatch"

import { addNewUser, deleteUserById } from "./users-slice"
import { FormEvent } from "react"

export const useUsersActions = () => {
    const dispatch = useAppDispatch()

    const handleCreateUser = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const form = event.currentTarget
        const formData = new FormData(form)

        const name = formData.get('name') as string
        const role = formData.get('role') as string
        const picture = formData.get('picture') as string

        dispatch(addNewUser({ name, role, picture }))
    }

    const handleRemoveUser = (id: UserId) => {
        dispatch(deleteUserById(id))
    }

    return { handleCreateUser, handleRemoveUser }
}