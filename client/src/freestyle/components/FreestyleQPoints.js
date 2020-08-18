import React from "react";
import PropTypes from "prop-types";

const FreestyleQPoints = React.memo(({ score }) => {
  return (
    <div
      title="Puntos"
      className="text-info ml-1 p-1"
      style={{ cursor: "help" }}
    >
      <i className="fas fa-trophy" />
      <strong className="ml-1">{score}</strong>
      <strong className="ml-1">pts.</strong>
    </div>
  );
});

FreestyleQPoints.propTypes = {
  score: PropTypes.number.isRequired,
};

export default FreestyleQPoints;
