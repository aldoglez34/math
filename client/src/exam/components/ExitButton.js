import React from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const ExitButton = React.memo(() => {
  const exam = useSelector((state) => state.exam);

  return (
    <Button
      href={"/course/#" + exam.topicName}
      variant="danger"
      className="ml-auto p-1"
    >
      <i className="fas fa-door-open mr-1" />
      <strong>Salir</strong>
    </Button>
  );
});

export default ExitButton;
