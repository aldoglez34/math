import React from "react";
import PropTypes from "prop-types";
import { Image, Col } from "react-bootstrap";
import "./resultsmsg.scss";

const ResultMsg = React.memo(({ calif }) => {
  return calif >= 80 ? (
    // EXAM PASSED
    <Col className="text-center">
      {calif / 10 === 10 ? (
        <div>
          <h2 className="text-success mainMsg">¡Calificación perfecta!</h2>
          <span className="text-success lead">
            Has recibido una corona por tu desempeño.
          </span>
        </div>
      ) : (
        <div>
          <h2 className="text-success mainMsg">Resultado satisfactorio.</h2>
          <span className="text-success lead">¡Felicidades!</span>
        </div>
      )}
      {/* crown */}
      <div className="mt-4">
        {calif / 10 === 10 ? (
          <Image src="/images/crown.png" width="170" height="170" />
        ) : null}
      </div>
    </Col>
  ) : (
    // FAILED EXAM
    <Col className="text-center">
      {/* message */}
      <div>
        <h2 className="text-danger mainMsg">No satisfactorio.</h2>
        <span className="text-danger lead">
          Debes obtener un mínimo de 8 para aprobar.
        </span>
      </div>
      {/* failed icon */}
      <div className="mt-4">
        <Image src="/images/sadFace.png" width="170" height="170" />
      </div>
    </Col>
  );
});

ResultMsg.propTypes = {
  calif: PropTypes.number.isRequired,
};

export default ResultMsg;
