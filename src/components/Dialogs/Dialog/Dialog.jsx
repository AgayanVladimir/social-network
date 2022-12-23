import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Dialog.module.css";
const Dialog = (props) => {
  return (
    <NavLink
      to={`dialogs/${props.id}`}
      className={(dialogData) =>
        dialogData.isActive ? style.active : style.dialogItem
      }
    >
      {props.name}
    </NavLink>
  );
};

export default Dialog;
