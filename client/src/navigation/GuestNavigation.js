import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../pages/home";
import NoMatch from "../pages/nomatch";
import SignUp from "../pages/signup";
import Login from "../pages/login";

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
