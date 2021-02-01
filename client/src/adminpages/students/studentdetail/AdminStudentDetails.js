import React, { useState, useEffect } from "react";
import AdminLayout from "../../layout/AdminLayout";
import { Container, Row, Col } from "react-bootstrap";
import TeacherAPI from "../../../utils/TeacherAPI";
import moment from "moment";
import "moment/locale/es";
import AdminSpinner from "../../components/AdminSpinner";
import AdminButton from "../../components/AdminButton";

const AdminStudentDetails = React.memo((props) => {
  const [student, setStudent] = useState();

  useEffect(() => {
    const studentId = props.routeProps.match.params.studentId;

    TeacherAPI.t_fetchOneStudent(studentId)
      .then((res) => {
        setStudent(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert("Ocurrió un error");
      });
  }, [props.routeProps.match.params.studentId]);

  return student ? (
    <AdminLayout
      backBttn="/admin/students"
      title="Detalle del Alumno"
      leftBarActive="Alumnos"
    >
      <Container fluid>
        {/* username */}
        <Row>
          <Col>
            <span className="text-muted">Usuario</span>
            <h1>{student.email.split("@", 1)[0]}</h1>
          </Col>
        </Row>
        {/* email */}
        <Row>
          <Col>
            <span className="text-muted">Correo electrónico</span>
            <h2>{student.email}</h2>
          </Col>
        </Row>
        {/* name */}
        <Row>
          <Col>
            <span className="text-muted">Nombre completo</span>
            <h3>
              {student.name +
                " " +
                student.firstSurname +
                " " +
                student.secondSurname}
            </h3>
          </Col>
        </Row>
        {/* registered at */}
        <Row>
          <Col>
            <span className="text-muted">Fecha de registro</span>
            <h5>
              <i className="far fa-calendar-alt mr-2" />
              {moment(student.registeredAt).format("LL")}
            </h5>
          </Col>
        </Row>
        {/* courses bought */}
        <Row>
          <Col>
            <span className="text-muted d-flex">Cursos comprados</span>
            {student.courses.length ? (
              <ul className="mb-2">
                {student.courses.map((c) => {
                  return (
                    <li key={c._id}>
                      <h5 className="mb-0">{c.name}</h5>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <h5>Ninguno</h5>
            )}
            <AdminButton
              content={
                <>
                  <i className="fas fa-shopping-cart mr-2" />
                  <span>Asignar curso</span>
                </>
              }
              link={
                "/admin/students/unpurchased/" +
                props.routeProps.match.params.studentId
              }
            />
          </Col>
        </Row>
        {/* attempts */}
        <Row>
          <Col>
            <span className="text-muted d-flex">
              Exámenes presentados / Calificaciones perfectas
            </span>
            <h2 className="mb-1">
              {student.attempts.length +
                " / " +
                student.attempts.filter((a) => a.grade === 10).length}
            </h2>
            <AdminButton
              content={
                <>
                  <i className="fas fa-history mr-2" />
                  <span>Ver historial</span>
                </>
              }
              link={
                "/admin/students/history/" +
                props.routeProps.match.params.studentId
              }
            />
          </Col>
        </Row>
        {/* medallas */}
        <Row>
          <Col>
            <span className="text-muted">Medallas</span>
            {student.rewards.length ? (
              <ul>
                {student.rewards.map((r) => {
                  return (
                    <li key={r.name}>
                      <h5 className="mb-0">{r.name}</h5>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <h5>Sin medallas</h5>
            )}
          </Col>
        </Row>
      </Container>
    </AdminLayout>
  ) : (
    <AdminSpinner />
  );
});

export default AdminStudentDetails;
