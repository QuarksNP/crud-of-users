import { ProfileItem } from "@users-types/types";
import * as style from "./profile.component.css"

export const Profile: React.FC<ProfileItem> = ({ picture, name, children }) => {

  return (
    <div className={style.descContainer}>
      <picture className={style.picture}>
        <img src={picture} />
      </picture>
      <div className={style.basicDesc}>
        <span className={style.name}>{name}</span>
        {children}
      </div>
    </div>
  );
};
