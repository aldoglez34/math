import React, { useEffect } from "react";
import { Modal } from "react-bootstrap";
import { bool, func } from "prop-types";

export const IncorrectModal = React.memo(
  ({ showIncorrect, setShowIncorrect }) => {
    useEffect(() => {
      // close modal after 2 seconds
      if (showIncorrect) setTimeout(() => setShowIncorrect(false), 800);
    }, [showIncorrect, setShowIncorrect]);

    return (
      <>
        <Modal show={showIncorrect} centered size="sm">
          <Modal.Body className="p-1">
            <div className="text-center bg-danger rounded py-4">
              <h1 className="display-3 text-light">
                <i className="fas fa-times-circle" />
              </h1>
              <h1 className="text-light">Incorrecto</h1>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  }
);

IncorrectModal.propTypes = {
  showIncorrect: bool.isRequired,
  setShowIncorrect: func.isRequired,
};
