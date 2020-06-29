import React, { useEffect } from "react";
import { Modal } from "react-bootstrap";
import PropTypes from "prop-types";

const CorrectModal = React.memo(({ showCorrectModal, setShowCorrectModal }) => {
  const words = [
    "¡Increíble!",
    "¡Muy bien!",
    "¡Así se hace!",
    "¡Perfecto!",
    "¡Súper!",
    "¡Excelente!",
    "¡Sigue así!",
    "¡Correcto!",
    "¡Buen trabajo!",
    "¡Maravilloso!",
  ];

  useEffect(() => {
    // close modal after 2 seconds
    if (showCorrectModal) setTimeout(() => setShowCorrectModal(false), 1500);
  }, [showCorrectModal]);

  return (
    <>
      <Modal show={showCorrectModal} centered>
        <Modal.Body className="p-0">
          <div className="text-center bg-success rounded py-4">
            <h1 className="display-3 text-light">
              <i className="fas fa-check-circle" />
            </h1>
            <h1 className="text-light">
              {words[Math.floor(Math.random() * 10) + 1]}
            </h1>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
});

CorrectModal.propTypes = {
  showCorrectModal: PropTypes.bool.isRequired,
  setShowCorrectModal: PropTypes.func.isRequired,
};

export default CorrectModal;
