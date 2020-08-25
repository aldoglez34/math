import React from "react";
import { Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import "./grade.scss";

const Grade = React.memo(({ grade, aciertos, errores }) => {
  return (
    <>
      <h2>Tu calificación es...</h2>
      {/* calificación */}
      <div
        className="d-flex flex-column rounded justify-content-center align-items-center"
        id="gradecardstyle"
      >
        <h1 className="mb-0" style={{ fontSize: "7rem" }}>
          {grade / 10}
        </h1>
      </div>
      {/* aciertos y errores */}
      <Row className="mt-3">
        <Col className="text-center p-3">
          <strong className="text-muted">ACIERTOS</strong>
          <h1 className="mb-0" style={{ fontSize: "4rem" }}>
            {aciertos}
          </h1>
        </Col>
        <Col className="text-center p-3">
          <strong className="text-muted">ERRORES</strong>
          <h1 className="mb-0" style={{ fontSize: "4rem" }}>
            {errores}
          </h1>
        </Col>
      </Row>
    </>
  );
});

Grade.propTypes = {
  grade: PropTypes.number.isRequired,
};

export default Grade;
