import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import NoMatch from "../pages/nomatch";

export default () => {
  return (
    <Switch>
      <Route exact path="/dashboard" component={Dashboard} />

      <Redirect from="/" to="/dashboard" />
      {/* 404 not found */}
      <Route component={NoMatch} />
    </Switch>
  );
};
