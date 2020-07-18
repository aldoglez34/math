import React from "react";
import PropTypes from "prop-types";

const DifficultyStars = React.memo(({ difficulty }) => {
  const calculateDifficulty = () => {
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

  const translateDiff = () => {
    switch (difficulty) {
      case "Basic":
        return "Dificultad: Básico";
      case "Intermediate-Low":
        return "Dificultad: Intermedio-Básico";
      case "Intermediate-High":
        return "Dificultad: Intermedio-Alto";
      case "Advanced":
        return "Dificultad: Avanzado";
      case "Final":
        return "Dificultad: Final";
      default:
        break;
    }
  };

  return (
    <span
      className="text-danger"
      title={translateDiff()}
      style={{ cursor: "help" }}
    >
      {calculateDifficulty()}
    </span>
  );
});

DifficultyStars.propTypes = {
  difficulty: PropTypes.string.isRequired,
};

export default DifficultyStars;
