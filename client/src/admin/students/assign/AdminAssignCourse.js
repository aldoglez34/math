import React, { useState, useEffect } from "react";
import { Container, Row, ListGroup, Col, Button } from "react-bootstrap";
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

  const assignCourse = (courseId) => {
    TeacherAPI.t_assignCourse({
      courseId,
      studentId: props.routeProps.match.params.studentId,
    })
      .then((res) => {
        console.log(res.data);
        alert("El curso fue agregado con éxito");
        window.location.href =
          "/admin/students/" + props.routeProps.match.params.studentId;
      })
      .catch((err) => {
        console.log(err);
        alert("Ocurrió un error");
      });
  };

  return (
    <AdminLayout
      title="Asignar Curso"
      leftBarActive="Alumnos"
      backBttn={"/admin/students/" + props.routeProps.match.params.studentId}
    >
      <Container>
        <Row>
          <Col className="px-0 mt-4" md={{ offset: 2, span: 8 }}>
            <h3 className="mb-3">Elige un curso de la lista...</h3>
            {unpurchased.length ? (
              <ListGroup>
                {unpurchased.map((u) => (
                  <ListGroup.Item
                    key={u._id}
                    className="d-flex py-4"
                    style={{ backgroundColor: "#f4fbf8" }}
                  >
                    <h5 className="mb-0">{u.name}</h5>
                    <Button
                      variant="dark"
                      size="sm"
                      className="ml-auto editButton"
                      onClick={() => assignCourse(u._id)}
                    >
                      Asignar
                    </Button>
                  </ListGroup.Item>
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
