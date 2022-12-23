import React from "react";
import { connect } from "react-redux";
import { sendMessage, updateNewMessageBody } from "../../redux/dialogs-reducer";
import AddMessage from "./AddMessage";

let mapStateToProps = (state) => {
  return {
    messageText: state.dialogsPage.messageText,
  };
};

let mapDispatchToProps = {
  updateNewMessageBody,
  sendMessage,
};

const AddMessageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddMessage);

export default AddMessageContainer;
