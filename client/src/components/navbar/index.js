import React from "react";
import "./navbar.scss";
import { Navbar, Col, Button, Container } from "react-bootstrap";
import CoursesDropdown from "./components/CoursesDropdown";

export default React.memo(() => {
  return (
    <Navbar id="mynavbar">
      <Container className="py-2">
        <Col className="d-flex justify-content-start">
          <CoursesDropdown />
        </Col>
        <Col className="d-flex justify-content-center">
          <h3 className="mb-1">
            <a href="/" id="myLogo">
              MeXmáticas
            </a>
          </h3>
        </Col>
        <Col className="d-flex flex-row justify-content-end align-items-center">
          <Button className="navbarItem mr-3" href="/login">
            Inicia Sesión
          </Button>
          <Button className="navbarItem" href="/signup">
            Regístrate
          </Button>
        </Col>
      </Container>
    </Navbar>
  );
});