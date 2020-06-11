import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./footer.scss";

const MyFooter = React.memo(() => {
  return (
    <footer id="myfooter" className="mt-auto py-3">
      <Container>
        <Row>
          <Col md={4} className="mt-3 text-center">
            <h5 className="footerTitle">Dirección</h5>
            <p className="mb-0">Avenida Graciano Sánchez #5</p>
            <p className="mb-0">Col. Ejido Primero de Mayo Sur</p>
            <p className="mb-0">Boca del Río, Veracruz</p>
          </Col>
          <Col md={4} className="mt-3 text-center">
            <h5 className="footerTitle">Teléfono</h5>
            <p className="mb-0">22 99 09 16 75</p>
          </Col>
          <Col md={4} className="mt-3 text-center">
            <h5 className="footerTitle">Sociales</h5>
            <p className="mb-0">
              <i className="fab fa-twitter mr-3 socials" title="Twitter" />
              <i className="fab fa-facebook-f mr-3 socials" title="Facebook" />
              <i className="fab fa-youtube socials" title="Youtube" />
            </p>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col className="text-center" id="footerCopyright">
            <small>Mexmáticas 2018 ©</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
});

export default MyFooter;
