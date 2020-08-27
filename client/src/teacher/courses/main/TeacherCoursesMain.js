import React from "react";
import TeacherLayout from "../../teacherlayout/TeacherLayout";
import { Container, Row, Col, Button, ListGroup } from "react-bootstrap";
import "./teachercoursesmain.scss";

const TeacherCoursesMain = React.memo(() => {
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
    <TeacherLayout title="Cursos" leftBarActive="Cursos" buttons={newButtons}>
      <Container fluid>
        <Row>
          <Col className="px-0 mt-4" md={{ offset: 1, span: 10 }}>
            <ListGroup className="shadow-sm">
              <ListGroup.Item className="text-left d-flex flex-row">
                <div className="d-flex flex-column">
                  <h2>Primaria 3ro</h2>
                  <span>10 de enero 2020</span>
                </div>
                <Button variant="info" className="ml-auto">
                  Editar
                </Button>
              </ListGroup.Item>
              <ListGroup.Item className="text-left d-flex flex-row">
                <div className="d-flex flex-column">
                  <h2>Primaria 3ro</h2>
                  <span>10 de enero 2020</span>
                </div>
                <Button variant="info" className="ml-auto">
                  Editar
                </Button>
              </ListGroup.Item>
              <ListGroup.Item className="text-left d-flex flex-row">
                <div className="d-flex flex-column">
                  <h2>Primaria 3ro</h2>
                  <span>10 de enero 2020</span>
                </div>
                <Button variant="info" className="ml-auto">
                  Editar
                </Button>
              </ListGroup.Item>
              <ListGroup.Item className="text-left d-flex flex-row">
                <div className="d-flex flex-column">
                  <h2>Primaria 3ro</h2>
                  <span>10 de enero 2020</span>
                </div>
                <Button variant="info" className="ml-auto">
                  Editar
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </TeacherLayout>
  );
});

export default TeacherCoursesMain;
