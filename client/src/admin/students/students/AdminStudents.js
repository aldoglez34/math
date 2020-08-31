import React, { useState, useEffect } from "react";
import AdminLayout from "../../layout/AdminLayout";
import { Container, Row, Col, Spinner, ListGroup } from "react-bootstrap";
import StudentItem from "./components/StudentItem";
import TeacherAPI from "../../../utils/TeacherAPI";

const AdminStudents = React.memo(() => {
  const [students, setStudents] = useState();

  useEffect(() => {
    TeacherAPI.t_fetchStudents()
      .then((res) => setStudents(res.data))
      .catch((err) => {
        console.log(err);
        alert("Ocurrió un error");
      });
  }, []);

  return (
    <AdminLayout title="Alumnos" leftBarActive="Alumnos">
      <Container fluid>
        <Row>
          <Col className="px-0 mt-4" md={{ offset: 3, span: 7 }}>
            {students ? (
              students.length ? (
                <>
                  <h3 className="mb-3" style={{ color: "#0f5257" }}>
                    Selecciona un alumno...
                  </h3>
                  <ListGroup className="shadow-sm">
                    {students.map((s) => (
                      <StudentItem
                        key={s._id}
                        name={
                          s.name + " " + s.firstSurname + " " + s.secondSurname
                        }
                        registeredAt={s.registeredAt}
                        email={s.email}
                        _id={s._id}
                      />
                    ))}
                  </ListGroup>
                </>
              ) : (
                <div className="text-center mt-4">No hay estudiantes</div>
              )
            ) : (
              <div className="text-center mt-4">
                <Spinner animation="border" variant="success" />
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </AdminLayout>
  );
});

export default AdminStudents;
