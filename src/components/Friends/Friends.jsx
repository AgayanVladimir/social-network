import React from "react";
import { useSelector } from "react-redux";
import Friend from "./Friend/Friend";
import style from "./Friends.module.css";
const Friends = (props) => {
  let friends = useSelector((state) => state.friendPage.friends);
  let newFriends = friends.map((friend) => {
    return (
      <Friend url={friend.url} key={friend.id} friendName={friend.friendName} />
    );
  });
  return <div className={style.friendsBody}>{newFriends} </div>;
};

export default Friends;
