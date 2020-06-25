import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";

const Question = React.memo(({ question }) => {
  return (
    <Row style={{ marginTop: "25px" }}>
      <Col
        lg={5}
        className="rounded p-4"
        style={{ backgroundColor: "#e6e8e9" }}
      >
        <h3 className="mb-0">{question.qNumber}</h3>
        <h2 className="lead">{question.qInstruction}</h2>
        <p className="lead">{question.qTechnicalInstruction}</p>
      </Col>
      <Col lg={7} className="p-4">
        <p className="lead">Respuesta:</p>
        <input type="text" />
        <span className="ml-2">pesos</span>
      </Col>
    </Row>
  );
});

Question.propTypes = {
  question: PropTypes.object.isRequired,
};

export default Question;
