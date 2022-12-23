import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import style from "./ProfileInfo.module.css";
import profileWithoutPhtoto from "../../common/Images/userNoPhoto.jpg";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <>
      <div className={style.imageBox}>
        <img
          src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
          alt="mountain"
        ></img>
      </div>
      <div className={style.descriptionBlock}>
        <img
          src={
            !props.profile.photos.large
              ? profileWithoutPhtoto
              : props.profile.photos.large
          }
          alt=""
        />
        <div>
          <ProfileStatus
            userStatus={props.userStatus}
            updateStatus={props.updateStatus}
          />
        </div>
      </div>
    </>
  );
};

export default ProfileInfo;
