import React from "react";
import { number } from "prop-types";

export const FreestyleQPoints = React.memo(({ score }) => {
  return (
    <div title="Puntos" className="lead ml-3" style={{ color: "#48bf84" }}>
      <i className="fas fa-trophy" />
      <strong className="ml-1">{score}</strong>
      <strong className="ml-1">pts.</strong>
    </div>
  );
});

FreestyleQPoints.propTypes = {
  score: number.isRequired,
};
