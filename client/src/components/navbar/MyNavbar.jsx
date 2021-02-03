import React from "react";
import { Navbar, Nav, Col, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { CoursesDropdown, StudentDropdown } from "./components";
import "./navbar.scss";

export const MyNavbar = React.memo(() => {
  const student = useSelector((state) => state.student);

  const zenMode = useSelector((state) => state.zenMode);

  return (
    <Navbar
      fixed="top"
      collapseOnSelect
      expand="lg"
      id="mynavbar"
      variant="dark"
      className="py-2 shadow"
    >
      {zenMode ? (
        <Navbar.Brand className="d-block d-lg-none">
          <h2 className="mb-0 mainLogo zenLogo">
            <s>MeXmáticas</s>
          </h2>
        </Navbar.Brand>
      ) : (
        <Navbar.Brand href="/" className="d-block d-lg-none">
          <h2 className="mb-0 mainLogo">MeXmáticas</h2>
        </Navbar.Brand>
      )}
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Container className="px-0 px-lg-3">
          {/* left */}
          <Nav as={Col} className="d-none d-lg-block pr-0">
            <div className="d-flex flex-row">
              <CoursesDropdown />
            </div>
          </Nav>
          {/* middle */}
          <Nav as={Col} className="d-none d-lg-block text-center pr-0">
            {zenMode ? (
              <Navbar.Brand>
                <h2 className="mb-0 mainLogo zenLogo">
                  <s>MeXmáticas</s>
                </h2>
              </Navbar.Brand>
            ) : (
              <Navbar.Brand href="/">
                <h2 className="mb-0 mainLogo">MeXmáticas</h2>
              </Navbar.Brand>
            )}
          </Nav>
          {/* right */}
          <Nav
            as={Col}
            className="justify-content-end align-items-lg-end mt-2 mt-lg-0 pr-0"
          >
            {student ? (
              <>
                {/* small */}
                <div className="d-block d-lg-none">
                  <h6
                    className="dropdown-header px-0 pb-0"
                    style={{ color: "#3d4d53" }}
                  >
                    CURSOS
                  </h6>
                  <CoursesDropdown />
                  <h6
                    className="dropdown-header px-0 pb-0"
                    style={{ color: "#3d4d53" }}
                  >
                    MI USUARIO
                  </h6>
                  <StudentDropdown unseenMessages={student.unseenMessages} />
                </div>
                <div className="d-none d-lg-block">
                  <StudentDropdown unseenMessages={student.unseenMessages} />
                </div>
              </>
            ) : (
              <>
                <Nav.Link className="navbarItem mr-lg-4" href="/login">
                  Inicia Sesión
                </Nav.Link>
                <Nav.Link className="navbarItem" href="/signup">
                  Regístrate
                </Nav.Link>
                <Nav className="d-block d-lg-none">
                  <CoursesDropdown />
                </Nav>
              </>
            )}
          </Nav>
        </Container>
      </Navbar.Collapse>
    </Navbar>
  );
});