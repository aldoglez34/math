import React from "react";
import { NavDropdown } from "react-bootstrap";
import "./studentdropdown.scss";
import { useSelector, useDispatch } from "react-redux";
import * as studentActions from "../../../redux/actions/student";
import firebase from "../../../firebase/firebase";

const StudentDropdown = React.memo(() => {
  const dispatch = useDispatch();

  const username = useSelector((state) => state.student);

  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch(studentActions.logoutStudent());
        alert("¡Adiós, vuelve pronto!");
      })
      .catch((error) => console.log(error));
  };

  return (
    <NavDropdown
      id="studentDropdownToggle"
      alignRight
      title={
        <span id="studentDropdownText">
          {username ? username.email : null}
          <i
            className="fas fa-chevron-down ml-1"
            style={{ fontSize: "13px" }}
          />
        </span>
      }
    >
      <NavDropdown.Item href="/dashboard" className="dropdownStyle">
        Mis cursos
      </NavDropdown.Item>
      <NavDropdown.Item href="/messages" className="dropdownStyle">
        Mis mensajes
      </NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item onClick={logout} className="dropdownStyle">
        Cerrar sesión
      </NavDropdown.Item>
    </NavDropdown>
  );
});

export default StudentDropdown;
