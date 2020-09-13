import React, { useState } from "react";
import { Modal, ListGroup } from "react-bootstrap";
import moment from "moment";
import "moment/locale/es";

const ItemModal = React.memo(({ sentAt, type, user, email, subject, body }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <ListGroup.Item
        className="d-flex py-4 courseitemstyle"
        action
        onClick={handleShow}
      >
        <div className="d-flex flex-column">
          <strong>Fecha</strong>
          {moment(sentAt).format("L")}
        </div>
        <div className="d-flex flex-column ml-3">
          <strong>Tipo</strong>
          {type}
        </div>
        <div className="d-flex flex-column ml-3">
          <strong>Correo</strong>
          {email}
        </div>
        <div className="d-flex flex-column ml-3">
          <strong>Asunto</strong>
          {subject}
        </div>
      </ListGroup.Item>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body className="bg-light rounded shadow">
          <h5>Fecha</h5>
          {moment(sentAt).format("L")}
          <h5 className="mt-3">Tipo</h5>
          {type}
          <h5 className="mt-3">Correo</h5>
          {email}
          <h5 className="mt-3">Asunto</h5>
          {subject}
          <h5 className="mt-3">Mensaje</h5>
          {body}
        </Modal.Body>
      </Modal>
    </>
  );
});

export default ItemModal;
