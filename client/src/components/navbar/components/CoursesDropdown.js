import React from "react";
import { NavDropdown } from "react-bootstrap";
import "./coursesdropdown.scss";

const CoursesDropdown = React.memo(() => {
  return (
    <NavDropdown
      id="coursesDropdownTextToggle"
      title={
        <span id="coursesDropdownText" className="px-0">
          Cursos
          <i
            className="fas fa-chevron-down ml-1"
            style={{ fontSize: "13px" }}
          />
        </span>
      }
    >
      <NavDropdown.Item href="/">Álgebra</NavDropdown.Item>
      <NavDropdown.Item href="/">Aritmética</NavDropdown.Item>
      <NavDropdown.Item href="/">Cálculo</NavDropdown.Item>
      <NavDropdown.Item href="/">Ecucaciones</NavDropdown.Item>
      <NavDropdown.Item href="/">Geometría</NavDropdown.Item>
      <NavDropdown.Item href="/">Trigonometría</NavDropdown.Item>
    </NavDropdown>
  );
});

export default CoursesDropdown;
