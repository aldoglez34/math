import React, { useState, useEffect } from "react";
import AdminLayout from "../../layout/AdminLayout";
import { Container, Row, Col, Spinner, Button } from "react-bootstrap";
import TeacherAPI from "../../../utils/TeacherAPI";
import EditCourseName from "./components/EditCourseName";
import "./coursedetail.scss";

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
  }, [props.routeProps.match.params.courseId]);

  return (
    <AdminLayout
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
              <br />
              {/* grado escolar */}
              <span className="text-muted">Grado escolar</span>
              <h2>{course.school}</h2>
              <br />
              {/* grado escolar */}
              <span className="text-muted">Precio</span>
              <h2>{course.price}</h2>
              <br />
              {/* description */}
              <span className="text-muted">Descripción</span>
              <h5>{course.description}</h5>
              <br />
              {/* summary */}
              <span className="text-muted">Resumen</span>
              <ul>
                {course.topicsSummary.map((t) => {
                  return (
                    <li key={t}>
                      <h5>{t}</h5>
                    </li>
                  );
                })}
              </ul>
              <br />
              {/* topics */}
              <span className="text-muted">Temas</span>
              <ul>
                {course.topics.map((t) => {
                  return (
                    <li key={t._id}>
                      <h5>
                        {t.name}
                        <Button size="sm" variant="info" className="ml-2">
                          <i className="fas fa-pen-alt " />
                        </Button>
                      </h5>
                    </li>
                  );
                })}
              </ul>
              <br />
            </Col>
          </Row>
        </Container>
      ) : (
        <div className="text-center mt-4">
          <Spinner animation="border" variant="success" />
        </div>
      )}
    </AdminLayout>
  );
});

export default NewCourse;
