import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import CourseInfoPrimaria from "../pages/courseinfo/CourseInfoPrimaria";
import CourseInfoSecundaria from "../pages/courseinfo/CourseInfoSecundaria";
import CourseInfoPrepa from "../pages/courseinfo/CourseInfoPrepa";
import NoMatch from "../pages/nomatch/NoMatch";
import Dashboard from "../pages/dashboard";
import Course from "../course";
import Exam from "../exam";

export default () => {
  return (
    <Switch>
      {/* student dashboard */}
      <Route exact path="/dashboard" component={Dashboard} />

      {/* courses info */}
      <Route exact path="/courses/primaria" component={CourseInfoPrimaria} />
      <Route
        exact
        path="/courses/secundaria"
        component={CourseInfoSecundaria}
      />
      <Route exact path="/courses/preparatoria" component={CourseInfoPrepa} />

      {/* courses main */}
      <Route exact path="/course" component={Course} />

      {/* exam */}
      <Route exact path="/course/exam" component={Exam} />

      <Redirect from="/" to="/dashboard" />

      {/* 404 not found */}
      <Route component={NoMatch} />
    </Switch>
  );
};
