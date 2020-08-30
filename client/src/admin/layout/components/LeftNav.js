import React from "react";
import { Nav } from "react-bootstrap";
import "./leftnav.scss";

const LeftNav = React.memo(({ leftBarActive }) => {
  return (
    <Nav className="d-flex flex-column h-100" id="leftnavstyle">
      {/* logo */}
      <div className="d-flex flex-column text-center" id="adminlogoContainer">
        <span id="adminlogo">MeXmáticas</span>
        <span id="adminlogo2">admin</span>
      </div>
      {/* menu */}
      <Nav.Link
        className="navLinkStyle"
        href="/admin/courses"
        active={leftBarActive === "Cursos" ? true : false}
      >
        <i
          className="fas fa-graduation-cap"
          style={{ width: "26px", textAlign: "center" }}
        />
        <span className="ml-1">Cursos</span>
      </Nav.Link>
      <Nav.Link
        className="navLinkStyle"
        href="/admin/students"
        active={leftBarActive === "Alumnos" ? true : false}
      >
        <i
          className="fas fa-user-graduate"
          style={{ width: "26px", textAlign: "center" }}
        />
        <span className="ml-1">Alumnos</span>
      </Nav.Link>
    </Nav>
  );
});

export default LeftNav;
