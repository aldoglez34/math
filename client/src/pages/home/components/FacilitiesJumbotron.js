import React from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import Fade from "react-reveal/Fade";

const FacilitiesJumbotron = React.memo(() => {
  return (
    <Container className="facj_jumbo">
      <Fade>
        <Row>
          <Col lg={6}>
            <h1>Instalaciones</h1>
            <p className="lead pb-2 pb-lg-4 mt-3 mt-lg-0">
              En MeXmáticas nos preocupamos en el más mínimo detalle para que
              nuestros alumnos tengan un mejor desempeño.
            </p>
          </Col>
          <Col lg={6}>
            <div className="d-flex flex-wrap justify-content-center">
              <Image
                src="https://image.flaticon.com/icons/svg/2883/2883713.svg"
                className="facj_image mx-4 mx-lg-2 my-2 my-lg-0"
                alt="salón"
              />
              <Image
                src="https://image.flaticon.com/icons/svg/2965/2965500.svg"
                className="facj_image mx-4 mx-lg-2 my-2 my-lg-0"
                alt="dispensador"
              />
              <Image
                src="https://image.flaticon.com/icons/svg/3063/3063657.svg"
                className="facj_image mx-4 mx-lg-2 my-2 my-lg-0"
                alt="ac"
              />
              <Image
                src="https://image.flaticon.com/icons/svg/2934/2934114.svg"
                className="facj_image mx-4 mx-lg-2 my-2 my-lg-0"
                alt="internet"
              />
            </div>
          </Col>
        </Row>
      </Fade>
    </Container>
  );
});

export default FacilitiesJumbotron;
