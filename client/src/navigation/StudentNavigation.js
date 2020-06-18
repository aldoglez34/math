import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NoMatch from "../pages/nomatch";
import Dashboard from "../pages/dashboard";
// arithmetic
import Arithmetic from "../courses/arithmetic/Arithmetic";
import Exam from "../courses/arithmetic/exam/Exam";

export default () => {
  return (
    <Switch>
      <Route exact path="/dashboard" component={Dashboard} />
      {/* arithmetic */}
      <Route exact path="/dashboard/arithmetic" component={Arithmetic} />
      <Route
        exact
        path="/dashboard/arithmetic/exam/:exam"
        render={(props) => <Exam routeProps={props} />}
      />

      <Redirect from="/" to="/dashboard" />
      {/* 404 not found */}
      <Route component={NoMatch} />
    </Switch>
  );
};
