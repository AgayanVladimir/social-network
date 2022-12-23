import React, { createRef } from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.posts.map((post) => (
    <Post message={post.message} key={post.id} likeCount={post.likeCount} />
  ));
  let newPost = React.createRef();
  let onAddPost = () => {
    props.addPost();
  };

  let onPostTextUpdate = () => {
    let postText = newPost.current.value;

    props.postTextUpdate(postText);
  };

  return (
    <div className={style.postsBlock}>
      <h3> My posts</h3>
      <textarea
        ref={newPost}
        value={props.postText}
        onChange={onPostTextUpdate}
      ></textarea>
      <button onClick={onAddPost}>Add post</button>
      <div className={style.newPost}>New post</div>
      {postsElements}
    </div>
  );
};

export default MyPosts;
