import React, { useEffect } from "react";
import { Spinner, Row, Col, Alert, ListGroup, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { StudentLayout } from "../components/Layout";
import API from "../utils/API";
import ResultMsg from "./components/ResultMsg";
import WrongAnswer from "./components/WrongAnswer";

const Results = React.memo(() => {
  const exam = useSelector((state) => state.exam);
  const student = useSelector((state) => state.student);

  const aciertos = exam.results.reduce((acc, cv) => {
    if (cv.qCorrectAnswer === cv.userAnswer) acc++;
    return acc;
  }, 0);

  const errores = exam.results.reduce((acc, cv) => {
    if (cv.qCorrectAnswer !== cv.userAnswer) acc++;
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
      API.unblockExam({
        studentId: student._id,
        topicName: exam.topicName,
        difficulty: exam.difficulty,
      })
        .then((res) => console.log(res.data))
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
            return q.qCorrectAnswer === q.userAnswer ? (
              <Alert className="shadow-sm" key={q._id} variant="success">
                <Row>
                  <Col>
                    <strong>
                      <i className="fas fa-check mr-2" />
                      CORRECTO
                    </strong>
                    <br />
                    <span className="text-break">{q.qInstruction}</span>
                    {q.qTechnicalInstruction ? (
                      <>
                        <br />
                        <span>{q.qTechnicalInstruction}</span>
                      </>
                    ) : null}
                    <br />
                    <span>
                      <strong className="mr-2">R.</strong>
                      {q.userAnswer}
                    </span>
                  </Col>
                </Row>
              </Alert>
            ) : (
              <WrongAnswer
                key={q._id}
                qInstruction={q.qInstruction}
                qTechnicalInstruction={q.qTechnicalInstruction}
                userAnswer={q.userAnswer}
                qCorrectAnswer={q.qCorrectAnswer}
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
