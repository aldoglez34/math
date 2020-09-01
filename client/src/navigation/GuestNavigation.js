import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import LandingPage from "../pages/landingpage";
import NoMatch from "../pages/nomatch/NoMatch";
import SignUp from "../pages/signup/SignUp";
import Login from "../pages/login/Login";
import CourseInfoPrimaria from "../pages/courseinfo/CourseInfoPrimaria";
import CourseInfoSecundaria from "../pages/courseinfo/CourseInfoSecundaria";
import CourseInfoPrepa from "../pages/courseinfo/CourseInfoPrepa";

import AdminLogin from "../admin/login/AdminLogin";
import AdminCourses from "../admin/courses/courses/AdminCourses";
import AdminCourseDetail from "../admin/courses/coursedetail/AdminCourseDetail";
import AdminNewCourse from "../admin/courses/newcourse/AdminNewCourse";

import AdminStudents from "../admin/students/students/AdminStudents";
import AdminStudentDetails from "../admin/students/studentdetail/AdminStudentDetails";

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

      {/* admin ======================== */}
      <Route exact path="/admin" component={AdminLogin} />

      <Route exact path="/admin/courses" component={AdminCourses} />
      <Route
        exact
        path="/admin/courses/edit/:courseId"
        render={(props) => <AdminCourseDetail routeProps={props} />}
      />
      <Route exact path="/admin/courses/new" component={AdminNewCourse} />

      <Route exact path="/admin/students" component={AdminStudents} />
      <Route
        exact
        path="/admin/students/:studentId"
        render={(props) => <AdminStudentDetails routeProps={props} />}
      />

      {/* 404 not found */}
      <Route component={NoMatch} />
    </Switch>
  );
};
