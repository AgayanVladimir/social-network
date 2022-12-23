import React from "react";

import style from "./AddMessage.module.css";

const AddMessage = (props) => {
  let message = React.createRef();
  const addNewMessage = () => {
    props.sendMessage();
  };

  let updateNewMessageText = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };

  return (
    <div>
      <textarea
        ref={message}
        value={props.messageText}
        onChange={updateNewMessageText}
      ></textarea>
      <button onClick={addNewMessage}>Send a message</button>
    </div>
  );
};
export default AddMessage;
