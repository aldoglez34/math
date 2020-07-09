import React from "react";
import { Row, Col, Accordion, Button, Card } from "react-bootstrap";
import PropTypes from "prop-types";
import DifficultyStars from "./DifficultyStars";
import LastVisited from "./LastVisited";
import { useDispatch } from "react-redux";
import * as examActions from "../../redux/actions/exam";

const ExamsAccordion = React.memo(({ exams, reward, freestyle }) => {
  const dispatch = useDispatch();

  const setExamInRedux = async (_id, topicName, name, difficulty) => {
    dispatch(
      examActions.setExam({
        _id,
        topicName,
        reward,
        name,
        difficulty,
      })
    );
  };

  return (
    <Accordion className="shadow-sm">
      {exams.map((ex) => (
        <Card key={ex._id}>
          {/* TITLE */}
          <Card.Header style={{ backgroundColor: "#f4fbf8" }}>
            <Accordion.Toggle as={Button} variant="link" eventKey={ex._id}>
              <i className="fas fa-chevron-down mr-1" />
              <strong>{ex.name}</strong>
              {ex.hasPerfectGrade ? (
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
              <h2 className="mb-2">{ex.name}</h2>
              {/* stars */}
              <DifficultyStars difficulty={ex.difficulty} />
              {/* description */}
              <p style={{ fontSize: "14px" }} className="mb-2 mt-2">
                {ex.description}
              </p>
              {/* latest attempt */}
              <LastVisited date={ex.latestAttempt} />
              <br />
              {/* duration */}
              <span style={{ fontSize: "14px" }} title="Duración">
                <i className="fas fa-stopwatch mr-2" />
                {ex.duration + " mins."}
              </span>
              {/* columns */}
              <Row className="my-3">
                <Col className="text-center">
                  <h1 className="mb-0 text-info">{ex.highestGrade}</h1>
                  <h4>
                    <small className="text-muted">Calificación</small>
                  </h4>
                </Col>
                <Col className="text-center">
                  <h1 className="mb-0 text-info">{ex.attemptsCounter}</h1>
                  <h4>
                    <small className="text-muted">Intentos</small>
                  </h4>
                </Col>
              </Row>
              {/* go to exam - button */}
              <Button
                onClick={() =>
                  setExamInRedux(ex._id, ex.topicName, ex.name, ex.difficulty)
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
                title={
                  ex.isAvailable
                    ? null
                    : "Para desbloquear este nivel es necesario aprobar el anterior con 8 o más"
                }
              >
                Iniciar
              </Button>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      ))}
      {/* freestyle */}
      {/* <FreestyleCard freestyleTimer={freestyleTimer} /> */}
    </Accordion>
  );
});

ExamsAccordion.propTypes = {
  exams: PropTypes.array.isRequired,
  reward: PropTypes.object.isRequired,
  freestyle: PropTypes.object.isRequired,
};

export default ExamsAccordion;
