import React, { createRef } from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import withNavigateComponent from "../../hoc/authNavigateComponent";

import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth,
  };
};

export default compose(
  connect(mapStateToProps),
  withNavigateComponent
)(Dialogs);
