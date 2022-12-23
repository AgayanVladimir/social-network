import React from "react";
import style from "./Friend.module.css";

const Friend = (props) => {
  return (
    <div className={style.friendsBlock}>
      <div className={style.profilePhotoBox}>
        <img
          className={style.profilePhoto}
          src={props.url}
          alt="ProfilePhoto"
        />
      </div>
      <div className={style.friendName}>{props.friendName}</div>
    </div>
  );
};

export default Friend;
