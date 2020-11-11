import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AdminCourses from "../admin/courses/courses/AdminCourses";
import AdminCourseDetail from "../admin/courses/coursedetail/AdminCourseDetail";
import AdminNewCourse from "../admin/courses/newcourse/AdminNewCourse";
import AdminTopicDetail from "../admin/courses/topics/AdminTopicDetail";
import AdminNewTopic from "../admin/courses/newtopic/AdminNewTopic";
import AdminNewExam from "../admin/courses/newexam/AdminNewExam";
import AdminStudents from "../admin/students/students/AdminStudents";
import AdminStudentDetails from "../admin/students/studentdetail/AdminStudentDetails";
import AdminAssignCourse from "../admin/students/assign/AdminAssignCourse";
import AdminStudentHistory from "../admin/students/history/AdminStudentHistory";
import AdminMessages from "../admin/messages/AdminMessages";
import AdminExamDetail from "../admin/exams/AdminExamDetail";

export default () => {
  return (
    <Switch>
      {/* ================= COURSES ================= */}
      <Route exact path="/admin/courses" component={AdminCourses} />
      <Route
        exact
        path="/admin/courses/edit/:courseId"
        render={(props) => <AdminCourseDetail routeProps={props} />}
      />
      <Route exact path="/admin/courses/new" component={AdminNewCourse} />

      {/* ================= TOPICS ================= */}
      <Route
        exact
        path="/admin/courses/edit/topics/:courseId/:topicId"
        render={(props) => <AdminTopicDetail routeProps={props} />}
      />
      <Route
        exact
        path="/admin/courses/courses/newTopic/:courseId"
        render={(props) => <AdminNewTopic routeProps={props} />}
      />

      {/* ================= EXAM ================= */}
      <Route
        exact
        path="/admin/courses/exam/new/:difficulty/:courseId/:topicId"
        render={(props) => <AdminNewExam routeProps={props} />}
      />
      <Route
        exact
        path="/admin/courses/edit/exam/:courseId/:topicId/:examId"
        render={(props) => <AdminExamDetail routeProps={props} />}
      />

      {/* ================= STUDENTS ================= */}
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

      {/* ================= MESSAGES ================= */}
      <Route exact path="/admin/messages" component={AdminMessages} />

      {/* ================= REDIRECT ================= */}
      {/* <Redirect from="/admin" to="/admin/courses" />
      <Redirect from="/" to="/admin/courses" /> */}
      <Redirect from="*" to="/admin/courses" />

      {/* 404 not found */}
      {/* <Route component={AdminCourses} /> */}
    </Switch>
  );
};
