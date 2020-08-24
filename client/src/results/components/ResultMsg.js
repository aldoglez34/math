import React from "react";
import PropTypes from "prop-types";
import { Image, Col } from "react-bootstrap";

const ResultMsg = React.memo(({ calif }) => {
  return calif >= 80 ? (
    // EXAM PASSED
    <Col>
      {calif / 10 === 10 ? (
        <div className="text-center">
          <h2 className="text-success display-4">¡Calificación perfecta!</h2>
          <span className="text-success lead">
            Has recibido una corona por tu desempeño.
          </span>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-success display-4">Resultado satisfactorio.</h2>
          <span className="text-success lead">¡Felicidades!</span>
        </div>
      )}
      {/* crown */}
      <div className="text-center mt-4">
        {calif / 10 === 10 ? (
          <Image src="/images/crown.png" width="170" height="170" />
        ) : null}
      </div>
    </Col>
  ) : (
    // FAILED EXAM
    <Col>
      {/* message */}
      <div className="text-center">
        <h2 className="text-danger display-4">No satisfactorio.</h2>
        <span className="text-danger lead">
          Debes obtener un mínimo de 8 para aprobar.
        </span>
      </div>
      {/* failed icon */}
      <div className="text-center mt-4">
        <Image src="/images/sadFace.png" width="170" height="170" />
      </div>
    </Col>
  );
});

ResultMsg.propTypes = {
  calif: PropTypes.number.isRequired,
};

export default ResultMsg;
