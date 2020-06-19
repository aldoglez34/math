import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../pages/home/Home";
import NoMatch from "../pages/nomatch/NoMatch";
import SignUp from "../pages/signup/SignUp";
import Login from "../pages/login/Login";

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/login" component={Login} />

      <Redirect from="/dashboard" to="/" />
      {/* 404 not found */}
      <Route component={NoMatch} />
    </Switch>
  );
};
