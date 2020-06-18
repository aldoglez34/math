import React from "react";
import "./navbar.scss";
import { Navbar, Nav, Col, Container } from "react-bootstrap";
import CoursesDropdown from "./components/CoursesDropdown";
import { useSelector } from "react-redux";
import StudentDropdown from "./components/StudentDropdown";

const MyNavBar = React.memo(() => {
  const student = useSelector((state) => state.student);

  return (
    <Navbar
      fixed="top"
      collapseOnSelect
      expand="lg"
      id="mynavbar"
      variant="dark"
      className="py-2"
    >
      <Navbar.Brand href="/" className="d-block d-lg-none">
        <h3 className="mb-0" id="myLogo">
          MeXmáticas
        </h3>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Container className="px-0">
          {/* left */}
          <Nav as={Col} className=" d-none d-lg-block pr-0">
            <CoursesDropdown />
          </Nav>
          {/* middle */}
          <Nav as={Col} className="d-none d-lg-block text-center pr-0">
            <Navbar.Brand href="/">
              <h2 className="mb-0" id="myLogo">
                MeXmáticas
              </h2>
            </Navbar.Brand>
          </Nav>
          {/* right */}
          <Nav
            as={Col}
            className="justify-content-end align-items-lg-end mt-2 mt-lg-0 pr-0"
          >
            {student ? (
              <>
                <StudentDropdown />
              </>
            ) : (
              <>
                <Nav.Link className="navbarItem mr-lg-3" href="/login">
                  Inicia sesión
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

export default MyNavBar;
