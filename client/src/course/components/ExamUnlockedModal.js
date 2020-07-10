import React, { useState } from "react";
import { Image, Modal, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const ExamUnlockedModal = React.memo(({ setNewExamModal, show, newExamName }) => {
  //   const [show, setShow] = useState(true);

  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);

  return (
    <>
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Body className="text-center">
          <Image
            src="/images/lock.png"
            width="50"
            height="50"
            className="mb-3"
          />
          <h4>¡Nuevo examen!</h4>
          <span>
            El examen <strong>{newExamName}</strong> ha sido desbloqueado
          </span>
          <br />
          <Button className="mt-2" variant="primary" onClick={setNewExamModal}>
            Aceptar
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
});

ExamUnlockedModal.propTypes = {
  newExam: PropTypes.string.isRequired,
};

export default ExamUnlockedModal;
