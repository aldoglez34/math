import React from "react";
import TeacherLayout from "../teacherlayout/TeacherLayout";
import { Container, Row, Col, Button } from "react-bootstrap";

const TeacherCourses = React.memo(() => {
  return (
    <TeacherLayout title="Cursos" leftBarActive="Cursos">
      <Container>
        <Row>
          <Col
            md={{ offset: 3, span: 6 }}
            style={{ marginTop: "45px" }}
            className="text-center"
          >
            <div className="d-flex flex-column">
              <Button
                variant="outline-info"
                size="lg"
                className="mb-3 shadow-sm"
              >
                Nuevo Curso
              </Button>
              <Button
                variant="outline-info"
                size="lg"
                className="mb-3 shadow-sm"
              >
                Nuevo Tema
              </Button>
              <Button variant="outline-info" size="lg" className="shadow-sm">
                Nuevo Examen
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </TeacherLayout>
  );
});

export default TeacherCourses;
