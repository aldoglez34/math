import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

const EditCourseName = React.memo(() => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="info"
        size="sm"
        className="ml-2"
        onClick={handleShow}
        title="Editar nombre"
      >
        <i className="fas fa-pen-alt " />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar nombre del curso</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form style={{ margin: "40px 0px" }}>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="text" />
            </Form.Group>
            <div className="text-right">
              <Button variant="primary" type="submit">
                Guardar
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
});

export default EditCourseName;
