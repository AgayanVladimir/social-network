import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import {
  getAuthMe,
  setProfileAvatar,
  setUserData,
} from "../redux/auth-reducer";
import { compose } from "redux";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthMe();
  }
  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  profileAvatar: state.auth.profileAvatar,
});

export default compose(
  connect(mapStateToProps, {
    setUserData,
    setProfileAvatar,
    getAuthMe,
  })
)(HeaderContainer);
