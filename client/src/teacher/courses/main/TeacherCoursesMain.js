import React, { useState, useEffect } from "react";
import TeacherLayout from "../../teacherlayout/TeacherLayout";
import {
  Container,
  Row,
  Col,
  Button,
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

  const newButtons = (
    <>
      <Button variant="outline-light" className="mr-2">
        Nuevo Curso
      </Button>
      <Button variant="outline-light" className="mr-2">
        Nuevo Tema
      </Button>
      <Button variant="outline-light">Nuevo Examen</Button>
    </>
  );

  return (
    <TeacherLayout title="Cursos" leftBarActive="Cursos">
      <Container fluid>
        <Row>
          <Col className="px-0 mt-4" md={{ offset: 3, span: 7 }}>
            {courses ? (
              courses.length ? (
                <>
                  <h3 className="mb-3" style={{ color: "#0f5257" }}>
                    Selecciona un curso...
                  </h3>
                  <ListGroup className="shadow-sm">
                    {courses.map((c) => (
                      <CourseItem
                        key={c._id}
                        name={c.name}
                        createdAt={c.createdAt}
                        _id={c._id}
                      />
                    ))}
                  </ListGroup>
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
    </TeacherLayout>
  );
});

export default TeacherCoursesMain;
