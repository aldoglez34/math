import React from "react";
import PropTypes from "prop-types";

const QInstruction = React.memo(({ qNumber, qInstruction }) => {
  return (
    <h4>
      <span className="text-break">{qInstruction}</span>
    </h4>
  );
});

QInstruction.propTypes = {
  qNumber: PropTypes.number.isRequired,
  qInstruction: PropTypes.string.isRequired,
};

export default QInstruction;
