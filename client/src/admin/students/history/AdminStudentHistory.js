import React, { useState, useEffect } from "react";
import { Container, Row, Table, Col } from "react-bootstrap";
import moment from "moment";
import "moment/locale/es";
import TeacherAPI from "../../../utils/TeacherAPI";
import AdminLayout from "../../layout/AdminLayout";

const AdminStudentHistory = React.memo((props) => {
  const [history, setHistory] = useState(false);

  useEffect(() => {
    const studentId = props.routeProps.match.params.studentId;
    TeacherAPI.t_fetchStudentHistory(studentId)
      .then((res) => setHistory(res.data))
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
            {history.length ? (
              <Table striped bordered size="sm">
                <thead>
                  <tr>
                    <th
                      className="py-3 text-center text-light"
                      style={{ backgroundColor: "#0f5257" }}
                    >
                      Fecha
                    </th>
                    <th
                      className="py-3 text-center text-light"
                      style={{ backgroundColor: "#0f5257" }}
                    >
                      Examen
                    </th>
                    <th
                      className="py-3 text-center text-light"
                      style={{ backgroundColor: "#0f5257" }}
                    >
                      Calificación
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {history.map((h) => {
                    return (
                      <tr key={h._id}>
                        <td>{moment(h.date).format("L")}</td>
                        <td>{h.exam.name}</td>
                        <td className="text-center">{h.grade}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            ) : (
              <div className="py-4 text-center">
                <em>Este alumno no ha presentado ningún examen</em>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </AdminLayout>
  );
});

export default AdminStudentHistory;
