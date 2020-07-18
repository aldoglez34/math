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
            <br />
            <span className="text-danger">
              <strong>Básico</strong>
            </span>
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
            <br />
            <span className="text-danger">
              <strong>Básico-Intermedio</strong>
            </span>
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
            <br />
            <span className="text-danger">
              <strong>Intermedio</strong>
            </span>
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
            <br />
            <span className="text-danger">
              <strong>Intermedio-Avanzado</strong>
            </span>
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
            <br />
            <span className="text-danger">
              <strong>Avanzado</strong>
            </span>
          </>
        );
      default:
        break;
    }
  };

  return (
    <span className="text-danger" title="Dificultad" style={{ cursor: "help" }}>
      {calculateDifficulty()}
    </span>
  );
});

DifficultyStars.propTypes = {
  difficulty: PropTypes.string.isRequired,
};

export default DifficultyStars;
