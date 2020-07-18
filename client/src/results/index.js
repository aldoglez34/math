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
import { unlockedExam } from "../redux/actions/unlocked";

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
    if (exam.difficulty === "Final" && calif / 10 >= 8) {
      API.registerReward({
        studentId: student._id,
        topicName: exam.topicName,
        name: exam.reward.name,
        link: exam.reward.link,
      })
        .then((res) => console.log(res.data))
        .catch((err) => console.log("error", err));
    }
    // unblock an exam if difficulty is NOT "freestyle" and the grade is greater than 8
    if (exam.difficulty !== "Final" && calif / 10 >= 8) {
      API.unlockExam({
        studentId: student._id,
        topicName: exam.topicName,
        difficulty: exam.difficulty,
      })
        .then((res) => {
          // res should contain the data from the backend
          // if its empty it means nothing was unblocked
          if (res.data) dispatch(unlockedExam(res.data));
        })
        .catch((err) => console.log("error", err));
    }
  }, []);

  return exam.results ? (
    <StudentLayout>
      {/* msg to the user */}
      <Row className="mt-2">
        <ResultMsg calif={calif} />
      </Row>
      {/* details */}
      <Row className="mt-4">
        <Col lg={{ span: 7, offset: 2 }}>
          <h4 className="mb-3">Resumen</h4>
          <ListGroup className="shadow-sm">
            <ListGroup.Item className="d-flex bg-light align-items-center">
              <h5 className="mb-0">Aciertos</h5>
              <h5 className="ml-auto mb-0">{aciertos}</h5>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex bg-light align-items-center">
              <h5 className="mb-0">Errores</h5>
              <h5 className="ml-auto mb-0">{errores}</h5>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex bg-light align-items-center">
              <h5 className="mb-0">Calificación</h5>
              <h5 className="ml-auto mb-0">
                <span>{calif / 10}</span>
              </h5>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      {/* questions */}
      <Row className="mt-4">
        <Col lg={{ span: 7, offset: 2 }}>
          <h4 className="mb-3">Respuestas</h4>
          {exam.results.map((q) => {
            return q.qCorrectAnswers.answer === q.userAnswers.answer ? (
              <Alert className="shadow-sm" key={q._id} variant="success">
                <Row>
                  <Col>
                    <strong>
                      <i className="fas fa-check mr-2" />
                      CORRECTO
                    </strong>
                    <br />
                    {/* TECHNICAL INSTRUCTION */}
                    <span className="text-break">{q.qInstruction}</span>
                    {q.qTechnicalInstruction ? (
                      q.qTechnicalInstruction.type === "text" ? (
                        <>
                          <br />
                          <span className="my-2">
                            {q.qTechnicalInstruction.text}
                          </span>
                        </>
                      ) : (
                        <>
                          <br />
                          <Image
                            src={q.qTechnicalInstruction.imageLink}
                            className="my-2"
                            width="150"
                            height="150"
                            rounded
                          />
                        </>
                      )
                    ) : null}
                    {/* USER ANSWERS */}
                    <br />
                    <strong className="mr-2">Tu respuesta:</strong>
                    <br />
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
