import React from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import Fade from "react-reveal/Fade";

const ThreeColumns = React.memo(() => {
  return (
    <Container className="tc_container">
      <Fade>
        <h2 className="display-4 text-center mb-4" style={{ fontWeight: 600 }}>
          ¿Qué ofrecemos?
        </h2>
        <p className="lead text-left text-lg-center oc_subtitle pb-3">
          Mauris hendrerit est justo, nec porta quam semper quis. Nulla at
          posuere leo. Quisque id erat in justo vulputate luctus vitae ut neque.
          Duis viverra mi mi, sit amet ullamcorper tellus lobortis non.
        </p>
        <Row>
          <Col md={4} className="d-flex flex-column text-center p-3">
            <div className="mb-3 text-center">
              <Image src="/images/board.png" alt="clases" className="tc_pic" />
            </div>
            <h4>Clases de regularización</h4>
            <span>
              Asesoramiento en temas de matemáticas y física a alumnos de
              cualquier nivel educativo
            </span>
          </Col>
          <Col md={4} className="d-flex flex-column text-center p-3">
            <div className="mb-3 text-center">
              <Image src="/images/video.png" alt="cursos" className="tc_pic" />
            </div>
            <h4>Cursos en línea</h4>
            <span>
              Ejercicios, teoría, explicaciones y tips basados en temas de la
              Secretaría de Educación Pública
            </span>
          </Col>
          <Col md={4} className="d-flex flex-column text-center p-3">
            <div className="mb-3 text-center">
              <Image
                src="/images/exam.png"
                alt="matemáticas"
                className="tc_pic"
              />
            </div>
            <h4>Examen de ubicación</h4>
            <span>
              Clases personalizadas, se realiza un examen de ubicación para
              conocer el nivel del estudiante.
            </span>
          </Col>
        </Row>
      </Fade>
    </Container>
  );
});

export default ThreeColumns;
