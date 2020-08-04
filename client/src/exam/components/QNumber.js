import React from "react";
import PropTypes from "prop-types";

const QNumber = React.memo(({ current, total }) => {
  return (
    <div
      title="Número de pregunta"
      className="text-secondary ml-2 p-1"
      style={{ cursor: "help" }}
    >
      <i className="fas fa-question-circle mr-1" />
      <strong>{current}</strong>
      <strong className="mx-1">de</strong>
      <strong>{total}</strong>
    </div>
  );
});

QNumber.propTypes = {
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default QNumber;
