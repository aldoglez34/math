import React from "react";
import { Card, Button, Accordion, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import moment from "moment";
import "moment/locale/es";

const FreestyleCard = React.memo(({ freestyle }) => {
  return (
    <Card>
      <Card.Header style={{ backgroundColor: "#f4fbf8" }}>
        <Accordion.Toggle as={Button} variant="link" eventKey="freestyle">
          <i className="fas fa-chevron-down mr-1" />
          <strong>Freestyle</strong>
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="freestyle">
        <Card.Body>
          <h2 className="mb-3">Freestyle</h2>
          <hr />
          {/* description */}
          <p style={{ fontSize: "14px" }} className="mb-3">
            Contesta todos los ejercicios que puedas en{" "}
            {freestyle.freestyleTimer} minutos
          </p>
          {/* last visited */}
          <strong
            className="mb-2 d-block"
            style={{ fontSize: "14px" }}
            title="Última visita"
          >
            <em>
              {freestyle.freestyleLatestVisit
                ? moment(freestyle.freestyleLatestVisit).format("LLLL")
                : "No has presentado este examen"}
            </em>
          </strong>
          {/* columns */}
          <Row className="mb-3 py-2 pt-3">
            <Col className="text-center">
              <h1 className="mb-0 text-info">{freestyle.freestyleTimer}</h1>
              <h4>
                <small className="text-muted">Minutos</small>
              </h4>
            </Col>
            <Col className="text-center">
              <h1 className="mb-0 text-info">
                {freestyle.freestyleAttemptsCounter}
              </h1>
              <h4>
                <small className="text-muted">Intentos</small>
              </h4>
            </Col>
            <Col className="text-center">
              <h1 className="mb-0 text-info">
                {freestyle.freestyleHighestScore
                  ? freestyle.freestyleHighestScore
                  : 0}
              </h1>
              <h4>
                <small className="text-muted">Puntaje mayor</small>
              </h4>
            </Col>
          </Row>
          {/* button */}
          <Button
            variant="primary"
            disabled={freestyle.isFreestyleAvailable ? false : true}
          >
            Iniciar examen
          </Button>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
});

FreestyleCard.propTypes = {
  freestyle: PropTypes.object.isRequired,
};

export default FreestyleCard;
