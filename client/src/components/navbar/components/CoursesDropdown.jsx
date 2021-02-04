import React, { useState, useEffect } from "react";
import { NavDropdown, Spinner } from "react-bootstrap";
import "./coursesdropdown.scss";
import { useSelector } from "react-redux";
import API from "../../../utils/API";

export const CoursesDropdown = () => {
  const zenMode = useSelector((state) => state.zenMode);

  const [courses, setCourses] = useState();

  useEffect(() => {
    API.fetchSchoolDropdownItems()
      .then((res) => setCourses(res.data))
      .catch((err) => {
        console.log(err);
        alert("Ocurrió un error, actualiza la página");
      });
  }, []);

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
      {courses ? (
        courses.length ? (
          courses.map((c) => (
            <NavDropdown.Item
              key={c}
              href={"/courses/" + c}
              className="dropdownStyle"
            >
              {c}
            </NavDropdown.Item>
          ))
        ) : null
      ) : (
        <div className="my-2 text-center">
          <Spinner animation="border" role="status" />
        </div>
      )}
    </NavDropdown>
  );
};
