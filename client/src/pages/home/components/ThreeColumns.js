import React from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import Fade from "react-reveal/Fade";

const ThreeColumns = React.memo(() => {
  return (
    <Container className="tc_container">
      <Row>
        <Col>
          <Fade>
            <Row>
              <Col md={4} className="d-flex flex-column text-center p-3">
                <div className="mb-3 text-center">
                  <Image
                    src="https://image.flaticon.com/icons/svg/3048/3048471.svg"
                    alt="clases"
                    className="tc_pic"
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
                    src="https://image.flaticon.com/icons/svg/3048/3048461.svg"
                    alt="cursos"
                    className="tc_pic"
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
                    src="https://image.flaticon.com/icons/svg/2949/2949787.svg"
                    alt="matemáticas"
                    className="tc_pic"
                  />
                </div>
                <h4>Examen de Ubicación</h4>
                <span>
                  Clases personalizadas, se realiza un examen de ubicación para
                  conocer el nivel del estudiante.
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
