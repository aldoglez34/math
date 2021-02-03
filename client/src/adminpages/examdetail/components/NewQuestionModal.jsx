import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { string } from "prop-types";

export const NewQuestionModal = React.memo(({ text, Form }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        className="shadow-sm"
        onClick={handleShow}
        size="sm"
        variant="dark"
      >
        <span>{text}</span>
      </Button>

      <Modal show={show} onHide={handleClose} size="lg" backdrop="static">
        <Modal.Body className="bg-light rounded">
          <div className="d-flex">
            <h3 className="mb-0 text-dark">{text}</h3>
            <Button
              variant="link"
              className="text-dark ml-auto"
              onClick={handleClose}
            >
              <i className="fas fa-times" />
            </Button>
          </div>
          <div className="my-3">
            <Form />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
});

NewQuestionModal.propTypes = {
  text: string.isRequired,
  examId: string.isRequired,
};
