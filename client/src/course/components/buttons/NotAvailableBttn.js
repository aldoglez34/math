import React from "react";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";

const NotAvailableeBttn = React.memo(() => {
  return (
    <>
      <OverlayTrigger
        placement="right"
        overlay={
          <Tooltip id="tooltip-disabled">
            Para iniciar este examen es necesario aprobar el nivel previo con 8
            o más
          </Tooltip>
        }
      >
        <span className="d-inline-block">
          <Button
            variant="primary"
            className="shadow-sm"
            style={{ pointerEvents: "none" }}
            disabled
          >
            <i className="fas fa-lock px-3" />
          </Button>
        </span>
      </OverlayTrigger>
    </>
  );
});

export default NotAvailableeBttn;
