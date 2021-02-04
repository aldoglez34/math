import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { string } from "prop-types";

export const ExitButton = React.memo(({ url }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        size="sm"
        variant="danger"
        className="shadow-sm"
        onClick={handleShow}
      >
        Abandonar
      </Button>

      <Modal show={show} onHide={handleClose} centered className="bg-light">
        <Modal.Header closeButton>
          <Modal.Title>
            <i className="fas fa-exclamation-triangle mr-2" />
            Advertencia
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="py-4 text-center">
          <span className="lead">
            ¿Estás seguro que deseas abandonar el examen? Tu avance será borrado
            y tendrás que empezar de nuevo.
          </span>
          <div className="d-flex flex-row justify-content-center mt-4">
            <Button
              variant="danger"
              onClick={() => (window.location.href = url)}
            >
              Abandonar
            </Button>
            <Button variant="link" className="ml-2" onClick={handleClose}>
              Continuar examen
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
});

ExitButton.propTypes = {
  url: string.isRequired,
};
