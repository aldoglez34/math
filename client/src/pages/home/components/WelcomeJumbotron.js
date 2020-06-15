import React from "react";
import { Jumbotron, Button, Container, Row, Col, Image } from "react-bootstrap";
import Fade from "react-reveal/Fade";

const MyJumbotron = React.memo(() => {
  return (
    <Jumbotron fluid className="wj_jumboStyle">
      <Container>
        <Row>
          <Col lg={5} className="text-center text-lg-right px-4">
            <Fade>
              <Image
                className="mt-4"
                src="https://image.flaticon.com/icons/svg/897/897406.svg"
                id="wj_homeImage"
              />
            </Fade>
          </Col>
          <Col lg={7} className="px-4 py-3 py-lg-0">
            <Fade bottom cascade>
              <h2 className="display-4 text-light text-center text-lg-left wj_mainText">
                Matemáticas
              </h2>
              <h2 className="display-4 text-light text-center text-lg-left wj_mainText">
                Simplificadas
              </h2>
            </Fade>
            <Fade>
              <p className="lead mb-1 mt-3 mt-lg-0 text-light">
                <i className="fas fa-plus mr-2" style={{ color: "#e8686a" }} />
                Cursos de matemáticas para estudiantes de cualquier edad
              </p>
              <p className="lead mb-1 text-light">
                <i className="fas fa-minus mr-2" style={{ color: "#32b0cb" }} />
                Más de 4,000 ejercicios con explicaciones y videos tutoriales
              </p>
              <p className="lead mb-1 text-light">
                <i className="fas fa-times mr-2" style={{ color: "#f39e21" }} />
                Clases personalizadas, respondemos cada una de tus dudas
              </p>
              <p className="lead mb-1 text-light">
                <i
                  className="fas fa-divide mr-2"
                  style={{ color: "#55b46a" }}
                />
                Aprendiendo matemáticas con un método único en el mercado
              </p>
              <p className="mt-4 mb-1">
                <Button
                  variant="primary"
                  // size="lg"
                  className="shadow"
                  href="/signup"
                >
                  Regístrate
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
