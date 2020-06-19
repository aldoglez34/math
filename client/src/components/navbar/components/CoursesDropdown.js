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
      {/* <h6 class="dropdown-header">Primaria</h6> */}
      <NavDropdown.Item href="/">Primaria</NavDropdown.Item>
      <NavDropdown.Item href="/">Secundaria</NavDropdown.Item>
      <NavDropdown.Item href="/">Preparatoria</NavDropdown.Item>
    </NavDropdown>
  );
});

export default CoursesDropdown;
