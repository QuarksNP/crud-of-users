import * as style from "./button-change-page.css";

import { useRoute } from "wouter";


import { useChangePage } from ".";

export const ButtonChangePage: React.FC = () => {
  const { location, handleChangePage } = useChangePage();

  const [, params] = useRoute("/user/:id");

  if (location === `/user/${params?.id}`) return null;

  return (
      <button type="button" className={style.button} onClick={handleChangePage}>
        <span>{location === "/todos" ? "👜Manage" : "📌Tasks"}</span>
      </button>
  );
};
