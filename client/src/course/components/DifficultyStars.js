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
    <strong className="mb-2 d-block text-info" title="Dificultad">
      {calculateDifficulty(difficulty)}
    </strong>
  );
});

DifficultyStars.propTypes = {
  difficulty: PropTypes.string.isRequired,
};

export default DifficultyStars;
