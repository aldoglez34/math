import React, { useState, useEffect } from "react";
import AdminLayout from "../layout/AdminLayout";
import { Container, Row, Col } from "react-bootstrap";
import TeacherAPI from "../../utils/TeacherAPI";
import AdminSpinner from "../components/AdminSpinner";
import AdminExamModal from "./components/AdminExamModal";
import NewQuestionBttn from "./components/NewQuestionBttn";
//
import ExamNameForm from "./forms/ExamNameForm";
import ExamDurationForm from "./forms/ExamDurationForm";
import ExamQCounterForm from "./forms/ExamQCounterForm";
import ExamDescriptionForm from "./forms/ExamDescriptionForm";
// new exams (forms)
import {
  SimpleQuestionForm,
  MultipleOptionForm,
  SimpleWithImageForm,
  SimpleWithTwoAnswersForm,
  MultipleOptionWithImage,
} from "./questionsForms";
// new exams (tables)
import {
  SimpleQuestionTable,
  MultipleOptionQuestionsTable,
  SimpleWithImageQuestionsTable,
  SimpleWithTwoAnswersTable,
  MultipleOptionWithImageTable,
} from "./questionsTables";

const AdminExamDetail = React.memo((props) => {
  const [exam, setExam] = useState();

  const [simpleQuestions, setSimpleQuestions] = useState([]);
  const [simpleWithImageQuestions, setSimpleWithImageQuestions] = useState([]);
  const [multipleOptionQuestions, setMultipleOptionQuestions] = useState([]);
  const [
    simpleWithTwoAnswersQuestions,
    setSimpleWithTwoAnswersQuestions,
  ] = useState([]);
  const [
    multipleOptionWithImageQuestions,
    setMultipleOptionWithImageQuestions,
  ] = useState([]);

  useEffect(() => {
    const examId = props.routeProps.match.params.examId;

    TeacherAPI.t_fetchExam(examId)
      .then((res) => {
        setExam(res.data);
        // set questions
        setSimpleQuestions(
          res.data.questions.filter(({ qType }) => qType === "simple")
        );
        setSimpleWithImageQuestions(
          res.data.questions.filter(({ qType }) => qType === "simpleWithPic")
        );
        setMultipleOptionQuestions(
          res.data.questions.filter(({ qType }) => qType === "multipleOption")
        );
        setSimpleWithTwoAnswersQuestions(
          res.data.questions.filter(({ qType }) => qType === "twoAnswers")
        );
        setMultipleOptionWithImageQuestions(
          res.data.questions.filter(
            ({ qType }) => qType === "multipleOptionWithPic"
          )
        );
      })
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
        {/* NEW QUESTIONS */}
        <hr />
        <h3 className="text-center">Nuevas preguntas</h3>
        <div className="d-flex flex-row justify-content-center mb-3 mt-3">
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
              courseId={props.routeProps.match.params.courseId}
              Form={SimpleWithImageForm}
              text="Sencilla con imagen"
            />
          </div>
          <div className="ml-2">
            <NewQuestionBttn
              examId={exam._id}
              Form={SimpleWithTwoAnswersForm}
              text="Sencilla con 2 respuestas"
            />
          </div>
          <div className="ml-2">
            <NewQuestionBttn
              examId={exam._id}
              Form={MultipleOptionForm}
              text="Opción múltiple"
            />
          </div>
          <div className="ml-2">
            <NewQuestionBttn
              examId={exam._id}
              courseId={props.routeProps.match.params.courseId}
              Form={MultipleOptionWithImage}
              text="Opción múltiple con imagen"
            />
          </div>
        </div>
        {/* TABLES */}
        {simpleQuestions.length ? (
          <SimpleQuestionTable
            questions={simpleQuestions}
            examId={props.routeProps.match.params.examId}
          />
        ) : null}
        {simpleWithImageQuestions.length ? (
          <SimpleWithImageQuestionsTable
            questions={simpleWithImageQuestions}
            examId={props.routeProps.match.params.examId}
          />
        ) : null}
        {multipleOptionQuestions.length ? (
          <MultipleOptionQuestionsTable
            questions={multipleOptionQuestions}
            examId={props.routeProps.match.params.examId}
          />
        ) : null}
        {simpleWithTwoAnswersQuestions.length ? (
          <SimpleWithTwoAnswersTable
            questions={simpleWithTwoAnswersQuestions}
            examId={props.routeProps.match.params.examId}
          />
        ) : null}
        {multipleOptionWithImageQuestions.length ? (
          <MultipleOptionWithImageTable
            questions={multipleOptionWithImageQuestions}
            examId={props.routeProps.match.params.examId}
          />
        ) : null}
        <br />
        <br />
      </Container>
    </AdminLayout>
  ) : (
    <AdminSpinner />
  );
});

export default AdminExamDetail;
