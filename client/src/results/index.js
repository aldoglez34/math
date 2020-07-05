import React from "react";
import { Spinner, Row, Col, Alert, ListGroup, Image } from "react-bootstrap";
import { useSelector } from "react-redux";
import { StudentLayout } from "../components/Layout";

const Results = React.memo(() => {
  const exam = useSelector((state) => state.exam);

  const aciertos = exam.results.reduce((acc, cv) => {
    if (cv.qCorrectAnswer === cv.userAnswer) acc++;
    return acc;
  }, 0);

  const errores = exam.results.reduce((acc, cv) => {
    if (cv.qCorrectAnswer !== cv.userAnswer) acc++;
    return acc;
  }, 0);

  const calif = Math.round((aciertos / exam.results.length) * 100);

  return exam.results ? (
    <StudentLayout>
      {/* <h1 className="mb-0">Resultado</h1> */}
      <Row className="mt-2">
        <Col lg={{ span: 7, offset: 2 }}>
          <h5 className="text-success text-center">
            ¡Buen trabajo, aprobaste este examen!
          </h5>
          <h5 className="text-success text-center mt-2">
            Recibiste esta medalla:
          </h5>
          <div className="mt-4 pt-2 text-center">
            <Image
              src="https://image.flaticon.com/icons/svg/3068/3068332.svg"
              width="100"
              height="100"
            />
          </div>
        </Col>
      </Row>
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
      {/* <h1 className="mb-0 mt-4">Detalle</h1> */}
      <Row className="mt-4">
        <Col lg={{ span: 7, offset: 2 }}>
          <ListGroup className="shadow-sm">
            <ListGroup.Item className="d-flex bg-light align-items-center">
              <span className="mb-0">Aciertos</span>
              <h5 className="ml-auto mb-0">{aciertos}</h5>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex bg-light align-items-center">
              <span className="mb-0">Errores</span>
              <h5 className="ml-auto mb-0">{errores}</h5>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex bg-light align-items-center">
              <span className="mb-0">Tiempo</span>
              <h5 className="ml-auto mb-0">????</h5>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex bg-light align-items-center">
              <span className="mb-0">Calificación</span>
              <h5 className="ml-auto mb-0">
                <span>{calif}</span>
                <span>/100</span>
              </h5>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      {/* <h1 className="mb-0 mt-4">Resultado</h1> */}
    </StudentLayout>
  ) : (
    <div className="text-center mt-4 pt-4">
      <Spinner animation="border" variant="primary" />
    </div>
  );
});

export default Results;
