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
        // window.location.href = "/";
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
      {/* <NavDropdown.Item href="/">Usuario</NavDropdown.Item>
      <NavDropdown.Divider /> */}
      <NavDropdown.Item onClick={logout}>
        <strong>Cerrar sesión</strong>
      </NavDropdown.Item>
    </NavDropdown>
  );
});

export default StudentDropdown;
