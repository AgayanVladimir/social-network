import React from "react";
import MyPostsContainer from "./MyPosts/MyPostContainer";
import style from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Profile = (props) => {
  return (
    <div>
      <ProfileInfo
        profile={props.profile}
        userStatus={props.userStatus}
        updateStatus={props.updateStatus}
      />
      <MyPostsContainer />
    </div>
  );
};
export default Profile;
