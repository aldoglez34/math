import React from "react";
import { Row, Col, Accordion, Button, Card } from "react-bootstrap";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import API from "../../utils/API";
import DifficultyStars from "./DifficultyStars";
import FreestyleCard from "./FreestyleCard";
import moment from "moment";
import "moment/locale/es";

const ExamsAccordion = React.memo(
  ({
    exams,
    freestyleTimer,
    freestyleAttemptsCounter,
    freestyleLatestVisit,
    freestyleHighestScore,
    isFreestyleAvailable,
    courseId,
  }) => {
    const student = useSelector((state) => state.student);

    const registerAttempt = (examId) => {
      API.registerAttempt({ studentId: student._id, examId, score: 0 })
        .then((res) => console.log(res.data))
        .catch((err) => {
          console.log("Error", err);
          // alert("Ocurrió un error al registrar el examen");
        });
    };

    return (
      <Accordion className="shadow-sm">
        {exams.map((ex) => (
          <Card key={ex._id}>
            {/* TITLE */}
            <Card.Header style={{ backgroundColor: "#f4fbf8" }}>
              <Accordion.Toggle as={Button} variant="link" eventKey={ex._id}>
                <i className="fas fa-chevron-down mr-1" />
                <strong>
                  {ex.name}
                  {ex.difficulty === "Final" ? (
                    <i className="fas fa-medal ml-2 text-warning" />
                  ) : null}
                </strong>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={ex._id}>
              <Card.Body>
                {/* TITLE 2 */}
                <h2 className="mb-2">
                  {ex.name}
                  {ex.difficulty === "Final" ? (
                    <i
                      className="fas fa-medal ml-2 text-warning"
                      title="Medalla final"
                    />
                  ) : null}
                </h2>
                {/* stars */}
                <DifficultyStars difficulty={ex.difficulty} />
                {/* latest attempt */}
                <strong
                  className="mb-2 d-block"
                  style={{ fontSize: "14px" }}
                  title="Último intento"
                >
                  <em>
                    {ex.latestAttempt
                      ? moment(ex.latestAttempt).format("LLLL")
                      : "No has presentado este examen"}
                  </em>
                </strong>
                {/* description */}
                <p style={{ fontSize: "14px" }} className="mb-3">
                  {ex.description}
                </p>
                {/* columns */}
                <Row className="mb-3 py-2 pt-3">
                  <Col className="text-center">
                    <h1 className="mb-0 text-info">{ex.highestScore}</h1>
                    <h4>
                      <small className="text-muted">Mayor puntaje</small>
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
                  onClick={() => registerAttempt(ex._id)}
                  href={"/course/" + courseId + "/exam/" + ex._id}
                  variant="primary"
                  className="shadow-sm"
                  disabled={ex.isAvailable ? false : true}
                >
                  Iniciar examen
                </Button>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
        {/* freestyle */}
        <FreestyleCard
          freestyleTimer={freestyleTimer}
          freestyleAttemptsCounter={freestyleAttemptsCounter}
          freestyleLatestVisit={freestyleLatestVisit}
          freestyleHighestScore={freestyleHighestScore}
          isFreestyleAvailable={isFreestyleAvailable}
        />
      </Accordion>
    );
  }
);

ExamsAccordion.propTypes = {
  exams: PropTypes.array.isRequired,
  freestyleTimer: PropTypes.number.isRequired,
  freestyleAttemptsCounter: PropTypes.number.isRequired,
  freestyleLatestVisit: PropTypes.string,
  freestyleHighestScore: PropTypes.number,
  isFreestyleAvailable: PropTypes.bool.isRequired,
  courseId: PropTypes.string.isRequired,
};

export default ExamsAccordion;
