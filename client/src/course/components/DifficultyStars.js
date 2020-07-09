import React from "react";
import PropTypes from "prop-types";

const DifficultyStars = React.memo(({ difficulty }) => {
  const calculateDifficulty = (difficulty) => {
    switch (difficulty) {
      case "Basic":
        return (
          <>
            <i className="fas fa-star" />
            <i className="far fa-star ml-1" />
            <i className="far fa-star ml-1" />
            <i className="far fa-star ml-1" />
            <i className="far fa-star ml-1" />
          </>
        );
      case "Intermediate-Low":
        return (
          <>
            <i className="fas fa-star" />
            <i className="fas fa-star ml-1" />
            <i className="far fa-star ml-1" />
            <i className="far fa-star ml-1" />
            <i className="far fa-star ml-1" />
          </>
        );
      case "Intermediate-High":
        return (
          <>
            <i className="fas fa-star" />
            <i className="fas fa-star ml-1" />
            <i className="fas fa-star ml-1" />
            <i className="far fa-star ml-1" />
            <i className="far fa-star ml-1" />
          </>
        );
      case "Advanced":
        return (
          <>
            <i className="fas fa-star" />
            <i className="fas fa-star ml-1" />
            <i className="fas fa-star ml-1" />
            <i className="fas fa-star ml-1" />
            <i className="far fa-star ml-1" />
          </>
        );
      case "Final":
        return (
          <>
            <i className="fas fa-star" />
            <i className="fas fa-star ml-1" />
            <i className="fas fa-star ml-1" />
            <i className="fas fa-star ml-1" />
            <i className="fas fa-star ml-1" />
          </>
        );
      default:
        break;
    }
  };

  return (
    <>
      {/* <span>Dificultad:</span>
      <br /> */}
      <span
        className="text-danger"
        title="Dificultad"
        style={{ cursor: "help" }}
      >
        {calculateDifficulty(difficulty)}
      </span>
    </>
  );
});

DifficultyStars.propTypes = {
  difficulty: PropTypes.string.isRequired,
};

export default DifficultyStars;
