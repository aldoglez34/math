import React, { useEffect } from "react";
import {
  Spinner,
  Row,
  Col,
  Alert,
  ListGroup,
  Image,
  Button,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import { StudentLayout } from "../components/Layout";
import API from "../utils/API";

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
    API.registerAttempt({
      studentId: student._id,
      examId: exam._id,
      score: calif / 10,
      difficulty: exam.difficulty,
    })
      .then((res) => console.log("new attempt", res))
      .catch((err) => console.log("error", err));
  }, []);

  return exam.results ? (
    <StudentLayout>
      {/* medal */}
      <Row className="mt-2">
        {calif >= 80 ? (
          <Col lg={{ span: 7, offset: 2 }}>
            <h2 className="text-success text-center">
              Resultado satisfactorio
            </h2>
            {aciertos === exam.results.length ? (
              <h2 className="text-success text-center">
                ¡Calificación perfecta!
              </h2>
            ) : null}
            <p className="text-success text-center mt-2 lead">Logros:</p>
            <div className="mt-4 text-center">
              <Image
                src="https://image.flaticon.com/icons/svg/3068/3068332.svg"
                width="100"
                height="100"
                title={`Medalla "${exam.name}"`}
              />
              {aciertos === exam.results.length ? (
                <Image
                  src="https://image.flaticon.com/icons/svg/3141/3141842.svg"
                  width="100"
                  height="100"
                  className="ml-2"
                  title="Calificación perfecta"
                />
              ) : null}
            </div>
          </Col>
        ) : (
          <Col lg={{ span: 7, offset: 2 }}>
            <h2 className="text-danger text-center">
              Resultado no satisfactorio
            </h2>
            <p className="text-danger text-center mt-2 lead">
              Debes obtener un mínimo de 8.0 para aprobar
            </p>
            <div className="mt-4 text-center">
              <Image
                src="https://image.flaticon.com/icons/svg/2274/2274473.svg"
                width="100"
                height="100"
                title="I'm sad bruh"
              />
            </div>
          </Col>
        )}
      </Row>
      {/* details */}
      <Row className="mt-4">
        <Col lg={{ span: 7, offset: 2 }}>
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
              <h5 className="mb-0">Tiempo</h5>
              <h5 className="ml-auto mb-0">????</h5>
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
      {/* question */}
      <Row className="mt-4">
        <Col lg={{ span: 7, offset: 2 }}>
          {exam.results.map((q) => {
            return (
              <Alert
                className="shadow-sm"
                key={q._id}
                variant={
                  q.qCorrectAnswer === q.userAnswer ? "success" : "danger"
                }
              >
                <Row>
                  <Col>
                    {q.qCorrectAnswer === q.userAnswer ? (
                      <strong>
                        <i className="fas fa-check mr-2" />
                        CORRECTO
                      </strong>
                    ) : (
                      <strong>
                        <i className="fas fa-times mr-2" />
                        INCORRECTO
                      </strong>
                    )}
                    <br />
                    <span>{q.qNumber + ". " + q.qInstruction}</span>
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
