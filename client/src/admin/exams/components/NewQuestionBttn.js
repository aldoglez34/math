import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const NewQuestionBttn = React.memo(({ text, Form, examId }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow} className="adminaddbttn" size="sm">
        <i className="fas fa-plus-square mr-2" />
        <span>{text}</span>
      </Button>

      <Modal show={show} onHide={handleClose}>
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
            <Form examId={examId} />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
});

NewQuestionBttn.propTypes = {
  text: PropTypes.string.isRequired,
  examId: PropTypes.string.isRequired,
};

export default NewQuestionBttn;
