import { UserWithId } from "@users-types/types";
import { type ChangeEvent, useState } from "react";

export const useFilterUsersByName = (currentUsers: UserWithId[]) => {
    const [usersFiltered, setUsersFilters] = useState<UserWithId[]>([])

    function handleFilterUsersByName(
        event: ChangeEvent<HTMLInputElement>,
    ) {

        const value = event.currentTarget.value
        const filterUser = value.toLocaleLowerCase()

        const usersFilter = [...currentUsers].filter(user => {
            const username = user.name.toLocaleLowerCase()
            return username.startsWith(filterUser)
        })

        setUsersFilters(usersFilter)

        if(value.length === 0) {
            setUsersFilters([])
        }
    }

    return { usersFiltered, handleFilterUsersByName }
}