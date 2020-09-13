import React, { useState, useEffect } from "react";
import AdminLayout from "../layout/AdminLayout";
import { Container, Row, Col, Spinner, ListGroup } from "react-bootstrap";
import TeacherAPI from "../../utils/TeacherAPI";

const AdminMessages = React.memo(() => {
  const [messages, setMessages] = useState();

  useEffect(() => {
    // TeacherAPI.t_fetchStudents()
    //   .then((res) => setMessages(res.data))
    //   .catch((err) => {
    //     console.log(err);
    //     alert("Ocurrió un error");
    //   });
  }, []);

  return (
    <AdminLayout title="Mensajes" leftBarActive="Mensajes">
      <Container fluid>
        <Row>
          <Col className="px-0 mt-4" md={{ offset: 2, span: 8 }}>
            <h3>Mis mensajes...</h3>
          </Col>
        </Row>
      </Container>
    </AdminLayout>
  );
});

export default AdminMessages;
