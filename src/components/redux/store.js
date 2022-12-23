import dialogsReducer from "./dialogs-reducer";
import friendReducer from "./friend-reducer";
import profileReducer from "./profile-reducer";

const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";
let store = {
  _state: {
    dialogsPage: {
      dialogData: [
        { id: "1", name: "Vladimir" },
        { id: "2", name: "Dima" },
        { id: "3", name: "Vikrot" },
        { id: "4", name: "Sveta" },
        { id: "5", name: "Kakadu" },
      ],
      messages: [
        { id: "1", message: "Hi" },
        { id: "2", message: "How are you?" },
        { id: "3", message: "Yo" },
        { id: "4", message: "Yo" },
        { id: "5", message: "Yo" },
      ],
      messageText: "",
    },
    profilePage: {
      posts: [
        { id: "1", message: "Hi, how are you?", likeCount: "15" },
        { id: "2", message: "It's my first post!", likeCount: "20" },
      ],
      postText: "",
    },
    friendPage: {
      friends: [
        {
          url: "https://earthlette.com.au/wp-content/uploads/2016/10/Jem-final-profile-pic-circle2.png",
          friendName: "Anna",
        },
        {
          url: "https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png",
          friendName: "Alex",
        },
        {
          url: "https://www.kindpng.com/picc/m/404-4042717_face-profile-png-circle-profile-picture-hd-png.png",
          friendName: "Zyzenya",
        },
        {
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsTON9Tf7Mn6gW50QBvM0Q594F2NwGA-F35A&usqp=CAU",
          friendName: "Kakadu",
        },
      ],
    },
  },
  getState() {
    return this._state;
  },

  _callSubscriber() {},
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.friendPage = friendReducer(this._state.friendPage, action);
    this._callSubscriber(this._state);
  },
};

export default store;
