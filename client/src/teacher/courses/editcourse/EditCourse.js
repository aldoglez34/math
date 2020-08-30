import React, { useState, useEffect } from "react";
import TeacherLayout from "../../teacherlayout/TeacherLayout";
import { Container, Row, Col, Spinner, Button } from "react-bootstrap";
import TeacherAPI from "../../../utils/TeacherAPI";
import EditCourseName from "./components/EditCourseName";
import "./editcourse.scss";

const NewCourse = React.memo((props) => {
  const [course, setCourse] = useState();

  useEffect(() => {
    const courseId = props.routeProps.match.params.courseId;
    TeacherAPI.t_fetchOneCourse(courseId)
      .then((res) => setCourse(res.data))
      .catch((err) => {
        console.log(err);
        alert("Ocurrió un error");
      });
  }, []);

  return (
    <TeacherLayout
      title="Editar Curso"
      leftBarActive="Cursos"
      backBttn="/admin/courses"
    >
      {course ? (
        <Container>
          <Row>
            <Col className="px-0 mt-4" md={{ offset: 2, span: 9 }}>
              {/* course name */}
              <span className="text-muted">Nombre del curso</span>
              <h1>
                {course.name}
                <EditCourseName />
              </h1>
              {/* grado escolar */}
              <span className="text-muted">Grado escolar</span>
              <h1>{course.school}</h1>
              {/* grado escolar */}
              <span className="text-muted">Precio</span>
              <h1>{course.price}</h1>
              {/* description */}
              <span className="text-muted">Descripción</span>
              <h5>{course.description}</h5>
              {/* description */}
              <span className="text-muted">Descripción</span>
              <h5>{course.description}</h5>
            </Col>
          </Row>
        </Container>
      ) : (
        <div className="text-center mt-4">
          <Spinner animation="border" variant="success" />
        </div>
      )}
    </TeacherLayout>
  );
});

export default NewCourse;
