import React from "react";
import { NavDropdown } from "react-bootstrap";
import "./coursesdropdown.scss";
import { useSelector } from "react-redux";

const CoursesDropdown = React.memo(() => {
  const zenMode = useSelector((state) => state.zenMode);

  return (
    <NavDropdown
      id="coursesDropdownTextToggle"
      title={
        <span id="coursesDropdownText" className="px-0">
          {zenMode ? <s>Cursos</s> : <span>Cursos</span>}
          <i
            className="fas fa-chevron-down ml-1"
            style={{ fontSize: "13px" }}
          />
        </span>
      }
      disabled={zenMode ? true : false}
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
