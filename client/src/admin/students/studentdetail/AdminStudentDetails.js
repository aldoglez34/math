import React, { useState, useEffect } from "react";
import AdminLayout from "../../layout/AdminLayout";
import { Container, Row, Col, Spinner, Button } from "react-bootstrap";
import TeacherAPI from "../../../utils/TeacherAPI";
// import EditCourseName from "./components/EditCourseName";
// import "./coursedetail.scss";

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
            <Col className="px-0 mt-4" md={{ offset: 2, span: 9 }}>
              <h1>{student.email}</h1>
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
