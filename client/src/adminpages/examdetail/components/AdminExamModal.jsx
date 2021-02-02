import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { number, oneOfType, string } from "prop-types";

export const AdminExamModal = React.memo(
  ({ modalTitle, Form, formLabel, formInitialText, examId }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
        <Button
          size="sm"
          className="editButton ml-2"
          onClick={handleShow}
          title={modalTitle}
        >
          <i className="fas fa-pen-alt" />
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Body className="bg-light rounded">
            <div className="d-flex">
              <h3 className="mb-0 text-dark">Editar</h3>
              <Button
                variant="link"
                className="text-dark ml-auto"
                onClick={handleClose}
              >
                <i className="fas fa-times" />
              </Button>
            </div>
            <div className="my-3">
              <Form
                formLabel={formLabel}
                formInitialText={formInitialText}
                examId={examId}
              />
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  }
);

AdminExamModal.propTypes = {
  modalTitle: string,
  modalHeader: string,
  formLabel: string,
  formInitialText: oneOfType([string, number]),
  courseId: string,
  topicId: string,
};
