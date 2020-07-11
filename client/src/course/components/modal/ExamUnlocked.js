import React from "react";
import { Image, Modal, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { clearUnlockedExam } from "../../../redux/actions/unlocked";

const ExamUnlocked = React.memo(({ showUnlocked, setShowExamUnlocked_ }) => {
  const dispatch = useDispatch();

  const unlocked = useSelector((state) => state.unlocked);

  return (
    <>
      <Modal
        centered
        show={showUnlocked}
        onHide={() => {
          // close modal
          setShowExamUnlocked_(false);
          // clear unlocked on redux
          dispatch(clearUnlockedExam());
        }}
      >
        <Modal.Body className="text-center">
          <Image
            src="/images/lock.png"
            width="50"
            height="50"
            className="mb-3"
          />
          <h4>¡Nuevo examen!</h4>
          <span>
            El examen <strong>{unlocked ? unlocked.name : null}</strong> ha sido
            desbloqueado
          </span>
          <br />
          <Button
            className="mt-2"
            variant="primary"
            onClick={() => {
              // close modal
              setShowExamUnlocked_(false);
              // clear unlocked on redux
              dispatch(clearUnlockedExam());
            }}
          >
            Aceptar
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
});

ExamUnlocked.propTypes = {
  showUnlocked: PropTypes.bool.isRequired,
  setShowExamUnlocked_: PropTypes.func.isRequired,
};

export default ExamUnlocked;
