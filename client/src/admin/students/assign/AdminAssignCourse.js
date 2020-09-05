import React, { useState, useEffect } from "react";
import { Container, Row, ListGroup, Col } from "react-bootstrap";
import TeacherAPI from "../../../utils/TeacherAPI";
import AdminLayout from "../../layout/AdminLayout";

const AdminAssignCourse = React.memo((props) => {
  const [unpurchased, setUnpurchased] = useState(false);

  useEffect(() => {
    const studentId = props.routeProps.match.params.studentId;
    TeacherAPI.t_fetchStudentUnpurchased(studentId)
      .then((res) => setUnpurchased(res.data))
      .catch((err) => {
        console.log(err);
        alert("Ocurrió un error");
      });
  }, [props.routeProps.match.params.studentId]);

  return (
    <AdminLayout
      title="Historial de exámenes"
      leftBarActive="Alumnos"
      backBttn={"/admin/students/" + props.routeProps.match.params.studentId}
    >
      <Container>
        <Row>
          <Col className="px-0 mt-4" md={{ offset: 2, span: 8 }}>
            {unpurchased.length ? (
              <ListGroup>
                {unpurchased.map((u) => (
                  <ListGroup.Item key={u}>{u}</ListGroup.Item>
                ))}
              </ListGroup>
            ) : (
              <div className="py-4 text-center">
                <em>No hay cursos disponibles para asignar a este alumno</em>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </AdminLayout>
  );
});

export default AdminAssignCourse;
