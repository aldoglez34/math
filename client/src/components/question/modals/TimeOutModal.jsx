import React from "react";
import { bool, string } from "prop-types";
import { Button, Image, Modal } from "react-bootstrap";

import styles from "./timeoutmodal.module.scss";

export const TimeOutModal = React.memo(({ showTimeOut, url }) => {
  return (
    <Modal
      backdrop="static"
      centered
      className={styles.backgroundPhoto}
      keyboard={false}
      show={showTimeOut}
    >
      <Modal.Body className="bg-light rounded shadow text-center py-4">
        <Image height="130" src="/images/timeover.png" width="130" />
        <h3 className="text-dark mb-3 mt-3">Se ha acabado tu tiempo.</h3>
        <div className="mt-4">
          <Button onClick={() => (window.location.href = url)} variant="dark">
            Volver al curso
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
});

TimeOutModal.propTypes = {
  showTimeOut: bool,
  url: string,
};
