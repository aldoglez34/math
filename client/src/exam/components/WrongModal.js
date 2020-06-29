import React, { useEffect } from "react";
import { Modal } from "react-bootstrap";
import PropTypes from "prop-types";

const WrongModal = React.memo(({ showWrongModal, setShowWrongModal }) => {
  useEffect(() => {
    // close modal after 2 seconds
    if (showWrongModal) setTimeout(() => setShowWrongModal(false), 1500);
  }, [showWrongModal]);

  return (
    <>
      <Modal show={showWrongModal} centered>
        <Modal.Body className="p-0">
          <div className="text-center bg-danger rounded py-4">
            <h1 className="display-3 text-light">
              <i className="fas fa-times-circle" />
            </h1>
            <h1 className="text-light">{"Incorrecto :("}</h1>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
});

WrongModal.propTypes = {
  showWrongModal: PropTypes.bool.isRequired,
  setShowWrongModal: PropTypes.func.isRequired,
};

export default WrongModal;
