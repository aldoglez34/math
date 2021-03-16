import React from "react";
import { Button, Image } from "react-bootstrap";
import { object } from "prop-types";
import { DifficultyStars } from "../../course/components";

export const UnlockedExam = ({ unlockedExam }) => {
  return (
    <div className="text-center d-flex flex-column">
      <h3 className="mainMsg">¡Nuevo Examen!</h3>
      <div className="my-3">
        <Image src="/images/lock.png" width="120" height="120" />
      </div>
      <span className="mb-1 lead">
        El examen{" "}
        <span style={{ fontWeight: 600, color: "#3d5257" }}>
          {unlockedExam.name}
        </span>{" "}
        ha sido desbloqueado.
      </span>
      <div className="mt-3 mb-1">
        <DifficultyStars difficulty={unlockedExam.difficulty} />
      </div>
    </div>
  );
};

UnlockedExam.propTypes = {
  unlockedExam: object.isRequired,
};
