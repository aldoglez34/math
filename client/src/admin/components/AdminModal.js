import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./adminmodal.scss";
import PropTypes from "prop-types";

const AdminModal = React.memo(
  ({ modalTitle, Form, formLabel, formInitialText, courseId }) => {
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
          <i className="fas fa-pen-alt " />
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
                courseId={courseId}
              />
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  }
);

AdminModal.propTypes = {
  modalTitle: PropTypes.string,
  modalHeader: PropTypes.string,
  //   Form: PropTypes.element,
  formLabel: PropTypes.string,
  formInitialText: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default AdminModal;
