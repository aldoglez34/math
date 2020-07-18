import React from "react";
import PropTypes from "prop-types";

const QNumber = React.memo(({ current, total }) => {
  return (
    <div title="Número de pregunta" style={{ cursor: "help" }}>
      <i className="fas fa-check-circle text-dark ml-3 mr-1" />
      <span>{current}</span>
      <span className="mx-1">/</span>
      <span>{total}</span>
    </div>
  );
});

QNumber.propTypes = {
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default QNumber;
