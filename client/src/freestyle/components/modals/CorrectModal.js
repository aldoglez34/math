import React, { useEffect } from "react";
import { Modal } from "react-bootstrap";
import PropTypes from "prop-types";

const CorrectModal = React.memo(({ showCorrect, setShowCorrect }) => {
  useEffect(() => {
    // close modal after 2 seconds
    if (showCorrect) setTimeout(() => setShowCorrect(false), 1500);
  }, [showCorrect, setShowCorrect]);

  return (
    <>
      <Modal show={showCorrect} centered size="sm">
        <Modal.Body className="p-1">
          <div className="text-center bg-success rounded py-4">
            <h1 className="display-3 text-light">
              <i className="fas fa-check-circle" />
            </h1>
            <h1 className="text-light">Correcto</h1>
            <h3 className="text-warning">+1 pts.</h3>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
});

CorrectModal.propTypes = {
  showCorrect: PropTypes.bool.isRequired,
  setShowCorrect: PropTypes.func.isRequired,
};

export default CorrectModal;
