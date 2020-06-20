import React from "react";
import { Spinner } from "react-bootstrap";
import { StudentLayout } from "../../components/Layout";
import CourseCard from "./components/CourseCard";
import { useSelector } from "react-redux";

const Dashboard = React.memo(() => {
  const student = useSelector((state) => state.student);

  const breadcrumb = [{ text: "Mis cursos" }];

  return (
    <StudentLayout breadcrumb={breadcrumb}>
      {student ? (
        student.courses.length ? (
          <div className="d-flex flex-row flex-wrap justify-content-center">
            aquí van tus cursos
          </div>
        ) : (
          <em>No has comprado cursos aún</em>
        )
      ) : (
        <Spinner animation="border" variant="primary" />
      )}
    </StudentLayout>
  );
});

export default Dashboard;
