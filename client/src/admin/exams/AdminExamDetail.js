import React, { useState, useEffect } from "react";
import AdminLayout from "../layout/AdminLayout";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import TeacherAPI from "../../utils/TeacherAPI";
import AdminSpinner from "../components/AdminSpinner";
import AdminExamModal from "./components/AdminExamModal";
//
import ExamNameForm from "./forms/ExamNameForm";
import ExamDurationForm from "./forms/ExamDurationForm";
import ExamDescriptionForm from "./forms/ExamDescriptionForm";

const AdminExamDetail = React.memo((props) => {
  const [exam, setExam] = useState();

  useEffect(() => {
    const examId = props.routeProps.match.params.examId;

    TeacherAPI.t_fetchExam(examId)
      .then((res) => setExam(res.data))
      .catch((err) => {
        console.log(err);
        alert("Ocurrió un error");
      });
  }, []);

  return exam ? (
    <AdminLayout
      title="Examen"
      leftBarActive="Cursos"
      backBttn={
        "/admin/courses/edit/topics/" +
        props.routeProps.match.params.courseId +
        "/" +
        props.routeProps.match.params.topicId
      }
    >
      <Container fluid>
        {/* name */}
        <Row>
          <Col>
            <span className="text-muted">Nombre</span>
            <h1>
              {exam.name}
              <AdminExamModal
                modalTitle="Editar nombre"
                Form={ExamNameForm}
                formLabel="Nombre"
                formInitialText={exam.name}
                examId={props.routeProps.match.params.examId}
              />
            </h1>
          </Col>
        </Row>
        {/* difficulty */}
        <Row>
          <Col>
            <span className="text-muted">Dificultad</span>
            <h2>{exam.difficulty}</h2>
          </Col>
        </Row>
        {/* duration */}
        <Row>
          <Col>
            <span className="text-muted">Duración</span>
            <h2>
              {`${exam.duration} minutos`}
              <AdminExamModal
                modalTitle="Editar duración"
                Form={ExamDurationForm}
                formLabel="Duración"
                formInitialText={exam.duration}
                examId={props.routeProps.match.params.examId}
              />
            </h2>
          </Col>
        </Row>
        {/* description */}
        <Row>
          <Col>
            <span className="text-muted">Descripción</span>
            <h5>
              {exam.description}
              <AdminExamModal
                modalTitle="Editar descripción"
                Form={ExamDescriptionForm}
                formLabel="Descripción"
                formInitialText={exam.description}
                examId={props.routeProps.match.params.examId}
              />
            </h5>
          </Col>
        </Row>
      </Container>
    </AdminLayout>
  ) : (
    <AdminSpinner />
  );
});

export default AdminExamDetail;
