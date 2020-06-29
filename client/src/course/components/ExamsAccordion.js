import React from "react";
import { Row, Col, Accordion, Button, Card } from "react-bootstrap";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import API from "../../utils/API";
import moment from "moment";
import "moment/locale/es";

const ExamsAccordion = React.memo(({ exams, courseId }) => {
  const student = useSelector((state) => state.student);

  const registerScore = (examId) => {
    API.registerScore({ studentId: student._id, examId, score: 0 })
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.log(err);
        alert("Ocurrió un error al registrar el examen");
      });
  };

  const calculateDifficulty = (difficulty) => {
    switch (difficulty) {
      case "Básico":
        return (
          <>
            <i className="fas fa-star pb-1 mx-1" />
            <i className="far fa-star pb-1 mx-1" />
            <i className="far fa-star pb-1 mx-1" />
          </>
        );
      case "Intermedio":
        return (
          <>
            <i className="fas fa-star pb-1 mx-1" />
            <i className="fas fa-star pb-1 mx-1" />
            <i className="far fa-star pb-1 mx-1" />
          </>
        );
      case "Avanzado":
        return (
          <>
            <i className="fas fa-star pb-1 mx-1" />
            <i className="fas fa-star pb-1 mx-1" />
            <i className="fas fa-star pb-1 mx-1" />
          </>
        );
      default:
        break;
    }
  };

  const showDate = (highestScores) => {
    const date = highestScores.filter((hs) => hs.student === student._id);

    const formattedDate = date.length
      ? moment(date[0].date).format("llll")
      : "nunca";

    return formattedDate;
  };

  const showScore = (highestScores) => {
    const score = highestScores.filter((hs) => hs.student === student._id);

    return score.length ? score[0].score : 0;
  };

  return (
    <Accordion>
      {exams.map((ex) => (
        <Card key={ex._id}>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey={ex._id}>
              <i className="fas fa-chevron-down mr-1" />
              <strong>{ex.name}</strong>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey={ex._id}>
            <Card.Body>
              <h2 className="mb-3">{ex.name}</h2>
              <div className="d-flex flex-row align-items-center mb-2">
                <strong className="mr-1" style={{ fontSize: "15px" }}>
                  Dificultad:
                </strong>
                <span>{calculateDifficulty(ex.difficulty)}</span>
              </div>
              <div className="d-flex flex-row align-items-center mb-2">
                <strong className="mr-1" style={{ fontSize: "15px" }}>
                  Última visita:
                </strong>
                <span>{showDate(ex.highestScores)}</span>
              </div>
              <p style={{ fontSize: "14px" }} className="mb-3">
                {ex.description}
              </p>
              <Row className="mb-3">
                <Col>
                  <h3 className="mb-0">{ex.duration}</h3>
                  <h4>
                    <small className="text-muted">minutos</small>
                  </h4>
                </Col>
                <Col>
                  <h3 className="mb-0">{ex.qCounter}</h3>
                  <h4>
                    <small className="text-muted">ejercicios</small>
                  </h4>
                </Col>
                <Col>
                  <h3 className="mb-0">{showScore(ex.highestScores)}</h3>
                  <h4>
                    <small className="text-muted">puntaje</small>
                  </h4>
                </Col>
              </Row>
              <Button
                onClick={() => registerScore(ex._id)}
                href={"/course/" + courseId + "/exam/" + ex._id}
                variant="primary"
              >
                Iniciar examen
              </Button>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      ))}
    </Accordion>
  );
});

ExamsAccordion.propTypes = {
  exams: PropTypes.array.isRequired,
  courseId: PropTypes.string.isRequired,
};

export default ExamsAccordion;
