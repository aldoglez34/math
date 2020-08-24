import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import PropTypes from "prop-types";
import "./grade.scss";

const Grade = React.memo(({ grade }) => {
  return (
    <Row className="mt-4">
      <Col md={{ span: 6, offset: 3 }}>
        <Card className="text-center shadow-sm" id="gradecardstyle">
          <h1 className="mb-0" id="gradestyle">
            {grade / 10}
          </h1>
          <span className="lead">Calificación</span>
        </Card>
      </Col>
    </Row>
  );
});

Grade.propTypes = {
  grade: PropTypes.number.isRequired,
};

export default Grade;
