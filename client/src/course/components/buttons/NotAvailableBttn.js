import React from "react";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";

const NotAvailableeBttn = React.memo(() => {
  return (
    <>
      <OverlayTrigger
        placement="right"
        overlay={
          <Tooltip>
            Para iniciar este examen es necesario aprobar el nivel previo con 8
            o más
          </Tooltip>
        }
      >
        <Button variant="primary">Iniciar</Button>
      </OverlayTrigger>
    </>
  );
});

export default NotAvailableeBttn;
