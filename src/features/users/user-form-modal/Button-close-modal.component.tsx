import { XMarkIcon } from "@heroicons/react/24/outline";
import { ButtonModal } from "@users-types/types";

export const ButtonCloseModal: React.FC<ButtonModal> = ({ handleClick }) => {
  return (
    <button
      type="button"
      onClick={() => handleClick(false)}
    >
      <XMarkIcon width={25} />
    </button>
  );
};
