import { usersAPI } from "../../API/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_USERS_CURRENT = "SET_USERS_CURRENT";
const SET_USERS_TOTAL_COUNT = "SET_USERS_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IN_PROGRESS = "TOGGLE_IN_PROGRESS";
let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case SET_USERS_CURRENT:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_USERS_TOTAL_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case TOGGLE_IN_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };

    default:
      return state;
  }
};
export const follow = (userId) => ({ type: FOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const unfollow = (userId) => ({
  type: UNFOLLOW,
  userId,
});
export const setUsersCurrent = (currentPage) => ({
  type: SET_USERS_CURRENT,
  currentPage,
});
export const setUsersTotalCount = (totalUsersCount) => ({
  type: SET_USERS_TOTAL_COUNT,
  totalUsersCount,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const toggleInProgress = (isFetching, userId) => ({
  type: TOGGLE_IN_PROGRESS,
  isFetching,
  userId,
});
export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    usersAPI.getUsersPage(currentPage, pageSize).then((data) => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setUsersTotalCount(data.totalCount));
    });
  };
};

export const getFollow = (userId) => {
  return (dispatch) => {
    dispatch(toggleInProgress(true, userId));
    usersAPI.postFollow(userId).then((data) => {
      if (data.resultCode === 0) {
        dispatch(follow(userId));
      }
      dispatch(toggleInProgress(false, userId));
    });
  };
};

export const getUnFollow = (userId) => {
  return (dispatch) => {
    dispatch(toggleInProgress(true, userId));
    usersAPI.deleteFollow(userId).then((data) => {
      if (data.resultCode === 0) {
        dispatch(unfollow(userId));
      }
      dispatch(toggleInProgress(false, userId));
    });
  };
};

export default usersReducer;
