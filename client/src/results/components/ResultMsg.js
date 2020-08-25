import React from "react";
import PropTypes from "prop-types";
import { Image } from "react-bootstrap";
import "./resultsmsg.scss";

const ResultMsg = React.memo(({ calif }) => {
  return calif >= 80 ? (
    // EXAM PASSED
    <div className="text-center mt-4">
      {calif / 10 === 10 ? (
        <div>
          <h2 className="mainMsg">¡Calificación perfecta!</h2>
          <span>Has recibido una corona por tu desempeño.</span>
        </div>
      ) : (
        <div>
          <h2 className="mainMsg">Resultado satisfactorio.</h2>
          <span>¡Felicidades!</span>
        </div>
      )}
      {/* crown */}
      <div className="mt-4">
        {calif / 10 === 10 ? (
          <Image src="/images/crown.png" width="170" height="170" />
        ) : null}
      </div>
    </div>
  ) : (
    // FAILED EXAM
    <div className="text-center mt-4">
      {/* message */}
      <div>
        <h2 className="mainMsg">No satisfactorio.</h2>
        <span>Debes obtener un mínimo de 8 para aprobar.</span>
      </div>
      {/* failed icon */}
      <div className="mt-4">
        <Image src="/images/sadFace.png" width="170" height="170" />
      </div>
    </div>
  );
});

ResultMsg.propTypes = {
  calif: PropTypes.number.isRequired,
};

export default ResultMsg;
