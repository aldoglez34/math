import React, { useState, useEffect } from "react";
import AdminLayout from "../layout/AdminLayout";
import { Container, Row, Col, Table } from "react-bootstrap";
import TeacherAPI from "../../utils/TeacherAPI";
import AdminSpinner from "../components/AdminSpinner";
import AdminExamModal from "./components/AdminExamModal";
import NewQuestionBttn from "./components/NewQuestionBttn";
//
import ExamNameForm from "./forms/ExamNameForm";
import ExamDurationForm from "./forms/ExamDurationForm";
import ExamQCounterForm from "./forms/ExamQCounterForm";
import ExamDescriptionForm from "./forms/ExamDescriptionForm";
//
import SimpleQuestionForm from "./questionsForms/SimpleQuestionForm";

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

    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        {/* question counter */}
        <Row>
          <Col>
            <span className="text-muted">Preguntas por examen</span>
            <h2
              className={
                exam.qCounter > exam.questions.length ? "text-danger" : null
              }
            >
              {`${exam.qCounter} preguntas`}
              <AdminExamModal
                modalTitle="Editar preguntas por examen"
                Form={ExamQCounterForm}
                formLabel="Preguntas por examen"
                formInitialText={exam.qCounter}
                examId={props.routeProps.match.params.examId}
              />
            </h2>
          </Col>
        </Row>
        {/* question counter 2 */}
        <Row>
          <Col>
            <span className="text-muted">Total de preguntas</span>
            <h3>{`${exam.questions.length} preguntas`}</h3>
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
        {/* new questions */}
        <Row className="mb-3">
          <Col className="d-flex flex-column">
            <span className="text-muted mb-2">Nuevas preguntas</span>
            <div className="d-flex flex-row">
              <div>
                <NewQuestionBttn
                  examId={exam._id}
                  Form={SimpleQuestionForm}
                  text="Sencilla"
                />
              </div>
              <div className="ml-2">
                <NewQuestionBttn
                  examId={exam._id}
                  Form={SimpleQuestionForm}
                  text="Opción múltitple"
                />
              </div>
            </div>
          </Col>
        </Row>
        {/* questions */}
        <Row>
          <Col>
            <span className="text-muted">Preguntas sencillas</span>
            <div className="mt-2 d-flex flex-column">
              {exam.questions.length ? (
                <Table bordered striped size="sm">
                  <thead>
                    <tr>
                      <th
                        style={{ backgroundColor: "#0f5257" }}
                        className="text-light text-center"
                      >
                        Instrucción
                      </th>
                      <th
                        style={{ backgroundColor: "#0f5257" }}
                        className="text-light text-center"
                      >
                        I. Técnica
                      </th>
                      <th
                        style={{ backgroundColor: "#0f5257" }}
                        className="text-light text-center"
                      >
                        Respuesta
                      </th>
                      <th
                        style={{ backgroundColor: "#0f5257" }}
                        className="text-light text-center"
                      >
                        Comentario
                      </th>
                      <th
                        style={{ backgroundColor: "#0f5257" }}
                        className="text-light text-center"
                      ></th>
                    </tr>
                  </thead>
                  <tbody>
                    {exam.questions.map((q) => {
                      return (
                        <tr key={q._id}>
                          <td>{q.qInstruction}</td>
                          <td>
                            {q.qTechnicalInstruction
                              ? q.qTechnicalInstruction.text
                              : null}
                          </td>
                          <td>
                            {q.qCorrectAnswers[0].complement
                              ? q.qCorrectAnswers[0].placement === "left"
                                ? q.qCorrectAnswers[0].complement +
                                  " " +
                                  q.qCorrectAnswers[0].answer
                                : q.qCorrectAnswers[0].answer +
                                  " " +
                                  q.qCorrectAnswers[0].complement
                              : q.qCorrectAnswers[0].answer}
                          </td>
                          <td>{q.qComment}</td>
                          <td>
                            {/* <AdminExamModal
                              modalTitle="Editar descripción"
                              Form={ExamDescriptionForm}
                              formLabel="Descripción"
                              formInitialText={exam.description}
                              examId={props.routeProps.match.params.examId}
                            /> */}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              ) : (
                <span>-</span>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </AdminLayout>
  ) : (
    <AdminSpinner />
  );
});

export default AdminExamDetail;