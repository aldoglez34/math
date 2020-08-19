import React from "react";
import { ProgressBar } from "react-bootstrap";
import PropTypes from "prop-types";

const Progress = React.memo(({ current, total }) => {
  return (
    <ProgressBar
      animated
      min="1"
      max={total}
      variant="dark"
      style={{ height: "1.7rem" }}
      now={current}
      title="Avance"
      className="w-100 rounded-0"
      // label={`${(current / total) * 100}%`}
    />
  );
});

Progress.propTypes = {
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default Progress;
