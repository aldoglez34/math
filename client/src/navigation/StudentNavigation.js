import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NoMatch from "../pages/nomatch/NoMatch";
import Dashboard from "../pages/dashboard/Dashboard";
// arithmetic
import Arithmetic from "../courses/arithmetic/Arithmetic";
import ArithmeticExam from "../courses/arithmetic/exams/ArithmeticExam";
// algebra
import Algebra from "../courses/algebra/Algebra";
// trigonometry
import Trigonometry from "../courses/trigonometry/Trigonometry";

export default () => {
  return (
    <Switch>
      <Route exact path="/dashboard" component={Dashboard} />
      {/* arithmetic */}
      <Route exact path="/dashboard/arithmetic" component={Arithmetic} />
      <Route
        exact
        path="/dashboard/arithmetic/exam/:code"
        render={(props) => <ArithmeticExam routeProps={props} />}
      />
      {/* algebra */}
      <Route exact path="/dashboard/algebra" component={Algebra} />
      {/* trigonometry */}
      <Route exact path="/dashboard/trigonometry" component={Trigonometry} />

      <Redirect from="/" to="/dashboard" />
      {/* 404 not found */}
      <Route component={NoMatch} />
    </Switch>
  );
};
