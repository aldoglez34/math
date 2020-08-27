import React from "react";
import TeacherLayout from "../../teacherlayout/TeacherLayout";
import { Container, Row, Col, Button, ListGroup } from "react-bootstrap";
import "./teachercoursesmain.scss";

const TeacherCoursesMain = React.memo(() => {
  return (
    <TeacherLayout title="Cursos" leftBarActive="Cursos">
      <Container>
        <Row>
          <Col md={{ offset: 3, span: 6 }} className="text-center mbt-3">
            <ListGroup>
              <ListGroup.Item className="text-left">
                <h3 className="mb-0" style={{ color: "teal" }}>
                  Primaria 3ro
                </h3>
              </ListGroup.Item>
              <ListGroup.Item className="text-left">
                <h3 className="mb-0" style={{ color: "#0f5257" }}>
                  Primaria 4to
                </h3>
              </ListGroup.Item>
              <ListGroup.Item className="text-left">
                <h3 className="mb-0" style={{ color: "#0f5257" }}>
                  Primaria 5to
                </h3>
              </ListGroup.Item>
              <ListGroup.Item className="text-left">
                <h3 className="mb-0" style={{ color: "#0f5257" }}>
                  Primaria 6to
                </h3>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
        <Row>
          <Col
            md={{ offset: 4, span: 4 }}
            style={{ marginTop: "45px" }}
            className="text-center"
          >
            <div className="d-flex flex-column">
              <Button
                className="mb-3 shadow-sm teachercoursebttn"
                href="/admin/courses/new-course"
              >
                Nuevo Curso
              </Button>
              <Button
                className="mb-3 shadow-sm teachercoursebttn"
                href="/admin/courses/new-subject"
              >
                Nuevo Tema
              </Button>
              <Button
                className="shadow-sm teachercoursebttn"
                href="/admin/courses/new-exam"
              >
                Nuevo Examen
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </TeacherLayout>
  );
});

export default TeacherCoursesMain;
