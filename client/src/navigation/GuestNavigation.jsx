import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AdminLogin from "../admin/login/AdminLogin";
import {
  CourseInfoPage,
  LandingPage,
  LoginPage,
  NoMatchPage,
  SignUpPage,
} from "../pages";

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/signup" component={SignUpPage} />
      <Route exact path="/login" component={LoginPage} />

      <Route
        exact
        path="/courses/:course"
        render={(props) => <CourseInfoPage routeProps={props} />}
      />

      <Redirect from="/dashboard" to="/" />
      <Redirect from="/course" to="/" />

      {/* ================= ADMIN ================= */}
      <Route exact path="/admin" component={AdminLogin} />

      <Redirect from="/admin/*" to="/admin" />

      {/* 404 not found */}
      <Route component={NoMatchPage} />
    </Switch>
  );
};
