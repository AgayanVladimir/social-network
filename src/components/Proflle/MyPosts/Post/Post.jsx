import React from "react";
import style from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={style.item}>
      <img
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
        alt="AvatarForProfile"
      />
      {props.message}
      <div>
        <span>Like: {props.likeCount}</span>
      </div>
    </div>
  );
};

export default Post;
