import React from "react";
import PropTypes from "prop-types";

const FreestyleQNumber = React.memo(({ current }) => {
  return (
    <div title="Número de pregunta" style={{ cursor: "help" }}>
      <i className="fas fa-check-circle text-dark ml-3 mr-1" />
      <span>{current}</span>
    </div>
  );
});

FreestyleQNumber.propTypes = {
  current: PropTypes.number.isRequired,
};

export default FreestyleQNumber;
