import React from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import Fade from "react-reveal/Fade";

const FacilitiesJumbotron = React.memo(() => {
  const imageStyle = {
    width: "100px",
    height: "100px",
  };

  return (
    <Container className="facj_jumbo">
      <Fade>
        <Row>
          <Col md={6}>
            <h1>Instalaciones</h1>
            <p className="lead pb-4">
              En MeXmáticas nos preocupamos en el más mínimo detalle para que
              nuestros alumnos tengan un mejor desempeño.
            </p>
          </Col>
          <Col>
            <Row>
              <Image
                src="https://image.flaticon.com/icons/svg/2883/2883713.svg"
                style={imageStyle}
                className="facj_image"
              />
              <Image
                src="https://image.flaticon.com/icons/svg/2965/2965500.svg"
                style={imageStyle}
                className="facj_image"
              />
              <Image
                src="https://image.flaticon.com/icons/svg/3063/3063657.svg"
                style={imageStyle}
                className="facj_image"
              />
              <Image
                src="https://image.flaticon.com/icons/svg/2934/2934114.svg"
                style={imageStyle}
                className="facj_image"
              />
            </Row>
          </Col>
        </Row>
      </Fade>
    </Container>
  );
});

export default FacilitiesJumbotron;
