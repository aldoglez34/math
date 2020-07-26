import React from "react";
import PropTypes from "prop-types";

const FreestyleQPoints = React.memo(({ score }) => {
  return (
    <div title="Puntos" style={{ cursor: "help" }}>
      <i className="fas fa-trophy text-dark ml-3 mr-1" />
      <span>{score}</span>
    </div>
  );
});

FreestyleQPoints.propTypes = {
  score: PropTypes.number.isRequired,
};

export default FreestyleQPoints;
