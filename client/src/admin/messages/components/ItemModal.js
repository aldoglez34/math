import React, { useState } from "react";
import { Modal, ListGroup, Button, Form, Row, Col } from "react-bootstrap";
import moment from "moment";
import "moment/locale/es";
import PropTypes from "prop-types";
import TeacherAPI from "../../../utils/TeacherAPI";
import ResponseForm from "./ResponseForm";

const ItemModal = React.memo(({ message }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    window.location.reload();
  };
  const handleShow = () => {
    TeacherAPI.t_markSeen(message._id)
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
          {moment(message.sentAt).format("L")}
        </div>
        <div className="d-flex flex-column ml-3">
          <strong>Tipo</strong>
          {message.type === "Student" ? "Estudiante" : "Invitado"}
        </div>
        <div className="d-flex flex-column ml-3">
          <strong>Correo</strong>
          {message.email}
        </div>
        <div className="d-flex flex-column ml-3">
          <strong>Curso/Tema/Pregunta</strong>
          {message.subject}
        </div>
        {message.seen ? null : (
          <i
            className="fas fa-certificate text-danger ml-auto"
            style={{ fontSize: "22px" }}
            title="Nuevo"
          />
        )}
        {message.answered ? (
          <i
            className="fas fa-check-circle text-primary ml-auto"
            style={{ fontSize: "22px" }}
            title="Respondido"
          />
        ) : null}
      </ListGroup.Item>

      <Modal show={show} backdrop="static" keyboard={false}>
        <Modal.Body className="bg-light rounded shadow">
          {/* top */}
          <div className="d-flex">
            <h3 className="mb-3">Mensaje...</h3>
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
          <Row>
            <Col>
              {" "}
              <h5 className="text-dark">Cuenta</h5>
              {message.type === "Student" ? "Estudiante" : "Invitado"}
            </Col>
            <Col>
              {" "}
              {message.type === "Student" ? (
                <div className="d-flex flex-column">
                  <h5 className="text-dark">Usuario</h5>
                  {message.username}
                </div>
              ) : (
                <div className="d-flex flex-column">
                  <h5 className="text-dark">Nombre</h5>
                  {message.name}
                </div>
              )}
            </Col>
            <Col>
              {" "}
              <h5 className="text-dark">Fecha</h5>
              {moment(message.sentAt).format("L")}
            </Col>
          </Row>
          <div>
            {message.type === "Student" ? (
              <div className="d-flex flex-column mt-3">
                <h5 className="text-dark">Nombre</h5>
                {message.name}
              </div>
            ) : null}
            <div className="d-flex flex-column mt-3">
              <h5 className="text-dark">Curso/Tema/Pregunta</h5>
              {message.subject}
            </div>
            <div className="d-flex flex-column mt-3">
              <h5 className="text-dark">Correo</h5>
              {message.email}
            </div>
            <h5 className="mt-3 text-dark">Mensaje</h5>
            <Form>
              <Form.Group>
                <Form.Control
                  as="textarea"
                  rows="5"
                  placeholder={message.body}
                  disabled
                />
              </Form.Group>
            </Form>
            {/* response */}
            {message.type === "Guest" ? null : message.type === "Student" &&
              !message.answered ? (
              <ResponseForm msgId={message._id} email={message.email} />
            ) : (
              <>
                <h5 className="mt-3 text-dark">Respuesta</h5>
                <Form>
                  <Form.Group>
                    <Form.Control
                      as="textarea"
                      rows="5"
                      placeholder={message.response}
                      disabled
                    />
                  </Form.Group>
                </Form>
                <small className="text-muted">
                  Respondido el {moment(message.respondedAt).format("LLL")}
                </small>
              </>
            )}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
});

ItemModal.propTypes = {
  message: PropTypes.object.isRequired,
};

export default ItemModal;
