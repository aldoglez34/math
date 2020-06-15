import React from "react";
import { NavDropdown } from "react-bootstrap";
import "./coursesdropdown.scss";

const CoursesDropdown = React.memo(() => {
  return (
    <NavDropdown
      title={<span id="coursesDropdown">Cursos</span>}
      id="collasible-nav-dropdown"
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
