import type { UserId, UserWithId } from "@global-types/types";

export function getUserById(id: UserId | undefined, users: UserWithId[]) {
    return users.find(user => user.id === id)
}