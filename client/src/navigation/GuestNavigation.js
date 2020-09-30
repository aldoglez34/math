import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import LandingPage from "../pages/landingpage";
import NoMatch from "../pages/nomatch/NoMatch";
import SignUp from "../pages/signup/SignUp";
import Login from "../pages/login/Login";
import CourseInfoPrimaria from "../pages/courseinfo/CourseInfoPrimaria";
import CourseInfoSecundaria from "../pages/courseinfo/CourseInfoSecundaria";
import CourseInfoPrepa from "../pages/courseinfo/CourseInfoPrepa";
//
import AdminLogin from "../admin/login/AdminLogin";
import AdminCourses from "../admin/courses/courses/AdminCourses";
import AdminCourseDetail from "../admin/courses/coursedetail/AdminCourseDetail";
import AdminNewCourse from "../admin/courses/newcourse/AdminNewCourse";
import AdminTopic from "../admin/courses/topics/AdminTopic";
import AdminNewTopic from "../admin/courses/newtopic/AdminNewTopic";
import AdminNewExam from "../admin/courses/newexam/AdminNewExam";
import AdminStudents from "../admin/students/students/AdminStudents";
import AdminStudentDetails from "../admin/students/studentdetail/AdminStudentDetails";
import AdminAssignCourse from "../admin/students/assign/AdminAssignCourse";
import AdminStudentHistory from "../admin/students/history/AdminStudentHistory";
import AdminMessages from "../admin/messages/AdminMessages";

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
      {/* courses */}
      <Route exact path="/admin/courses" component={AdminCourses} />
      <Route
        exact
        path="/admin/courses/edit/:courseId"
        render={(props) => <AdminCourseDetail routeProps={props} />}
      />
      <Route exact path="/admin/courses/new" component={AdminNewCourse} />
      {/* topics */}
      <Route
        exact
        path="/admin/courses/edit/topics/:courseId/:topicId"
        render={(props) => <AdminTopic routeProps={props} />}
      />
      <Route
        exact
        path="/admin/courses/courses/newTopic/:courseId"
        render={(props) => <AdminNewTopic routeProps={props} />}
      />
      {/* exam */}
      <Route
        exact
        path="/admin/courses/exam/new/:courseId/:topicId"
        render={(props) => <AdminNewExam routeProps={props} />}
      />
      {/* students */}
      <Route exact path="/admin/students" component={AdminStudents} />
      <Route
        exact
        path="/admin/students/:studentId"
        render={(props) => <AdminStudentDetails routeProps={props} />}
      />
      <Route
        exact
        path="/admin/students/unpurchased/:studentId"
        render={(props) => <AdminAssignCourse routeProps={props} />}
      />
      <Route
        exact
        path="/admin/students/history/:studentId"
        render={(props) => <AdminStudentHistory routeProps={props} />}
      />
      {/* messages */}
      <Route exact path="/admin/messages" component={AdminMessages} />

      {/* 404 not found */}
      <Route component={NoMatch} />
    </Switch>
  );
};
