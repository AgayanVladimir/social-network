import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  getUserProfile,
  getUserStatus,
  setUserProfile,
  updateStatus,
} from "../redux/profile-reducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { compose } from "redux";
import Preloader from "../common/Preloader/Preloader";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      let userId = this.props.router.params.userId;
      if (!userId) {
        const authId = this.props.userId;
        userId = authId;
      }
      this.props.getUserProfile(userId);
      this.props.getUserStatus(userId);
    }, 200);
  }

  render() {
    return <Profile {...this.props} />;
  }
}
let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  userId: state.auth.userId,
  userStatus: state.profilePage.userStatus,
  isAuth: state.auth.isAuth,
});

export default compose(
  connect(mapStateToProps, {
    setUserProfile,
    getUserProfile,
    getUserStatus,
    updateStatus,
  }),
  withRouter
)(ProfileContainer);
