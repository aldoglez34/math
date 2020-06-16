import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NoMatch from "../pages/nomatch";
import Dashboard from "../pages/dashboard";
import Course from "../pages/course";

export default () => {
  return (
    <Switch>
      <Route exact path="/dashboard" component={Dashboard} />
      <Route
        exact
        path="/course/:course"
        render={(props) => <Course routeProps={props} />}
      />

      <Redirect from="/" to="/dashboard" />
      {/* 404 not found */}
      <Route component={NoMatch} />
    </Switch>
  );
};
