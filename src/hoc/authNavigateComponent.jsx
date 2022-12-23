import React from "react";
import { Navigate } from "react-router-dom";
const withNavigateComponent = (Component) => {
  const NavigateComponent = (props) => {
    if (!props.isAuth) return <Navigate to={"/login"} />;
    return <Component {...props} />;
  };
  return NavigateComponent;
};

export default withNavigateComponent;
