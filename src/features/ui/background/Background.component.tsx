import { BackgroundType } from "@global-types/types";

import * as style from "./Background.css";

export const Background: React.FC<BackgroundType> = ({ active }) => {
  if (!active) return null;

  return <div className={style.background}></div>;
};
