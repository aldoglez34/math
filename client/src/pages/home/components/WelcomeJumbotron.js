import React from "react";
import { Jumbotron, Button, Container, Row, Col } from "react-bootstrap";
import Fade from "react-reveal/Fade";

const MyJumbotron = React.memo(() => {
  return (
    <Jumbotron fluid className="wj_jumboStyle shadow">
      <Container>
        <Row>
          <Col className="px-4 py-3 py-lg-0">
            {/* title */}
            <Fade bottom cascade>
              <h2 className="display-2 mb-0 text-center text-lg-left wj_title">
                MATEMÁTICAS
              </h2>
              <h2 className="display-2 text-center text-lg-left wj_title">
                SIMPLIFICADAS
              </h2>
            </Fade>
            {/* list */}
            <Fade>
              <p className="mb-1 mt-3 mt-lg-0">
                <i className="fas fa-plus wj_plusIcon" />
                <span className="wj_text">
                  Cursos de matemáticas para estudiantes de cualquier grado
                  educativo y/o edad
                </span>
              </p>
              <p className="mb-1">
                <i className="fas fa-plus wj_plusIcon" />
                <span className="wj_text">
                  Miles de ejercicios con explicaciones y videos tutoriales
                </span>
              </p>
              <p className="mb-1">
                <i className="fas fa-plus wj_plusIcon" />
                <span className="wj_text">
                  Aprendiendo matemáticas a tu propio ritmo y con un método
                  único
                </span>
              </p>
              <p className="mt-4 mb-1">
                <Button
                  size="lg"
                  variant="primary"
                  className="shadow"
                  href="/signup"
                >
                  Regístrate
                  <i className="fas fa-user-plus ml-2" />
                </Button>
              </p>
            </Fade>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
});

export default MyJumbotron;
