import React from "react";
import { Row, Col, Card, ListGroup } from "react-bootstrap";
import PropTypes from "prop-types";
import "./grade.scss";

const Grade = React.memo(({ grade, aciertos, errores }) => {
  return (
    <Row style={{ marginTop: "30px" }}>
      <Col md={{ offset: 3, span: 6 }}>
        <Card className="text-center shadow-sm h-100" id="gradecardstyle">
          <h1 className="mb-0" id="gradestyle">
            {grade / 10}
          </h1>
          <span className="lead text-muted">Calificación</span>
        </Card>
      </Col>
      {/* <Col md={{ span: 3 }} className="d-flex flex-column mt-4 mt-md-0">
        <Card className="shadow-sm">
          <div className="p-3 h-50 text-center rounded-top aciertosStyle">
            <h3 className="mb-0 numberstyle">{aciertos}</h3>
            <span className="text-muted">Aciertos</span>
          </div>
          <div className="p-3 h-50 text-center rounded-bottom erroresStyle">
            <h3 className="mb-0 numberstyle">{errores}</h3>
            <span className="text-muted">Errores</span>
          </div>
        </Card>
      </Col> */}
    </Row>
  );
});

Grade.propTypes = {
  grade: PropTypes.number.isRequired,
};

export default Grade;
