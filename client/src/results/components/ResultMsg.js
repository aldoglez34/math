import React from "react";
import PropTypes from "prop-types";
import { Image, Col } from "react-bootstrap";

const ResultMsg = React.memo(({ calif }) => {
  return calif >= 80 ? (
    <Col lg={{ span: 7, offset: 2 }}>
      {/* PASS EXAM */}
      {calif / 10 === 10 ? (
        <div className="text-center">
          <h2 className="text-success display-4">¡Calificación perfecta!</h2>
          <strong className="text-success">
            Recibiste una corona por tu desempeño
          </strong>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-success display-4">Resultado satisfactorio</h2>
          <h2 className="text-success">¡Felicidades!</h2>
        </div>
      )}
      {/* crown */}
      <div className="text-center mt-4">
        {calif / 10 === 10 ? (
          <Image src="/images/crown.png" width="150" height="150" />
        ) : null}
      </div>
    </Col>
  ) : (
    // FAILED EXAM
    <Col lg={{ span: 7, offset: 2 }}>
      {/* message */}
      <div className="text-center">
        <h2 className="text-danger display-4">No satisfactorio</h2>
        <strong className="text-danger">
          Debes obtener un mínimo de 8.0 para aprobar
        </strong>
      </div>
      {/* failed icon */}
      <div className="text-center mt-4">
        <Image src="/images/sadFace.png" width="150" height="150" />
      </div>
    </Col>
  );
});

ResultMsg.propTypes = {
  calif: PropTypes.number.isRequired,
};

export default ResultMsg;
