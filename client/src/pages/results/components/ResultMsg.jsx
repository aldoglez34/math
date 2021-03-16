import React from "react";
import { number } from "prop-types";
import { Image } from "react-bootstrap";
import "./resultsmsg.scss";

export const ResultMsg = React.memo(({ grade }) => {
  return grade >= 8 ? (
    // EXAM PASSED
    <div className="text-center mt-4">
      {grade === 10 ? (
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
        {grade === 10 ? (
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
  grade: number.isRequired,
};
