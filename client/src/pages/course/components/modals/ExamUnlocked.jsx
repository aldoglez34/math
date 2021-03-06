import React from "react";
import { Button, Image, Modal } from "react-bootstrap";
import { bool, func } from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { clearUnlockedExam } from "../../../../redux/actions/unlocked";
import { DifficultyStars } from "../";
import { ImageFromFirebase } from "../../../../adminpages/components";

export const ExamUnlocked = React.memo(
  ({ showUnlocked, setShowExamUnlocked_ }) => {
    const dispatch = useDispatch();

    const unlocked = useSelector((state) => state.unlocked);

    return unlocked ? (
      <>
        <Modal
          show={showUnlocked}
          onHide={() => {
            setShowExamUnlocked_(false);
            dispatch(clearUnlockedExam());
          }}
        >
          <Modal.Body className="text-center p-4 bg-light">
            {unlocked.difficulty !== "Freestyle" ? (
              <div className="d-flex flex-column">
                <div className="my-2">
                  <Image src="/images/lock.png" width="80" height="80" />
                </div>
                <h3 className="mb-2 text-dark">¡Nuevo examen!</h3>
                <span className="mb-1 lead">
                  El examen{" "}
                  <span style={{ fontWeight: 600 }}>{unlocked.name}</span> ha
                  sido desbloqueado
                </span>
                <span className="mb-1">
                  Una nueva dificultad de este tema ha sido desbloqueada
                </span>
                <div className="mb-3">
                  <DifficultyStars difficulty={unlocked.difficulty} />
                </div>
                <div className="mb-1">
                  <Button
                    className="shadow-sm genericButton"
                    onClick={() => {
                      setShowExamUnlocked_(false);
                      dispatch(clearUnlockedExam());
                    }}
                  >
                    Aceptar
                  </Button>
                </div>
              </div>
            ) : (
              <div className="d-flex flex-column">
                <div className="my-2">
                  <ImageFromFirebase
                    className="mb-3"
                    path={unlocked.rewardLink}
                    width="100"
                    height="140"
                    title={unlocked.rewardName}
                  />
                </div>
                <h3 className="mb-2 text-dark">¡Felicidades!</h3>
                <span className="mb-2 lead">
                  Has obtenido la recompensa{" "}
                  <span style={{ fontWeight: 600 }}>{unlocked.rewardName}</span>{" "}
                  que corresponde a aprobar todos los exámenes del tema{" "}
                  <span style={{ fontWeight: 600 }}>{unlocked.topicName}.</span>
                </span>
                <div className="mt-4 pt-3 mb-3">
                  <Image src="/images/freestyle.png" width="90" height="90" />
                </div>
                <span className="mb-3">
                  Has desbloqueado la nueva modalidad{" "}
                  <strong>{unlocked.name}</strong>, donde responderás la mayor
                  cantidad de preguntas que puedas sobre el tema{" "}
                  <strong>{unlocked.topicName}</strong> con un límite de tiempo,
                  competirás con los puntos que hagas contra todos los
                  estudiantes que han llevado este curso, ¡Mucha suerte!
                </span>
                <div className="text-center mt-3 mb-1">
                  <Button
                    className="shadow-sm genericButton"
                    onClick={() => {
                      setShowExamUnlocked_(false);
                      dispatch(clearUnlockedExam());
                    }}
                  >
                    Aceptar
                  </Button>
                </div>
              </div>
            )}
          </Modal.Body>
        </Modal>
      </>
    ) : null;
  }
);

ExamUnlocked.propTypes = {
  setShowExamUnlocked_: func.isRequired,
  showUnlocked: bool.isRequired,
};
