import React from "react";
import {
  Image,
  Row,
  Col,
  OverlayTrigger,
  Popover,
  Alert,
} from "react-bootstrap";
import PropTypes from "prop-types";

const WrongAnswer = React.memo(
  ({ qInstruction, qTechnicalInstruction, userAnswers, qCorrectAnswers }) => {
    const popover = (
      <Popover>
        <Popover.Title
          as="h3"
          className="text-light"
          style={{ backgroundColor: "#0d2129" }}
        >
          Respuesta correcta
        </Popover.Title>
        <Popover.Content as="h3">
          {qCorrectAnswers.type === "text" ? (
            <span>{qCorrectAnswers.answer}</span>
          ) : (
            <div className="text-center">
              <Image
                src={qCorrectAnswers.answer}
                className="my-2"
                width="50"
                height="50"
                rounded
              />
            </div>
          )}
        </Popover.Content>
      </Popover>
    );

    return (
      <OverlayTrigger placement="top" trigger="click" overlay={popover}>
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
                qTechnicalInstruction.type === "text" ? (
                  <>
                    <br />
                    <span className="my-2">{qTechnicalInstruction.text}</span>
                  </>
                ) : (
                  <>
                    <br />
                    <Image
                      src={qTechnicalInstruction.imageLink}
                      className="my-2"
                      width="150"
                      height="150"
                      rounded
                    />
                  </>
                )
              ) : null}
              {/* YOUR ANSWERS */}
              <br />
              <strong className="mr-2">Tu respuesta:</strong>
              <br />
              {userAnswers.type === "text" ? (
                <span>{userAnswers.answer}</span>
              ) : (
                <Image
                  src={userAnswers.answer}
                  className="my-2"
                  width="50"
                  height="50"
                  rounded
                />
              )}
            </Col>
          </Row>
        </Alert>
      </OverlayTrigger>
    );
  }
);

WrongAnswer.propTypes = {
  qInstruction: PropTypes.string.isRequired,
  qTechnicalInstruction: PropTypes.object,
  userAnswers: PropTypes.object.isRequired,
  qCorrectAnswers: PropTypes.object.isRequired,
};

export default WrongAnswer;
