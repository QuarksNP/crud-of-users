import { PlusIcon } from "@heroicons/react/24/outline";
import { ButtonModal } from "@users-types/types";

export const ButtonOpenModal: React.FC<ButtonModal> = ({ handleClick }) => {
  return (
    <button type="button" onClick={() => handleClick({openCreateUserModal: true})}>
      <PlusIcon width={25}/>
    </button>
  );
};
