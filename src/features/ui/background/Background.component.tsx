import { UsersPageBackground } from "@global/types";

import * as style from "./Background.css";

export const Background: React.FC<UsersPageBackground> = ({ active }) => {
  if (!active) return;

  return <div className={style.background}></div>;
};
