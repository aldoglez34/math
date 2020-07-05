import React from "react";
import { Row, Col, Accordion, Button, Card } from "react-bootstrap";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import API from "../../utils/API";
import DifficultyStars from "./DifficultyStars";
import FreestyleCard from "./FreestyleCard";
import LastVisited from "./LastVisited";
import { useDispatch } from "react-redux";
import * as examActions from "../../redux/actions/exam";

const ExamsAccordion = React.memo(({ exams, freestyle }) => {
  const dispatch = useDispatch();

  const student = useSelector((state) => state.student);

  return (
    <Accordion className="shadow-sm">
      {exams.map((ex) => (
        <Card key={ex._id}>
          {/* TITLE */}
          <Card.Header style={{ backgroundColor: "#f4fbf8" }}>
            <Accordion.Toggle as={Button} variant="link" eventKey={ex._id}>
              <i className="fas fa-chevron-down mr-1" />
              <strong>{ex.name}</strong>
              {ex.highestScore >= 8 ? (
                <i
                  className="fas fa-medal text-warning ml-2"
                  title="Aprobado"
                />
              ) : null}
              {ex.highestScore === 10 ? (
                <i
                  className="fas fa-crown text-warning ml-2"
                  title="Calificación perfecta"
                />
              ) : null}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey={ex._id}>
            <Card.Body>
              {/* TITLE 2 */}
              <h2 className="mb-2">
                {ex.name}
                {ex.highestScore >= 8 ? (
                  <i
                    className="fas fa-medal text-warning ml-2"
                    title="Aprobado"
                  />
                ) : null}
                {ex.highestScore === 10 ? (
                  <i
                    className="fas fa-crown text-warning ml-2"
                    title="Calificación perfecta"
                  />
                ) : null}
              </h2>
              <hr />
              {/* stars */}
              <DifficultyStars difficulty={ex.difficulty} />
              {/* latest attempt */}
              <LastVisited date={ex.latestAttempt} />
              {/* description */}
              <p style={{ fontSize: "14px" }} className="mb-3">
                {ex.description} Este examen tiene una duración de 30 minutos.
              </p>
              {/* columns */}
              <Row className="mb-3 py-2">
                <Col className="text-center">
                  <h1 className="mb-0 text-info">{ex.highestScore}</h1>
                  <h4>
                    <small className="text-muted">Calificación</small>
                  </h4>
                </Col>
                <Col className="text-center">
                  <h1 className="mb-0 text-info">{ex.myAttempts}</h1>
                  <h4>
                    <small className="text-muted">Intentos</small>
                  </h4>
                </Col>
              </Row>
              {/* button */}
              <Button
                onClick={() =>
                  API.registerAttempt({
                    studentId: student._id,
                    examId: ex._id,
                  })
                    .then(() => {
                      return dispatch(
                        examActions.setExam({
                          _id: ex._id,
                          name: ex.name,
                          difficulty: ex.difficulty,
                        })
                      );
                    })
                    .then(() => (window.location.href = "/course/exam"))
                    .catch((err) => {
                      console.log("error", err);
                      alert("Ocurrió un error inesperado");
                      window.location.href = "/course";
                    })
                }
                variant="primary"
                className="shadow-sm"
                disabled={ex.isAvailable ? false : true}
              >
                Iniciar
              </Button>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      ))}
      {/* freestyle */}
      <FreestyleCard freestyle={freestyle} />
    </Accordion>
  );
});

ExamsAccordion.propTypes = {
  exams: PropTypes.array.isRequired,
  freestyle: PropTypes.object.isRequired,
};

export default ExamsAccordion;
