import React from "react";
import { ProgressBar } from "react-bootstrap";
import PropTypes from "prop-types";

const Progress = React.memo(({ current, total }) => {
  return (
    <div className="d-flex align-items-center ml-3">
      <ProgressBar
        min="1"
        max={total}
        variant="secondary"
        style={{ width: "12rem", height: "1.5rem", cursor: "help" }}
        now={current}
        title="Avance"
        label={`${current * total}%`}
      />
    </div>
  );
});

Progress.propTypes = {
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default Progress;
