import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NoMatch from "../pages/nomatch";
import Dashboard from "../pages/dashboard";
// arithmetic
import Arithmetic from "../pages/courses/arithmetic/Arithmetic";

export default () => {
  return (
    <Switch>
      <Route exact path="/dashboard" component={Dashboard} />
      {/* arithmetic */}
      <Route exact path="/dashboard/arithmetic" component={Arithmetic} />

      <Redirect from="/" to="/dashboard" />
      {/* 404 not found */}
      <Route component={NoMatch} />
    </Switch>
  );
};
