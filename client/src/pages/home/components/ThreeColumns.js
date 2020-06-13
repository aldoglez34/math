import React from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import Fade from "react-reveal/Fade";

const ThreeColumns = React.memo(() => {
  const pics = {
    width: "104px",
    height: "104px",
  };

  return (
    <Container className="tc_container">
      <Row>
        <Col>
          <Fade>
            <Row>
              <Col md={4} className="d-flex flex-column text-center p-3">
                <div className="mb-3 text-center">
                  <Image
                    style={pics}
                    src="https://image.flaticon.com/icons/svg/3048/3048471.svg"
                    alt="clases"
                  />
                </div>
                <h4>Clases de Regularización</h4>
                <span>
                  Asesoramiento en temas de matemáticas y física a alumnos de
                  cualquier nivel educativo
                </span>
              </Col>
              <Col md={4} className="d-flex flex-column text-center p-3">
                <div className="mb-3 text-center">
                  <Image
                    style={pics}
                    src="https://image.flaticon.com/icons/svg/3048/3048461.svg"
                    alt="cursos"
                  />
                </div>
                <h4>Cursos en Línea</h4>
                <span>
                  Ejercicios, teoría, explicaciones y tips basados en temas de
                  la Secretaría de Educación Pública
                </span>
              </Col>
              <Col md={4} className="d-flex flex-column text-center p-3">
                <div className="mb-3 text-center">
                  <Image
                    style={pics}
                    src="https://image.flaticon.com/icons/svg/3048/3048457.svg"
                    alt="matemáticas"
                  />
                </div>
                <h4>Método de Matemáticas</h4>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  dapibus bibendum vehicula
                </span>
              </Col>
            </Row>
          </Fade>
        </Col>
      </Row>
    </Container>
  );
});

export default ThreeColumns;
