import React, { useState } from "react";
import { Modal, ListGroup, Button } from "react-bootstrap";
import moment from "moment";
import "moment/locale/es";
import PropTypes from "prop-types";
import TeacherAPI from "../../../utils/TeacherAPI";
import ResponseForm from "./ResponseForm";

const ItemModal = React.memo(
  ({ msgId, sentAt, type, user, email, subject, body, seen, answered }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => {
      setShow(false);
      window.location.reload();
    };
    const handleShow = () => {
      TeacherAPI.t_markSeen(msgId)
        .then(() => console.log("marked seen."))
        .catch((err) => {
          console.log(err.response);
          err.response.data.msg
            ? alert(err.response.data.msg)
            : alert("Ocurrió un error al marcar mensaje como leído.");
        });
      setShow(true);
    };

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
          {seen ? null : (
            <i
              className="fas fa-certificate text-danger ml-auto"
              style={{ fontSize: "22px" }}
            />
          )}
        </ListGroup.Item>

        <Modal show={show} backdrop="static" keyboard={false}>
          <Modal.Body className="bg-light rounded shadow">
            <div className="d-flex">
              <h3 className="mb-3">Contenido del mensaje</h3>
              <Button
                className="ml-auto text-dark"
                variant="link"
                size="sm"
                title="Cerrar"
                onClick={handleClose}
              >
                <i className="fas fa-times" style={{ fontSize: "22px" }} />
              </Button>
            </div>
            <div className="d-flex flex-column">
              <h5>Fecha</h5>
              {moment(sentAt).format("L")}
              <h5 className="mt-3 text-dark">Tipo</h5>
              {type}
              <h5 className="mt-3 text-dark">Usuario</h5>
              {user}
              <h5 className="mt-3 text-dark">Correo</h5>
              {email}
              <h5 className="mt-3 text-dark">Asunto</h5>
              {subject}
              <h5 className="mt-3 text-dark">Mensaje</h5>
              {body}
              {/* response */}
              {type === "Estudiante" && !answered ? (
                <ResponseForm />
              ) : (
                <em className="mt-4">Este mensaje ya fue respondido</em>
              )}
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  }
);

ItemModal.propTypes = {
  msgId: PropTypes.string.isRequired,
  sentAt: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  seen: PropTypes.bool.isRequired,
  answered: PropTypes.bool.isRequired,
};

export default ItemModal;
