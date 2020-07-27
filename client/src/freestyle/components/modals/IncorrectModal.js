import React, { useEffect } from "react";
import { Modal } from "react-bootstrap";
import PropTypes from "prop-types";

const IncorrectModal = React.memo(({ showIncorrect, setShowIncorrect }) => {
  useEffect(() => {
    // close modal after 2 seconds
    if (showIncorrect) setTimeout(() => setShowIncorrect(false), 1500);
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
});

IncorrectModal.propTypes = {
  showIncorrect: PropTypes.bool.isRequired,
  setShowIncorrect: PropTypes.func.isRequired,
};

export default IncorrectModal;
