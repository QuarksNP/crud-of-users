import type { UserId } from "@users-types/types";
import { useState } from "react";

export const useGetUserId = () => {
  const [currentId, setCurrentId] = useState<UserId>('');

  function handleUserById(id: UserId) {
    setCurrentId(id);
  }

  return { currentId, handleUserById };
};
