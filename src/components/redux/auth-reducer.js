import { authAPI, profileAPI } from "../../API/api";

const SET_USER_DATA = "SET_USER_DATA";
const SET_PROFILE_AVATAR = "SET_PROFILE_AVATAR";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  profileAvatar: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    case SET_PROFILE_AVATAR:
      return {
        ...state,
        profileAvatar: action.avatarUrl,
      };

    default:
      return state;
  }
};

export const setUserData = (userId, email, login) => ({
  type: SET_USER_DATA,
  data: { userId, email, login },
});
export const setProfileAvatar = (avatarUrl) => ({
  type: SET_PROFILE_AVATAR,
  avatarUrl,
});

export const getAuthMe = () => {
  return (dispatch) => {
    authAPI.getAuthMe().then((data) => {
      if (data.resultCode === 0) {
        let userData = data.data;
        dispatch(setUserData(userData.id, userData.email, userData.login));
        profileAPI.getProfileAvatar(userData.id).then((photos) => {
          dispatch(setProfileAvatar(photos.small));
        });
      }
    });
  };
};

export default authReducer;
