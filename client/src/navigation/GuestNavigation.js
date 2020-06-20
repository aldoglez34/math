import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../pages/home/Home";
import NoMatch from "../pages/nomatch/NoMatch";
import SignUp from "../pages/signup/SignUp";
import Login from "../pages/login/Login";
import CourseInfoPrimaria from "../pages/courseinfo/CourseInfoPrimaria";
import CourseInfoSecundaria from "../pages/courseinfo/CourseInfoSecundaria";
import CourseInfoPrepa from "../pages/courseinfo/CourseInfoPrepa";

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/login" component={Login} />

      <Route exact path="/courses/primaria" component={CourseInfoPrimaria} />
      <Route
        exact
        path="/courses/secundaria"
        component={CourseInfoSecundaria}
      />
      <Route exact path="/courses/preparatoria" component={CourseInfoPrepa} />

      <Redirect from="/dashboard" to="/" />
      {/* 404 not found */}
      <Route component={NoMatch} />
    </Switch>
  );
};
