import React, { useState, useEffect } from "react";
import AdminLayout from "../layout/AdminLayout";
import {
  Container,
  Row,
  Col,
  Spinner,
  ListGroup,
  Button,
} from "react-bootstrap";
import TeacherAPI from "../../utils/TeacherAPI";
import ItemModal from "./components/ItemModal";

const AdminMessages = React.memo(() => {
  const [messages, setMessages] = useState();
  const [filtered, setFiltered] = useState();
  const [filter, setFilter] = useState();

  useEffect(() => {
    TeacherAPI.t_fetchMessages()
      .then((res) => {
        setMessages(res.data);
        setFiltered(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert("Ocurrió un error");
      });
  }, []);

  const filterProducts = (criteria) => {
    switch (criteria) {
      case "New":
        setFilter(criteria === filter ? null : criteria);
        setFiltered(
          criteria === filter ? messages : messages.filter((msg) => !msg.seen)
        );
        break;
      default:
        setFilter(criteria === filter ? null : criteria);
        setFiltered(
          criteria === filter
            ? messages
            : messages.filter((msg) => msg.type === criteria)
        );
    }
  };

  const filters = (
    <div className="d-flex">
      <Button
        disabled={messages ? false : true}
        active={filter === "New" ? true : false}
        variant="outline-light"
        className="shadow-sm"
        onClick={() => filterProducts("New")}
      >
        Nuevos
      </Button>
      <Button
        disabled={messages ? false : true}
        active={filter === "Guest" ? true : false}
        variant="outline-light"
        className="shadow-sm ml-2"
        onClick={() => filterProducts("Guest")}
      >
        Visitante
      </Button>
      <Button
        disabled={messages ? false : true}
        active={filter === "Student" ? true : false}
        variant="outline-light"
        className="shadow-sm ml-2"
        onClick={() => filterProducts("Student")}
      >
        Estudiante
      </Button>
    </div>
  );

  return (
    <AdminLayout title="Mensajes" leftBarActive="Mensajes" buttons={filters}>
      <Container fluid>
        <Row>
          <Col className="px-0 mt-4" md={{ offset: 2, span: 8 }}>
            {filtered ? (
              filtered.length ? (
                <>
                  <h3 className="mb-3" style={{ color: "#0f5257" }}>
                    Selecciona un mensaje para ver su contenido...
                  </h3>
                  <ListGroup>
                    {filtered.map((m) => (
                      <ItemModal key={m._id} message={m} />
                    ))}
                  </ListGroup>
                </>
              ) : (
                <div className="text-center mt-4">Sin mensajes</div>
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

export default AdminMessages;
