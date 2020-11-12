import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const AdminEditQuestionBttn = React.memo(
  ({ Form, formLabel, formInitialText, examId }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
        <Button
          size="sm"
          className="editButton ml-2"
          onClick={handleShow}
          title="Editar"
        >
          <i className="fas fa-pen-alt" />
        </Button>

        <Modal show={show} onHide={handleClose} size="lg">
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

AdminEditQuestionBttn.propTypes = {
  modalTitle: PropTypes.string,
};

export default AdminEditQuestionBttn;
