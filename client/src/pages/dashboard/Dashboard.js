import React from "react";
import { Spinner, Button } from "react-bootstrap";
import { StudentLayout } from "../../components/Layout";
// import CourseCard from "./components/CourseCard";
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
          <>
            <em>No has comprado cursos aún</em>
            <div className="d-flex mt-3">
              <Button
                variant="primary"
                href="/courses/primaria"
                className="mr-2"
              >
                Primaria
              </Button>
              <Button
                variant="primary"
                href="/courses/secundaria"
                className="mr-2"
              >
                Secundaria
              </Button>
              <Button variant="primary" href="/courses/preparatoria">
                Preparatoria
              </Button>
            </div>
          </>
        )
      ) : (
        <Spinner className="text-center" animation="border" variant="primary" />
      )}
    </StudentLayout>
  );
});

export default Dashboard;
