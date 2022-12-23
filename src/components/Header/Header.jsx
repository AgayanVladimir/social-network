import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Header.module.css";
import userNoPhoto from "../common/Images/userNoPhoto.jpg";
const Header = (props) => {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <img
          src="https://seeklogo.com/images/F/fruit-company-logo-90913CF069-seeklogo.com.png"
          alt="logo"
        />
      </div>
      <div className={style.loginBlock}>
        {!props.isAuth ? (
          <NavLink className={style.loginButton} to={"/login"}>
            Login
          </NavLink>
        ) : (
          <div className={style.authBlock}>
            <div className={style.profileAvatar}>
              {!props.profileAvatar ? (
                <img src={userNoPhoto} alt="NoPhoto" />
              ) : (
                <img src={props.profileAvatar} alt="profileAvatar" />
              )}
            </div>
            <NavLink to={"/login"} className={style.loginButton}>
              {props.login}
            </NavLink>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
