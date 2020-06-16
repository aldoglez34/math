import React from "react";
import { Card, Button } from "react-bootstrap";
import "./newcoursecard.scss";

const NewCourseCard = React.memo(() => {
  return (
    <Card className="shadow-sm border-0" id="newcoursecard">
      <Card.Body className="d-flex justify-content-center align-items-center">
        <Button variant="primary" className="my-4 my-lg-0">
          <i className="fas fa-plus-circle mr-1" />
          <strong>NUEVO</strong>
        </Button>
      </Card.Body>
    </Card>
  );
});

export default NewCourseCard;
