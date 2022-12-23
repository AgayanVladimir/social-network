import React from "react";
import { connect } from "react-redux";
import { addPost, postTextUpdate } from "../../redux/profile-reducer";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    postText: state.profilePage.postText,
  };
};

let mapDispatchToProps = {
  addPost,
  postTextUpdate,
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
