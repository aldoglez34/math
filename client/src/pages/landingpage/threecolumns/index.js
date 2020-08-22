import React from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import "./threecolumns.scss";

const ThreeColumns = React.memo(() => {
  return (
    <Container className="tc_container">
      <Fade>
        <h2 className="display-4 text-center mb-3">¿Qué ofrecemos?</h2>
        <p className="text-center oc_subtitle pb-3">
          En MeXmáticas contamos con tres servicios para así poder llegar a más
          estudiantes a nivel local y nacional.
        </p>
        <Row>
          <Col md={4} className="d-flex flex-column text-center p-3">
            <div className="mb-3 text-center">
              <Image src="/images/laptop.png" alt="cursos" className="tc_pic" />
            </div>
            <h4>Cursos en línea</h4>
            <span>
              Una manera innovadora de aprender matemáticas, nuestra plataforma
              en línea se acopla al programa educativo de la SEP y aquí el
              estudiante a través de videos y de ejercicios, y a su propio paso
              irá aprendiendo.
            </span>
          </Col>
          <Col md={4} className="d-flex flex-column text-center p-3">
            <div className="mb-3 text-center">
              <Image
                src="/images/document.png"
                alt="matemáticas"
                className="tc_pic"
              />
            </div>
            <h4>Método MeXmáticas</h4>
            <div className="d-flex flex-column">
              <span>
                La mejor manera de aprender matemáticas desde sus cimientos,
                para que así seas el número uno en tu clase.
              </span>
              <span>Para mayor información comunicarse al 22-99-09-1756.</span>
            </div>
          </Col>
          <Col md={4} className="d-flex flex-column text-center p-3">
            <div className="mb-3 text-center">
              <Image src="/images/chat.png" alt="clases" className="tc_pic" />
            </div>
            <h4>Clases de regularización</h4>
            <div className="d-flex flex-column">
              <span>
                Clases de regularización en temas de matemáticas y física a
                alumnos de cualquier nivel educativo, de manera presencial o en
                línea.
              </span>
              <span>Para mayor información comunicarse al 22-99-09-1756.</span>
            </div>
          </Col>
        </Row>
      </Fade>
    </Container>
  );
});

export default ThreeColumns;
