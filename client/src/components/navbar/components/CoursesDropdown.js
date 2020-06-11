import React from "react";
import { Dropdown } from "react-bootstrap";
import "./coursesdropdown.scss";

const CoursesDropdown = React.memo(() => {
  return (
    <Dropdown>
      <Dropdown.Toggle id="coursesDropdown">
        Cursos
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#">Aritmética</Dropdown.Item>
        <Dropdown.Item href="#">Álgebra</Dropdown.Item>
        <Dropdown.Item href="#">Cálculo</Dropdown.Item>
        <Dropdown.Item href="#">Ecucaciones</Dropdown.Item>
        <Dropdown.Item href="#">Geometría</Dropdown.Item>
        <Dropdown.Item href="#">Trigonometría</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
});

export default CoursesDropdown;
