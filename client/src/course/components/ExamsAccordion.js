import React from "react";
import { Row, Col, Accordion, Button, Card } from "react-bootstrap";
import PropTypes from "prop-types";
import DifficultyStars from "./DifficultyStars";
import LastVisited from "./LastVisited";
import { useDispatch } from "react-redux";
import * as examActions from "../../redux/actions/exam";
import NotAvailableBttn from "./buttons/NotAvailableBttn";
import FreestyleCard from "./FreestyleCard";

const ExamsAccordion = React.memo(({ exams, reward, freestyle }) => {
  const dispatch = useDispatch();

  const setExamInRedux = async (_id, name, difficulty, duration) => {
    dispatch(
      examActions.setExam({
        _id,
        reward,
        name,
        difficulty,
        duration,
      })
    );
  };

  return (
    <Accordion className="shadow-sm">
      {exams.map((ex, idx) => (
        <React.Fragment key={idx}>
          <Card>
            {/* TITLE */}
            <Card.Header style={{ backgroundColor: "#e7edee" }}>
              <Accordion.Toggle as={Button} variant="link" eventKey={ex._id}>
                <i className="fas fa-chevron-down mr-2" />
                <strong style={{ color: "#0f5257" }}>{ex.name}</strong>
                {/* exam cheked (passed) */}
                {ex.highestGrade >= 8 ? (
                  <i
                    className="fas fa-check-circle text-warning ml-2"
                    title="Aprobado"
                  />
                ) : null}
                {/* crown for perfect grade */}
                {ex.hasPerfectGrade ? (
                  <i
                    className="fas fa-crown text-warning ml-2"
                    title="Calificación perfecta"
                  />
                ) : null}
                {/* locked exam */}
                {ex.isAvailable ? null : (
                  <i className="fas fa-lock ml-2" title="Bloqueado" />
                )}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={ex._id}>
              <Card.Body>
                {/* TITLE 2 */}
                <h2 className="mb-2">{ex.name}</h2>
                {/* stars */}
                <DifficultyStars difficulty={ex.difficulty} />
                {/* description */}
                <p className="mb-2 mt-2">
                  <strong style={{ fontSize: "14px" }}>{ex.description}</strong>
                </p>
                {/* latest attempt */}
                <LastVisited date={ex.latestAttempt} />
                <br />
                {/* duration */}
                <span style={{ fontSize: "14px" }} title="Duración">
                  <i className="fas fa-stopwatch mr-2" />
                  {ex.duration + " minutos"}
                </span>
                <br />
                {/* question counter */}
                <span style={{ fontSize: "14px" }} title="Preguntas">
                  <i className="fas fa-question-circle mr-2" />
                  {ex.qCounter + " preguntas"}
                </span>
                {/* columns */}
                <Row className="my-3">
                  <Col className="text-center">
                    <h1 className="mb-0 text-info">
                      <span title="Calificación más alta">
                        {ex.highestGrade}
                      </span>
                    </h1>
                    <h4>
                      <small className="text-muted">Calificación</small>
                    </h4>
                  </Col>
                  <Col className="text-center">
                    <h1 className="mb-0 text-info">
                      <span title="Número de intentos">
                        {ex.attemptsCounter}
                      </span>
                    </h1>
                    <h4>
                      <small className="text-muted">Intentos</small>
                    </h4>
                  </Col>
                </Row>
                {/* go to exam - button */}
                {ex.isAvailable ? (
                  <Button
                    onClick={() =>
                      setExamInRedux(
                        ex._id,
                        ex.name,
                        ex.difficulty,
                        ex.duration
                      )
                        .then(() => (window.location.href = "/course/exam"))
                        .catch((err) => {
                          console.log("error", err);
                          alert("Ocurrió un error inesperado");
                          window.location.href = "/course";
                        })
                    }
                    variant="primary"
                    className="shadow-sm"
                  >
                    Iniciar
                  </Button>
                ) : (
                  <NotAvailableBttn />
                )}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          {/* only show freestyle if student has the reward AND it has to be the last card */}
          {exams.length === idx + 1 && freestyle.isAvailable ? (
            <FreestyleCard topicName={ex.name} freestyle={freestyle} />
          ) : null}
        </React.Fragment>
      ))}
    </Accordion>
  );
});

ExamsAccordion.propTypes = {
  exams: PropTypes.array.isRequired,
  reward: PropTypes.object.isRequired,
  freestyle: PropTypes.object.isRequired,
};

export default ExamsAccordion;
