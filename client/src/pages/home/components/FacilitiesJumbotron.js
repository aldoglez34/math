import React from "react";
import { Container, Carousel, Row, Col } from "react-bootstrap";
import Fade from "react-reveal/Fade";
// images
import salaespera from "../images/salaespera.png";
import salonesamplios from "../images/salonesamplios.png";
import audiovisual from "../images/audiovisual.png";
import dosplantas from "../images/dosplantas.png";
import ambiente from "../images/ambiente.png";

const FacilitiesJumbotron = React.memo(() => {
  return (
    <Container className="facj_jumbo">
      <Fade>
        <div className="text-center">
          <h1 className="display-4" style={{ fontWeight: 600 }}>
            Instalaciones
          </h1>
          <p className="lead pb-2 mt-3 mt-lg-1">
            En MeXmáticas nos preocupamos por el más mínimo detalle para que
            nuestros alumnos tengan el mejor desempeño.
          </p>
        </div>
        <Row className="mb-4">
          <Col lg={{ offset: 3, span: 4 }}>
            <ul className="lead">
              <li>5 salones amplios</li>
              <li>Baños</li>
              <li>Sala de espera</li>
            </ul>
          </Col>
          <Col>
            <ul className="lead">
              <li>Dispensador de agua</li>
              <li>Aire acondicionado</li>
              <li>Conexión a internet</li>
            </ul>
          </Col>
        </Row>
      </Fade>
      <Row>
        <Col>
          <Carousel className="shadow">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={salaespera}
                alt={salaespera}
              />
              <Carousel.Caption>
                <h3 className="text-white" style={{ fontWeight: 700 }}>
                  Sala de espera
                </h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={salonesamplios}
                alt={salonesamplios}
              />
              <Carousel.Caption>
                <h3 className="text-white" style={{ fontWeight: 700 }}>
                  Salones amplios
                </h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={audiovisual}
                alt={audiovisual}
              />
              <Carousel.Caption>
                <h3 className="text-white" style={{ fontWeight: 700 }}>
                  Audiovisual
                </h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={dosplantas}
                alt={dosplantas}
              />
              <Carousel.Caption>
                <h3 className="text-white" style={{ fontWeight: 700 }}>
                  2 plantas
                </h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={ambiente} alt={ambiente} />
              <Carousel.Caption>
                <h3 className="text-white" style={{ fontWeight: 700 }}>
                  Ambiente de trabajo
                </h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
});

export default FacilitiesJumbotron;
