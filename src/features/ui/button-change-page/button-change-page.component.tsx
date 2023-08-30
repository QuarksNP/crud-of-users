import { Link } from "wouter";

import * as style from "./button-change-page.css";

export const ButtonChangePage: React.FC = () => {
  return (
    <Link href="/todos">
      <button type="button" className={style.button}>
        Tasks📌
      </button>
    </Link>
  );
};
