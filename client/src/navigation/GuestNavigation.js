import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import LandingPage from "../pages/landingpage";
import NoMatch from "../pages/nomatch/NoMatch";
import SignUp from "../pages/signup/SignUp";
import Login from "../pages/login/Login";
import CourseInfoPrimaria from "../pages/courseinfo/CourseInfoPrimaria";
import CourseInfoSecundaria from "../pages/courseinfo/CourseInfoSecundaria";
import CourseInfoPrepa from "../pages/courseinfo/CourseInfoPrepa";

import TeacherLogin from "../teacher/login/TeacherLogin";
import TeacherCoursesMain from "../teacher/courses/main/TeacherCoursesMain";
import NewCourse from "../teacher/courses/newcourse/NewCourse";

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
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
      <Redirect from="/course" to="/" />

      {/* admin */}
      <Route exact path="/admin" component={TeacherLogin} />

      <Route exact path="/admin/courses" component={TeacherCoursesMain} />
      <Route exact path="/admin/courses/new-course" component={NewCourse} />

      {/* 404 not found */}
      <Route component={NoMatch} />
    </Switch>
  );
};
