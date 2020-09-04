import React, { useState, useEffect } from "react";
import AdminLayout from "../../layout/AdminLayout";
import {
  Button,
  Container,
  Row,
  Col,
  ListGroup,
  Spinner,
} from "react-bootstrap";
import TeacherAPI from "../../../utils/TeacherAPI";
import CourseItem from "./components/CourseItem";

const TeacherCoursesMain = React.memo(() => {
  const [courses, setCourses] = useState();

  useEffect(() => {
    TeacherAPI.t_fetchCourses()
      .then((res) => setCourses(res.data))
      .catch((err) => {
        console.log(err);
        alert("Ocurrió un error");
      });
  }, []);

  return (
    <AdminLayout title="Cursos" leftBarActive="Cursos">
      <Container fluid>
        <Row>
          <Col className="px-0 mt-4" md={{ offset: 2, span: 8 }}>
            {courses ? (
              courses.length ? (
                <>
                  <h3 className="mb-3" style={{ color: "#0f5257" }}>
                    Selecciona un curso...
                  </h3>
                  <ListGroup>
                    {courses.map((c) => (
                      <CourseItem
                        key={c._id}
                        name={c.name}
                        school={c.school}
                        _id={c._id}
                      />
                    ))}
                  </ListGroup>
                  <div className="text-center mt-4">
                    <Button
                      variant="dark"
                      size="lg"
                      className="py-4"
                      block
                      href="/admin/courses/new"
                    >
                      Nuevo Curso
                    </Button>
                  </div>
                </>
              ) : (
                <div className="text-center mt-4">No hay cursos</div>
              )
            ) : (
              <div className="text-center mt-4">
                <Spinner animation="border" variant="success" />
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </AdminLayout>
  );
});

export default TeacherCoursesMain;
