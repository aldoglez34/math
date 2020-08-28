import React, { useState, useEffect } from "react";
import TeacherLayout from "../../teacherlayout/TeacherLayout";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import TeacherAPI from "../../../utils/TeacherAPI";
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
              <h1>
                {course.name}
                <i className="fas fa-pen-alt ml-2 editButton" />
              </h1>
              <h1>{course.school}</h1>
            </Col>
          </Row>

          <h1>{course.name}</h1>
          <h1>{course.name}</h1>
          <h1>{course.name}</h1>
          <h1>{course.name}</h1>
          <h1>{course.name}</h1>
          <h1>{course.name}</h1>
          <h1>{course.name}</h1>
          <h1>{course.name}</h1>
          <h1>{course.name}</h1>
          <h1>{course.name}</h1>
          <h1>{course.name}</h1>
          <h1>{course.name}</h1>
          <h1>{course.name}</h1>
          <h1>{course.name}</h1>
          <h1>{course.name}</h1>
          <h1>{course.name}</h1>
          <h1>{course.name}</h1>
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
