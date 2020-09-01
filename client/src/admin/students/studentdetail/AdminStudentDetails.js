import React, { useState, useEffect } from "react";
import AdminLayout from "../../layout/AdminLayout";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import TeacherAPI from "../../../utils/TeacherAPI";
import moment from "moment";
import "moment/locale/es";
import History from "./components/History";

const AdminStudentDetails = React.memo((props) => {
  const [student, setStudent] = useState();

  useEffect(() => {
    const studentId = props.routeProps.match.params.studentId;
    TeacherAPI.t_fetchOneStudent(studentId)
      .then((res) => setStudent(res.data))
      .catch((err) => {
        console.log(err);
        alert("Ocurrió un error");
      });
  }, [props.routeProps.match.params.studentId]);

  return (
    <AdminLayout
      title="Editar Alumno"
      leftBarActive="Alumnos"
      backBttn="/admin/students"
    >
      {student ? (
        <Container>
          <Row>
            <Col className="px-0 mt-4" md={{ offset: 2, span: 8 }}>
              {/* username */}
              <span className="text-muted">Usuario</span>
              <h1 className="mb-0">{student.email.split("@", 1)[0]}</h1>
              <br />
              {/* email */}
              <span className="text-muted">Correo electrónico</span>
              <h2 className="mb-0">{student.email}</h2>
              <br />
              {/* name */}
              <span className="text-muted">Nombre completo</span>
              <h3 className="mb-0">
                {student.name +
                  " " +
                  student.firstSurname +
                  " " +
                  student.secondSurname}
              </h3>
              <br />
              {/* registered at */}
              <span className="text-muted">Fecha de registro</span>
              <h5>{moment(student.registeredAt).format("LL")}</h5>
              <br />
              {/* courses bought */}
              <span className="text-muted">Cursos comprados</span>
              {student.courses.length ? (
                <ul>
                  {student.courses.map((c) => {
                    return (
                      <li key={c}>
                        <h5 className="mb-0">{c}</h5>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <h5>Ninguno</h5>
              )}
              <br />
              {/* attempts */}
              <span className="text-muted">
                Exámenes presentados / Calificaciones perfectas
              </span>
              <h2 className="mb-0">
                {student.attempts.length +
                  " / " +
                  student.attempts.filter((a) => a.grade === 10).length}
                <History attempts={student.attempts} />
              </h2>
              <br />
              {/* medallas */}
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
              <br />
            </Col>
          </Row>
        </Container>
      ) : (
        <div className="text-center mt-4">
          <Spinner animation="border" variant="success" />
        </div>
      )}
    </AdminLayout>
  );
});

export default AdminStudentDetails;
