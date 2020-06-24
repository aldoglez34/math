import React from "react";
import { Spinner } from "react-bootstrap";
import { StudentLayout } from "../../components/Layout";
import { useSelector } from "react-redux";
import "./dashboard.scss";
import NoCourses from "./NoCourses";
import MyCourses from "./MyCourses";

const Dashboard = React.memo(() => {
  const student = useSelector((state) => state.student);

  const breadcrumb = [{ text: "Mis cursos" }];

  return (
    <StudentLayout breadcrumb={breadcrumb}>
      <h2 className="display-4">Mis cursos</h2>
      {student ? (
        student.courses.length ? (
          <MyCourses />
        ) : (
          <NoCourses />
        )
      ) : (
        <Spinner className="text-center" animation="border" variant="primary" />
      )}
    </StudentLayout>
  );
});

export default Dashboard;
