import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

import { Filter } from "@global-types/types";

import * as style from "./FilterUsers.css";

export const FilterUsers: React.FC<Filter> = ({ handleChange }) => {
  return (
    <div className={style.containerFilter}>
      <label htmlFor="search">
        <MagnifyingGlassIcon width={25} />
      </label>
      <input
        id="search"
        type="search"
        placeholder="Search user by name..."
        onChange={handleChange}
      />
    </div>
  );
};
