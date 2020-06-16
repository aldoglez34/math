import React from "react";
import { Card, Button } from "react-bootstrap";

const NewCourseCard = React.memo(() => {
  return (
    <Card
      style={{
        width: "20rem",
        backgroundImage: "url('/images/newcoursecardback.png')",
      }}
      className="shadow-sm border-0"
    >
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
