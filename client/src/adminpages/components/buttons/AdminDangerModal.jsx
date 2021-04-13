import React, { useState } from "react";
import { Button, Image, Modal } from "react-bootstrap";
import { func, node, string } from "prop-types";
import cn from "classnames";

import styles from "./admindangermodal.module.scss";

export const AdminDangerModal = React.memo(
  ({ deleteFn, icon, modalText, ...props }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
        <Button
          {...props}
          className={cn("ml-1", styles.button)}
          onClick={handleShow}
          size="sm"
        >
          {icon}
        </Button>

        <Modal show={show} onHide={handleClose} centered>
          <Modal.Body className="bg-light rounded shadow text-center py-4">
            <Image
              className="mb-3"
              height="130"
              src="/images/trash.png"
              width="130"
            />
            <div className="lead text-center mt-2">{modalText}</div>
            <div className="d-flex flex-row justify-content-center mt-4">
              <Button variant="dark" onClick={handleClose}>
                Cancelar
              </Button>
              <Button variant="danger" className="ml-2" onClick={deleteFn}>
                Borrar
                <i className="fas fa-trash-alt ml-2" />
              </Button>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  }
);

AdminDangerModal.propTypes = {
  deleteFn: func,
  icon: node.isRequired,
  modalText: string.isRequired,
};
