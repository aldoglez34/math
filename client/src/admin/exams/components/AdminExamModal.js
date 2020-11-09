import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const AdminExamModal = React.memo(
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
          <i
            className="fas fa-pen-alt"
            style={{ fontSize: "5px !important" }}
          />
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
  modalTitle: PropTypes.string,
  modalHeader: PropTypes.string,
  //   Form: PropTypes.element,
  formLabel: PropTypes.string,
  formInitialText: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  courseId: PropTypes.string,
  topicId: PropTypes.string,
};

export default AdminExamModal;
