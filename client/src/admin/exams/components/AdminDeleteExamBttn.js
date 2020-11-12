import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const AdminDeleteExamBttn = React.memo(({ examId }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        size="sm"
        className="deleteButton ml-2"
        onClick={handleShow}
        title="Borrar"
      >
        <i className="fas fa-times" />
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
            {/* <Form
              formLabel={formLabel}
              formInitialText={formInitialText}
              examId={examId}
            /> */}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
});

AdminDeleteExamBttn.propTypes = {
  examId: PropTypes.string.isRequired,
};

export default AdminDeleteExamBttn;
