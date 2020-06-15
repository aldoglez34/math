import React from "react";
import { Container, Button } from "react-bootstrap";
import "./studentnav.scss";

const StudentNav = React.memo(() => {
  return (
    <Container fluid className="py-4" style={{ backgroundColor: "#0f5257" }}>
      <Container className="d-flex flex-row py-3">
        <div>
          <h2 style={{ fontWeight: "700" }} className="mb-0 text-white">
            aldoglez34
          </h2>
        </div>
        <Button className="ml-auto newCrouseBttn mb-1">
          <i className="fas fa-plus-square mr-1" />
          <span style={{ fontWeight: "bold" }}>CURSO</span>
        </Button>
      </Container>
    </Container>
  );
});

export default StudentNav;
