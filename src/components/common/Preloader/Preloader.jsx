import React from "react";
import preloader from "../Images/Spinner-preloader.gif";
import style from "./Preloader.module.css";

const Preloader = () => {
  return (
    <div className={style.preloaderContainer}>
      <img className={style.preloader} src={preloader} alt="" />
    </div>
  );
};

export default Preloader;
