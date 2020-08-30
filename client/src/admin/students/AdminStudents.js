import React, { useState, useEffect } from "react";
import AdminLayout from "../layout/AdminLayout";
import { Container, Row, Col, ListGroup, Spinner } from "react-bootstrap";
import TeacherAPI from "../../utils/TeacherAPI";

const AdminStudents = React.memo(() => {
  const [students, setStudents] = useState();

  useEffect(() => {
    // TeacherAPI.t_fetchCourses()
    //   .then((res) => setCourses(res.data))
    //   .catch((err) => {
    //     console.log(err);
    //     alert("Ocurrió un error");
    //   });
  }, []);

  return (
    <AdminLayout title="Alumnos" leftBarActive="Alumnos">
      <Container fluid>
        <Row>
          <Col className="px-0 mt-4" md={{ offset: 3, span: 7 }}></Col>
        </Row>
      </Container>
    </AdminLayout>
  );
});

export default AdminStudents;
