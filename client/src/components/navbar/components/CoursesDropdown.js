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
      <NavDropdown.Item href="/courses/primaria" className="dropdownStyle">
        Primaria
      </NavDropdown.Item>
      <NavDropdown.Item href="/courses/secundaria" className="dropdownStyle">
        Secundaria
      </NavDropdown.Item>
      <NavDropdown.Item href="/courses/preparatoria" className="dropdownStyle">
        Preparatoria
      </NavDropdown.Item>
    </NavDropdown>
  );
});

export default CoursesDropdown;
