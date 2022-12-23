import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import authReducer from "./auth-reducer";
import dialogsReducer from "./dialogs-reducer";
import friendReducer from "./friend-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import ThunkMiddleware from "redux-thunk";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  friendPage: friendReducer,
  usersPage: usersReducer,
  auth: authReducer,
});
let store = createStore(reducers, applyMiddleware(ThunkMiddleware));
export default store;

window.store = store;
