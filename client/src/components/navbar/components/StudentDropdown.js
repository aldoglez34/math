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
      <NavDropdown.Item className="text-right" href="/messages">
        <i className="fas fa-inbox mr-2" />
        <strong>Mensajes</strong>
      </NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item className="text-right" onClick={logout}>
        <i className="fas fa-door-open mr-2" />
        <strong>Cerrar sesión</strong>
      </NavDropdown.Item>
    </NavDropdown>
  );
});

export default StudentDropdown;
