import React, { createRef } from "react";

import AddMessageContainer from "./AddMessage/AddMessageContainer";
import Dialog from "./Dialog/Dialog";
import style from "./Dialogs.module.css";
import Message from "./Message/Message";
const Dialogs = (props) => {
  let dialogElements = props.dialogsPage.dialogData.map((dialog) => (
    <Dialog name={dialog.name} key={dialog.id} id={dialog.id} />
  ));

  let messagesElements = props.dialogsPage.messages.map((message) => (
    <Message message={message.message} key={message.id} />
  ));

  return (
    <div className={style.dialogsBody}>
      <div className={style.dialogs}>
        <div className={style.dialog}>{dialogElements}</div>
        <div className={style.dialogMessages}>{messagesElements}</div>
      </div>

      <AddMessageContainer />
    </div>
  );
};

export default Dialogs;
