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
      <NavDropdown.Item href="/courses/primaria">Primaria</NavDropdown.Item>
      <NavDropdown.Item href="/courses/secundaria">Secundaria</NavDropdown.Item>
      <NavDropdown.Item href="/courses/preparatoria">
        Preparatoria
      </NavDropdown.Item>
    </NavDropdown>
  );
});

export default CoursesDropdown;
