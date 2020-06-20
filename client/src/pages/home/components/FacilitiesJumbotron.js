import React from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import Fade from "react-reveal/Fade";

const FacilitiesJumbotron = React.memo(() => {
  return (
    <Container className="facj_jumbo">
      <Row>
        <Col lg={5}>
          <Fade>
            <h1 style={{ fontWeight: 600 }}>Instalaciones</h1>
            <p className="lead pb-2 pb-lg-4 mt-3 mt-lg-0">
              En MeXmáticas nos preocupamos por el más mínimo detalle para que
              nuestros alumnos tengan el mejor desempeño.
            </p>
          </Fade>
        </Col>
        <Col lg={7}>
          <Fade>
            <div className="d-flex flex-wrap justify-content-center">
              <Image
                src="/images/desk.png"
                className="facj_image mx-4 mx-lg-2 my-4 mt-lg-0"
                alt="salón"
              />
              <Image
                src="/images/water-dispenser.png"
                className="facj_image mx-4 mx-lg-2 mt-4 mt-lg-0"
                alt="dispensador"
              />
              <Image
                src="/images/air-conditioner.png"
                className="facj_image mx-4 mx-lg-2 mt-4 mt-lg-0"
                alt="ac"
              />
              <Image
                src="/images/wifi.png"
                className="facj_image mx-4 mx-lg-2 mt-4 mt-lg-0"
                alt="internet"
              />
            </div>
          </Fade>
        </Col>
      </Row>
    </Container>
  );
});

export default FacilitiesJumbotron;
