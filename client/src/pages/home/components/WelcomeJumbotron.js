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
                className="mt-3"
                src="/images/calculator.png"
                id="wj_homeImage"
              />
            </Fade>
          </Col>
          <Col lg={7} className="px-4 py-3 py-lg-0">
            <Fade bottom cascade>
              <h2 className="display-4 mb-0 text-center text-lg-left wj_mainText">
                <span style={{ fontWeight: 900 }}>MATEMÁTICAS</span>
              </h2>
              <h2 className="display-4 text-center text-lg-left wj_mainText">
                <span style={{ fontWeight: 900 }}>SIMPLIFICADAS</span>
              </h2>
            </Fade>
            <Fade>
              <p className="mb-1 mt-3 mt-lg-0">
                <i className="fas fa-plus mr-2" style={{ color: "#e8686a" }} />
                <span className="wj_secondaryText">
                  Cursos de matemáticas para estudiantes de cualquier edad
                </span>
              </p>
              <p className="mb-1">
                <i className="fas fa-minus mr-2" style={{ color: "#32b0cb" }} />
                <span className="wj_secondaryText">
                  Más de 4,000 ejercicios con explicaciones y videos tutoriales
                </span>
              </p>
              <p className="mb-1">
                <i className="fas fa-times mr-2" style={{ color: "#f39e21" }} />
                <span className="wj_secondaryText">
                  Clases personalizadas, respondemos cada una de tus dudas
                </span>
              </p>
              <p className="mb-1">
                <i
                  className="fas fa-divide mr-2"
                  style={{ color: "#55b46a" }}
                />
                <span className="wj_secondaryText">
                  Aprendiendo matemáticas con un método único en el mercado
                </span>
              </p>
              <p className="mt-4 mb-1">
                <Button
                  variant="primary"
                  size="lg"
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
