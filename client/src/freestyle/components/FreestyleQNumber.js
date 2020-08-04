import React from "react";
import PropTypes from "prop-types";

const FreestyleQNumber = React.memo(({ current }) => {
  return (
    <div
      title="Número de pregunta"
      className="text-secondary ml-2 p-1"
      style={{ cursor: "help" }}
    >
      <i className="fas fa-question-circle mr-1" />
      <strong>{current}</strong>
    </div>
  );
});

FreestyleQNumber.propTypes = {
  current: PropTypes.number.isRequired,
};

export default FreestyleQNumber;
