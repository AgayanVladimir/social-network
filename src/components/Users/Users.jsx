import React from "react";
import style from "./Users.module.css";
import userNoPhoto from "../common/Images/userNoPhoto.jpg";
import { Navigate, NavLink } from "react-router-dom";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <button>Show more</button>
      {pages.map((page) => {
        return (
          <span
            className={props.currentPage === page ? style.active : style.count}
            onClick={() => {
              props.changeCurrentPage(page);
            }}
          >
            {page}
          </span>
        );
      })}
      {props.users.map((user) => {
        return (
          <div key={user.id}>
            <span>
              <div>
                <NavLink to={`/profile/${user.id}`}>
                  <img
                    className={style.avatarPhoto}
                    src={!user.photos.small ? userNoPhoto : user.photos.small}
                    alt="ProfilePhoto"
                  />
                </NavLink>
              </div>
              <div>
                {user.followed ? (
                  <button
                    disabled={props.followingInProgress.some(
                      (userId) => userId === user.id
                    )}
                    onClick={() => {
                      props.unfollow(user.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    disabled={props.followingInProgress.some(
                      (userId) => userId === user.id
                    )}
                    onClick={() => {
                      props.follow(user.id);
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </span>
            <span>
              <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
              </span>
              <span>
                <div>{"user.location.country"}</div>
                <div>{"user.location.city"}</div>
              </span>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
