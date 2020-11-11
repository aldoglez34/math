import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import LandingPage from "../pages/landingpage";
import NoMatch from "../pages/nomatch/NoMatch";
import SignUp from "../pages/signup/SignUp";
import Login from "../pages/login/Login";
import CourseInfo from "../pages/courseinfo/CourseInfo";
import AdminLogin from "../admin/login/AdminLogin";

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/login" component={Login} />

      <Route
        exact
        path="/courses/:course"
        render={(props) => <CourseInfo routeProps={props} />}
      />

      <Redirect from="/dashboard" to="/" />
      <Redirect from="/course" to="/" />

      {/* ================= ADMIN ================= */}
      <Route exact path="/admin" component={AdminLogin} />

      <Redirect from="/admin/*" to="/admin" />

      {/* 404 not found */}
      <Route component={NoMatch} />
    </Switch>
  );
};
