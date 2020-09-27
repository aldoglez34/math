import React from "react";
import { Spinner } from "react-bootstrap";

const AdminSpinner = React.memo(() => {
  return (
    <div className="h-100 d-flex justify-content-center align-items-center">
      <Spinner variant="success" animation="border" role="status">
        <span className="sr-only">Cargando...</span>
      </Spinner>
    </div>
  );
});

export default AdminSpinner;
