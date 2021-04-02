import React, { useState } from "react";
import { Button, Image, Modal } from "react-bootstrap";
import { string } from "prop-types";

import styles from "./exitbutton.module.scss";

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

      <Modal
        backdrop="static"
        centered
        className={styles.backgroundPhoto}
        keyboard={false}
        show={show}
        centered
      >
        <Modal.Body className="bg-light rounded shadow text-center py-4">
          <Image height="130" src="/images/warning.png" width="130" />
          <h5 className="text-dark mb-3 mt-3">
            ¿Estás seguro que deseas abandonar el examen? Tu avance será borrado
            y tendrás que empezar de nuevo.
          </h5>
          <div className="d-flex flex-row justify-content-center mt-4">
            <Button
              variant="danger"
              onClick={() => (window.location.href = url)}
            >
              Abandonar
            </Button>
            <Button
              variant="link"
              className="ml-2 text-success"
              onClick={handleClose}
            >
              Continuar
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
