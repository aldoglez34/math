import React, { useState, useEffect } from "react";
import { AdminLayout, AdminModal, AdminSpinner } from "../components";
import { Alert, Col, Container, Row } from "react-bootstrap";
import TeacherAPI from "../../utils/TeacherAPI";
import {
  ExamDescriptionForm,
  ExamDurationForm,
  ExamNameForm,
  ExamQCounterForm,
  ImageWithTwoAnswersTable,
  ImageWithTwoAnswers,
  MultipleOptionForm,
  MultipleOptionQuestionsTable,
  MultipleOptionWithImage,
  NewQuestionModal,
  SimpleQuestionForm,
  SimpleQuestionTable,
  SimpleWithImageForm,
  SimpleWithImageQuestionsTable,
  SimpleWithTwoAnswersForm,
  SimpleWithTwoAnswersTable,
  MultipleOptionWithImageTable,
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
  const [imageWithTwoAnswers, setImageWithTwoAnswers] = useState([]);
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
        setImageWithTwoAnswers(
          res.data.questions.filter(
            ({ qType }) => qType === "imageWithTwoAnswers"
          )
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
        alert("Ocurrió un error, vuelve a intentarlo.");
      });
  }, [courseName, dispatch, examId, topicName]);

  return exam ? (
    <AdminLayout
      leftBarActive="Cursos"
      backBttn={`/admin/courses/edit/topics/${courseId}/${topicId}`}
    >
      <Container fluid>
        {exam.qCounter > exam.questions.length && (
          <Alert variant="danger">
            Este examen no satisface el número mínimo de preguntas.
          </Alert>
        )}
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
              {exam.duration} {exam.duration === 1 ? "minuto" : "minutos"}
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
        <h3 className="text-center mt-4">Nuevas preguntas</h3>
        <div className="d-flex flex-row justify-content-center mb-3 mt-3">
          <div>
            <NewQuestionModal Form={SimpleQuestionForm} text="Sencilla" />
          </div>
          <div className="ml-2">
            <NewQuestionModal
              Form={SimpleWithImageForm}
              text="Sencilla con imagen"
            />
          </div>
          <div className="ml-2">
            <NewQuestionModal
              Form={SimpleWithTwoAnswersForm}
              text="Sencilla con 2 respuestas"
            />
          </div>
          <div className="ml-2">
            <NewQuestionModal
              Form={ImageWithTwoAnswers}
              text="Imagen con 2 respuestas"
            />
          </div>
          <div className="ml-2">
            <NewQuestionModal
              Form={MultipleOptionForm}
              text="Opción múltiple"
            />
          </div>
          <div className="ml-2">
            <NewQuestionModal
              Form={MultipleOptionWithImage}
              text="Opción múltiple con imagen"
            />
          </div>
        </div>
        {/* TABLES */}
        {simpleQuestions.length ? (
          <SimpleQuestionTable questions={simpleQuestions} />
        ) : null}
        {simpleWithImageQuestions.length ? (
          <SimpleWithImageQuestionsTable questions={simpleWithImageQuestions} />
        ) : null}
        {simpleWithTwoAnswersQuestions.length ? (
          <SimpleWithTwoAnswersTable
            questions={simpleWithTwoAnswersQuestions}
          />
        ) : null}
        {imageWithTwoAnswers.length ? (
          <ImageWithTwoAnswersTable questions={imageWithTwoAnswers} />
        ) : null}
        {multipleOptionQuestions.length ? (
          <MultipleOptionQuestionsTable questions={multipleOptionQuestions} />
        ) : null}
        {multipleOptionWithImageQuestions.length ? (
          <MultipleOptionWithImageTable
            questions={multipleOptionWithImageQuestions}
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
