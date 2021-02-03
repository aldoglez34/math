import React, { useState, useEffect } from "react";
import { AdminLayout, AdminModal, AdminSpinner } from "../components";
import { Col, Container, Row } from "react-bootstrap";
import TeacherAPI from "../../utils/TeacherAPI";
import {
  ExamDescriptionForm,
  ExamDurationForm,
  ExamNameForm,
  ExamQCounterForm,
  MultipleOptionForm,
  MultipleOptionQuestionsTable,
  MultipleOptionWithImage,
  MultipleOptionWithImageTable,
  NewQuestionBttn,
  SimpleQuestionForm,
  SimpleQuestionTable,
  SimpleWithImageForm,
  SimpleWithImageQuestionsTable,
  SimpleWithTwoAnswersForm,
  SimpleWithTwoAnswersTable,
} from "./components";
import { useDispatch, useSelector } from "react-redux";
import { setExam, setTitle } from "../../redux/actions/admin";

export const AdminExamDetailPage = React.memo((props) => {
  const dispatch = useDispatch();

  const [exam, setExamOnState] = useState();

  const courseName = useSelector((state) => state.admin.course.courseName);
  const topicName = useSelector((state) => state.admin.topic.topicName);

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

  const courseId = props.routeProps.match.params.courseId;
  const topicId = props.routeProps.match.params.topicId;
  const examId = props.routeProps.match.params.examId;

  useEffect(() => {
    TeacherAPI.t_fetchExam(examId)
      .then((res) => {
        setExamOnState(res.data);

        // set exam on redux
        const { _id: examId, name: examName } = res.data;
        dispatch(setExam({ examId, examName }));

        // set title
        dispatch(setTitle(`${courseName} | ${topicName} | ${examName}`));

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
  }, [examId]);

  return exam ? (
    <AdminLayout
      leftBarActive="Cursos"
      backBttn={`/admin/courses/edit/topics/${courseId}/${topicId}`}
    >
      <Container fluid>
        {/* name */}
        <Row>
          <Col>
            <span className="text-muted">Nombre</span>
            <h1>
              {exam.name}
              <AdminModal
                Form={ExamNameForm}
                formInitialText={exam.name}
                formLabel="Nombre"
                icon={<i className="fas fa-pen-alt" />}
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
              <AdminModal
                Form={ExamDurationForm}
                formInitialText={exam.duration}
                formLabel="Duración"
                icon={<i className="fas fa-pen-alt" />}
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
              <AdminModal
                Form={ExamQCounterForm}
                formInitialText={exam.qCounter}
                formLabel="Preguntas por examen"
                icon={<i className="fas fa-pen-alt" />}
              />
            </h2>
          </Col>
        </Row>
        {/* actual number of questions on this exam */}
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
              <AdminModal
                Form={ExamDescriptionForm}
                formInitialText={exam.description}
                formLabel="Descripción"
                icon={<i className="fas fa-pen-alt" />}
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
            courseId={props.routeProps.match.params.courseId}
            questions={simpleQuestions}
            examId={props.routeProps.match.params.examId}
          />
        ) : null}
        {simpleWithImageQuestions.length ? (
          <SimpleWithImageQuestionsTable
            courseId={props.routeProps.match.params.courseId}
            questions={simpleWithImageQuestions}
            examId={props.routeProps.match.params.examId}
          />
        ) : null}
        {multipleOptionQuestions.length ? (
          <MultipleOptionQuestionsTable
            courseId={props.routeProps.match.params.courseId}
            questions={multipleOptionQuestions}
            examId={props.routeProps.match.params.examId}
          />
        ) : null}
        {simpleWithTwoAnswersQuestions.length ? (
          <SimpleWithTwoAnswersTable
            courseId={props.routeProps.match.params.courseId}
            questions={simpleWithTwoAnswersQuestions}
            examId={props.routeProps.match.params.examId}
          />
        ) : null}
        {multipleOptionWithImageQuestions.length ? (
          <MultipleOptionWithImageTable
            courseId={props.routeProps.match.params.courseId}
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
