import React, { useState, useEffect } from "react";
import { NavDropdown, Badge } from "react-bootstrap";
import "./studentdropdown.scss";
import { useSelector, useDispatch } from "react-redux";
import * as studentActions from "../../../redux/actions/student";
import firebase from "../../../firebase/firebase";
import API from "../../../utils/API";

const StudentDropdown = React.memo(() => {
  const dispatch = useDispatch();

  const student = useSelector((state) => state.student);

  const zenMode = useSelector((state) => state.zenMode);

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

  const [unseen, setUnseen] = useState();

  useEffect(() => {
    API.fetchUnseeenMessages(student._id)
      .then((res) => {
        // console.log(res.data);
        setUnseen(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert("Ocurrió un error al cargar tus mensajes, actualiza la página");
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <NavDropdown
      id="studentDropdownToggle"
      alignRight
      title={
        <span id="studentDropdownText">
          {student ? (
            zenMode ? (
              <s>{student.email}</s>
            ) : (
              <span>{student.email}</span>
            )
          ) : null}
          <i
            className="fas fa-chevron-down ml-1"
            style={{ fontSize: "13px" }}
          />
          {unseen > 0 ? (
            <Badge variant="danger" className="ml-2" title="Nuevos mensajes">
              <i className="fas fa-inbox" />
              <span className="ml-1">{unseen}</span>
            </Badge>
          ) : null}
        </span>
      }
      disabled={zenMode ? true : false}
    >
      <NavDropdown.Item href="/dashboard" className="dropdownStyle">
        Mis cursos
      </NavDropdown.Item>
      <NavDropdown.Item href="/messages" className="dropdownStyle">
        Mis mensajes
        {unseen > 0 ? (
          <Badge variant="danger" className="ml-1" title="Nuevos mensajes">
            <i className="fas fa-inbox" />
            <span className="ml-1">{unseen}</span>
          </Badge>
        ) : null}
      </NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item onClick={logout} className="dropdownStyle">
        Cerrar sesión
      </NavDropdown.Item>
    </NavDropdown>
  );
});

export default StudentDropdown;
