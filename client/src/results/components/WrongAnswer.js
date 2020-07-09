import React from "react";
import { Row, Col, OverlayTrigger, Popover, Alert } from "react-bootstrap";
import PropTypes from "prop-types";

const WrongAnswer = React.memo(
  ({ qInstruction, qTechnicalInstruction, userAnswer, qCorrectAnswer }) => {
    const popover = (
      <Popover>
        <Popover.Title as="h3">Respuesta correcta</Popover.Title>
        <Popover.Content>{qCorrectAnswer}</Popover.Content>
      </Popover>
    );

    return (
      <OverlayTrigger placement="bottom" trigger="click" overlay={popover}>
        <Alert
          className="shadow-sm"
          variant="danger"
          style={{ cursor: "pointer" }}
          title="Haz clic para ver respuesta correcta"
        >
          <Row>
            <Col>
              <strong>
                <i className="fas fa-times mr-2" />
                INCORRECTO
              </strong>
              <br />
              <span className="text-break">{qInstruction}</span>
              {qTechnicalInstruction ? (
                <>
                  <br />
                  <span>{qTechnicalInstruction}</span>
                </>
              ) : null}
              <br />
              <span>
                <strong className="mr-2">R.</strong>
                {userAnswer}
              </span>
            </Col>
          </Row>
        </Alert>
      </OverlayTrigger>
    );
  }
);

WrongAnswer.propTypes = {
  qInstruction: PropTypes.string.isRequired,
  qTechnicalInstruction: PropTypes.string,
  userAnswer: PropTypes.string.isRequired,
  qCorrectAnswer: PropTypes.string.isRequired,
};

export default WrongAnswer;
