import { PlusIcon } from "@heroicons/react/24/outline";
import { ButtonModal } from "@users-types/types";

import * as style from "./ButtonOpenModal.css"

export const ButtonOpenModal: React.FC<ButtonModal> = ({ handleClick }) => {
  return (
    <button type="button" className={style.button} onClick={() => handleClick({openCreateUserModal: true})}>
      <PlusIcon width={25}/>
    </button>
  );
};
