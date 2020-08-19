import React from "react";
import PropTypes from "prop-types";

const QInstruction = React.memo(({ qInstruction }) => {
  return (
    <h4 className="mb-1 mt-2">
      <span className="text-break">{qInstruction}</span>
    </h4>
  );
});

QInstruction.propTypes = {
  qInstruction: PropTypes.string.isRequired,
};

export default QInstruction;
