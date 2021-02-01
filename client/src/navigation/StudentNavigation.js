import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import {
  CourseInfoPage,
  DashboardPage,
  MessagesPage,
  NoMatchPage,
  ResultsPage,
  CoursePage,
  FreestylePage,
} from "../pages";
import Exam from "../exam";

export default () => {
  return (
    <Switch>
      {/* ================= PUBLIC ROUTES ================= */}
      {/* student dashboard */}
      <Route exact path="/dashboard" component={DashboardPage} />

      {/* courses info */}
      <Route
        exact
        path="/courses/:course"
        render={(props) => <CourseInfoPage routeProps={props} />}
      />

      {/* ================= STUDENT ROUTES ================= */}
      {/* messages */}
      <Route exact path="/messages" component={MessagesPage} />

      {/* courses main */}
      <Route
        exact
        path="/course"
        render={(props) => <CoursePage routeProps={props} />}
      />

      {/* exam */}
      <Route exact path="/course/exam" component={Exam} />
      <Route exact path="/course/exam/results" component={ResultsPage} />

      {/* freestyle */}
      <Route exact path="/course/freestyle" component={FreestylePage} />

      <Redirect from="/" to="/dashboard" />

      {/* 404 not found */}
      <Route component={NoMatchPage} />
    </Switch>
  );
};
