import React from "react";
import PropTypes from "prop-types";

const DifficultyStars = React.memo(({ difficulty }) => {
  const calculateDifficulty = (difficulty) => {
    switch (difficulty) {
      case "Basic":
        return (
          <>
            <i className="fas fa-star pb-1 mx-1" />
            <i className="far fa-star pb-1 mx-1" />
            <i className="far fa-star pb-1 mx-1" />
            <i className="far fa-star pb-1 mx-1" />
            <i className="far fa-star pb-1 mx-1" />
          </>
        );
      case "Intermediate":
        return (
          <>
            <i className="fas fa-star pb-1 mx-1" />
            <i className="fas fa-star pb-1 mx-1" />
            <i className="far fa-star pb-1 mx-1" />
            <i className="far fa-star pb-1 mx-1" />
            <i className="far fa-star pb-1 mx-1" />
          </>
        );
      case "Advanced":
        return (
          <>
            <i className="fas fa-star pb-1 mx-1" />
            <i className="fas fa-star pb-1 mx-1" />
            <i className="fas fa-star pb-1 mx-1" />
            <i className="far fa-star pb-1 mx-1" />
            <i className="far fa-star pb-1 mx-1" />
          </>
        );
      case "Final":
        return (
          <>
            <i className="fas fa-star pb-1 mx-1" />
            <i className="fas fa-star pb-1 mx-1" />
            <i className="fas fa-star pb-1 mx-1" />
            <i className="fas fa-star pb-1 mx-1" />
            <i className="fas fa-star pb-1 mx-1" />
          </>
        );
      default:
        break;
    }
  };

  return (
    <strong className="mb-2 mt-3 d-block" style={{ fontSize: "14px" }}>
      {/* <span className="mr-2">Dificultad:</span> */}
      <span className="text-info" title="Dificultad">
        {calculateDifficulty(difficulty)}
      </span>
    </strong>
  );
});

DifficultyStars.propTypes = {
  difficulty: PropTypes.string.isRequired,
};

export default DifficultyStars;
