const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";
const { v4: uuidv4 } = require("uuid");

let initialState = {
  dialogData: [
    { id: "1", name: "Vladimir" },
    { id: "2", name: "Dima" },
    { id: "3", name: "Viktor" },
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
};
const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let messageObj = {
        id: uuidv4(),
        message: state.messageText,
      };
      return {
        ...state,
        messages: [...state.messages, messageObj],
        messageText: "",
      };
    }
    case UPDATE_MESSAGE_TEXT: {
      return { ...state, messageText: action.newMessageText };
    }
    default:
      return state;
  }
};
export const sendMessage = () => ({ type: ADD_MESSAGE });

export const updateNewMessageBody = (newMessageText) => ({
  type: UPDATE_MESSAGE_TEXT,
  newMessageText: newMessageText,
});
export default dialogsReducer;
