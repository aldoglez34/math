import React, { useEffect } from "react";
import {
  Spinner,
  Row,
  Col,
  Alert,
  ListGroup,
  Button,
  Image,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { StudentLayout } from "../components/Layout";
import API from "../utils/API";
import ResultMsg from "./components/ResultMsg";
import WrongAnswer from "./components/WrongAnswer";
import { unlockExam } from "../redux/actions/unlocked";

const Results = React.memo(() => {
  const dispatch = useDispatch();

  const exam = useSelector((state) => state.exam);
  const student = useSelector((state) => state.student);

  const aciertos = exam.results.reduce((acc, cv) => {
    if (cv.qCorrectAnswers.answer === cv.userAnswers.answer) acc++;
    return acc;
  }, 0);

  const errores = exam.results.reduce((acc, cv) => {
    if (cv.qCorrectAnswers.answer !== cv.userAnswers.answer) acc++;
    return acc;
  }, 0);

  const calif = Math.round((aciertos / exam.results.length) * 100);

  useEffect(() => {
    // register attempt regardless of grade
    API.registerAttempt({
      studentId: student._id,
      examId: exam._id,
      grade: calif / 10,
    })
      .then((res) => console.log(res.data))
      .catch((err) => console.log("error", err));

    // register perfect score only if grade is 10
    if (calif / 10 === 10) {
      API.registerPerfectGrade({ studentId: student._id, examId: exam._id })
        .then((res) => console.log(res.data))
        .catch((err) => console.log("error", err));
    }

    // register reward (medal or trophy) only if its a final exam and the grade is greater than 8
    if (exam.difficulty === "Advanced" && calif / 10 >= 8) {
      API.registerReward({
        studentId: student._id,
        topicName: exam.topicName,
        name: exam.reward.name,
        link: exam.reward.link,
      })
        .then((res) => console.log(res.data))
        .catch((err) => console.log("error", err));
    }

    // unblock an exam if difficulty is NOT "Final" and the grade is greater than 8
    if (exam.difficulty !== "Advanced" && calif / 10 >= 8) {
      API.unlockExam({
        studentId: student._id,
        topicName: exam.topicName,
        difficulty: exam.difficulty,
      })
        .then((res) => {
          // res should contain the data from the backend
          // if its empty it means nothing was unblocked
          if (res.data) dispatch(unlockExam(res.data));
        })
        .catch((err) => console.log("error", err));
    }

    // unlock freestyle if the difficulty is final and the grade is greater than 8
    // this is only for the modal in the course main page
    if (exam.difficulty === "Advanced" && calif / 10 >= 8) {
      dispatch(
        unlockExam({
          name: "Examen Modo Rápido",
          difficulty: "Freestyle",
          topicName: exam.topicName,
          rewardLink: exam.reward.link,
          rewardName: exam.reward.name,
        })
      );
    }
  }, []);

  return exam.results ? (
    <StudentLayout>
      {/* msg to the user */}
      <Row>
        <ResultMsg calif={calif} />
      </Row>
      {/* details */}
      <Row className="mt-4">
        <Col lg={{ span: 7, offset: 2 }}>
          <h3 className="mb-3 text-dark">Resumen</h3>
          <ListGroup className="shadow-sm">
            <ListGroup.Item className="d-flex bg-light align-items-center">
              <h5 className="mb-0 text-success">Aciertos</h5>
              <h3 className="ml-auto mb-0 text-success">{aciertos}</h3>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex bg-light align-items-center">
              <h5 className="mb-0 text-danger">Errores</h5>
              <h3 className="ml-auto mb-0 text-danger">{errores}</h3>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex bg-light align-items-center">
              <h5 className="mb-0 text-dark">Calificación</h5>
              <h3 className="ml-auto mb-0 text-dark">
                <span>{calif / 10}</span>
              </h3>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      {/* questions */}
      <Row className="mt-4">
        <Col lg={{ span: 7, offset: 2 }}>
          <h3 className="mb-3 text-dark">Respuestas</h3>
          {exam.results.map((q) => {
            return q.qCorrectAnswers.answer === q.userAnswers.answer ? (
              <Alert className="shadow-sm" key={q._id} variant="success">
                <Row>
                  <Col>
                    <strong>
                      <i className="fas fa-check mr-2" />
                      CORRECTO
                    </strong>
                    {/* TECHNICAL INSTRUCTION */}
                    <div className="d-flex flex-column my-2">
                      <span className="text-break mb-2">{q.qInstruction}</span>
                      {q.qTechnicalInstruction ? (
                        q.qTechnicalInstruction.type === "text" ? (
                          <span>{q.qTechnicalInstruction.text}</span>
                        ) : (
                          <Image
                            src={q.qTechnicalInstruction.imageLink}
                            width="150"
                            height="150"
                            rounded
                          />
                        )
                      ) : null}
                    </div>
                    {/* USER ANSWERS */}
                    <div className="d-flex flex-column">
                      <strong className="my-2">Tu respuesta:</strong>
                      {q.userAnswers.type === "text" ? (
                        <span>{q.userAnswers.answer}</span>
                      ) : (
                        <Image
                          src={q.userAnswers.answer}
                          className="my-2"
                          width="50"
                          height="50"
                          rounded
                        />
                      )}
                    </div>
                  </Col>
                </Row>
              </Alert>
            ) : (
              <WrongAnswer
                key={q._id}
                qInstruction={q.qInstruction}
                qTechnicalInstruction={q.qTechnicalInstruction}
                userAnswers={q.userAnswers}
                qCorrectAnswers={q.qCorrectAnswers}
              />
            );
          })}
        </Col>
      </Row>
      <div className="mt-3 text-center">
        <Button variant="primary" href="/course" className="shadow-sm">
          <i className="fas fa-arrow-left mr-2" />
          Regresar
        </Button>
      </div>
    </StudentLayout>
  ) : (
    <div className="text-center mt-4 pt-4">
      <Spinner animation="border" variant="primary" />
    </div>
  );
});

export default Results;
