import React from "react";
import { Button } from "react-bootstrap";

const FreestyleExitButton = React.memo(() => {
  return (
    <Button href="/course" variant="danger" className="ml-auto p-1">
      <i className="fas fa-door-open mr-1" />
      <strong>Salir</strong>
    </Button>
  );
});

export default FreestyleExitButton;
