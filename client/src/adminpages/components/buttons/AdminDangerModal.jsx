import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
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

        <Modal show={show} onHide={handleClose}>
          <Modal.Body>
            <div className="lead text-center mt-3">{modalText}</div>
            <div className="d-flex flex-row justify-content-center mt-4">
              <Button variant="danger" onClick={deleteFn}>
                Borrar
              </Button>
              <Button variant="dark" className="ml-2" onClick={handleClose}>
                Cancelar
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
