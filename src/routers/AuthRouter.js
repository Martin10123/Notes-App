import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import LoginScreen from "../components/auth/LoginScreen";
import RegisterSreen from "../components/auth/RegisterSreen";

const AuthRouter = () => {
  return (
    <div className="auth__main">
      <div className="auth__box-container">
        <Switch>
          <Route path="/auth/login" component={LoginScreen} />
          <Route path="/auth/register" component={RegisterSreen} />
          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </div>
  );
};

export default AuthRouter;
