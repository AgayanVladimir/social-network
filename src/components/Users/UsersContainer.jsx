import React from "react";
import { connect } from "react-redux";
import {
  setUsersCurrent,
  toggleInProgress,
  getUsers,
  getFollow,
  getUnFollow,
} from "../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import withNavigateComponent from "../../hoc/authNavigateComponent";
import { compose } from "redux";

class UsersComponent extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }
  changeCurrentPage = (page) => {
    this.props.setUsersCurrent(page);
    this.props.getUsers(page, this.props.pageSize);
  };

  unfollow = (userId) => {
    this.props.getUnFollow(userId);
  };

  follow = (userId) => {
    this.props.getFollow(userId);
  };
  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            users={this.props.users}
            changeCurrentPage={this.changeCurrentPage}
            unfollow={this.unfollow}
            follow={this.follow}
            followingInProgress={this.props.followingInProgress}
            isAuth={this.props.isAuth}
          />
        )}
      </>
    );
  }
}
const authNavigateComponent = withNavigateComponent(UsersComponent);

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
    isAuth: state.auth.isAuth,
  };
};
let mapDispatchToProps = {
  getFollow,
  getUnFollow,
  setUsersCurrent,
  toggleInProgress,
  getUsers,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withNavigateComponent
)(UsersComponent);
