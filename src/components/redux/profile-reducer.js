import { type } from "@testing-library/user-event/dist/type";
import { profileAPI } from "../../API/api";

const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const GET_USER_STATUS = "GET_USER_STATUS";
const { v4: uuidv4 } = require("uuid");
let initialState = {
  posts: [
    { id: "1", message: "Hi, how are you?", likeCount: "15" },
    { id: "2", message: "It's my first post!", likeCount: "20" },
  ],
  postText: "",
  profile: null,
  userStatus: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let obj = {
        id: uuidv4(),
        message: state.postText,
        likeCount: 1,
      };

      return { ...state, posts: [...state.posts, obj], postText: "" };
    }
    case UPDATE_POST_TEXT: {
      return { ...state, postText: action.newPostText };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    case GET_USER_STATUS: {
      return { ...state, userStatus: action.userStatus };
    }

    default:
      return state;
  }
};

export const addPost = () => ({ type: ADD_POST });
export const postTextUpdate = (postText) => ({
  type: UPDATE_POST_TEXT,
  newPostText: postText,
});
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const setStatus = (userStatus) => ({
  type: GET_USER_STATUS,
  userStatus,
});
export const getUserProfile = (userId) => {
  return (dispatch) => {
    profileAPI.getUserProfile(userId).then((data) => {
      dispatch(setUserProfile(data));
    });
  };
};
export const getUserStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getUserStatus(userId).then((response) => {
      dispatch(setStatus(response.data));
    });
  };
};

export const updateStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    });
  };
};

export default profileReducer;
