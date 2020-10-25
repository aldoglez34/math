import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NoMatch from "../pages/nomatch/NoMatch";
import Dashboard from "../pages/dashboard";
import Course from "../course";
import Exam from "../exam";
import Results from "../results";
import Freestyle from "../freestyle";
import Messages from "../pages/messages";
import CourseInfo from "../pages/courseinfo/CourseInfo";

export default () => {
  return (
    <Switch>
      {/* ================= PUBLIC ROUTES ================= */}
      {/* student dashboard */}
      <Route exact path="/dashboard" component={Dashboard} />

      {/* courses info */}
      <Route
        exact
        path="/courses/:course"
        render={(props) => <CourseInfo routeProps={props} />}
      />

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
      <Route exact path="/course/freestyle" component={Freestyle} />

      <Redirect from="/" to="/dashboard" />

      {/* 404 not found */}
      <Route component={NoMatch} />
    </Switch>
  );
};
