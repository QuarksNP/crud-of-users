import { UserWithId } from "@users-types/types";
import { useState } from "react";

export const useGetUserId = () => {
  const [currentId, setCurrentId] = useState<UserWithId | null>(null);

  function handleUserById(id: UserWithId) {
    setCurrentId(id);
  }

  return { currentId, handleUserById };
};
