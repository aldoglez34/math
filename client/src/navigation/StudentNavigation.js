import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import CourseInfoPrimaria from "../pages/courseinfo/CourseInfoPrimaria";
import CourseInfoSecundaria from "../pages/courseinfo/CourseInfoSecundaria";
import CourseInfoPrepa from "../pages/courseinfo/CourseInfoPrepa";
import NoMatch from "../pages/nomatch/NoMatch";
import Dashboard from "../pages/dashboard";
import Course from "../course";
import Exam from "../exam";
import Results from "../results";
import Freestyle from "../freestyle";
import Messages from "../pages/messages";

export default () => {
  return (
    <Switch>
      {/* ================= PUBLIC ROUTES ================= */}
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

      {/* ================= STUDENT ROUTES ================= */}
      {/* messages */}
      <Route exact path="/messages" component={Messages} />

      {/* courses main */}
      <Route
        exact
        path="/course"
        render={(props) => <Course routeProps={props} />}
      />

      {/* exam */}
      <Route exact path="/course/exam" component={Exam} />
      <Route exact path="/course/exam/results" component={Results} />

      {/* freestyle */}
      <Route exact path="/course/exam/freestyle" component={Freestyle} />

      <Redirect from="/" to="/dashboard" />

      {/* 404 not found */}
      <Route component={NoMatch} />
    </Switch>
  );
};
