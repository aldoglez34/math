import React from "react";
import { Card, Button, Accordion, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import LastVisited from "./LastVisited";
import Leaderboards from "./modal/Leaderboards";
import { useDispatch } from "react-redux";
import * as examActions from "../../redux/actions/exam";

const FreestyleCard = React.memo(({ topicName, freestyle }) => {
  const dispatch = useDispatch();

  const setExamInRedux = async (obj) => {
    dispatch(examActions.setExam(obj));
  };

  return (
    <Card>
      <Card.Header style={{ backgroundColor: "#e7edee" }}>
        <Accordion.Toggle
          as={Button}
          variant="link"
          eventKey="freestyle"
          className="text-danger"
        >
          <i className="fas fa-bolt mr-2" />
          <strong>Modo Rápido</strong>
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="freestyle">
        <Card.Body>
          <h2 className="mb-3">Modo rápido</h2>
          {/* description */}
          <p style={{ fontSize: "14px" }} className="mb-2 mt-2">
            Integer eleifend nibh non sem tincidunt, at ultricies purus
            vestibulum. Vivamus sed lobortis ligula, ut lacinia elit.
          </p>
          {/* last visited */}
          <LastVisited date={freestyle.lastVisit} />
          <br />
          {/* duration */}
          <span style={{ fontSize: "14px", cursor: "help" }} title="Duración">
            <i className="fas fa-stopwatch mr-2" />
            {freestyle.timer + " mins."}
          </span>
          <br />
          <Leaderboards top10={freestyle.top10} />
          <br />
          {/* columns */}
          <Row className="my-3">
            <Col className="text-center">
              <h1 className="mb-0 text-info">
                <span style={{ cursor: "help" }} title="Puntuación más alta">
                  {freestyle.myHighestScore}
                </span>
              </h1>
              <h4>
                <small className="text-muted">Puntos</small>
              </h4>
            </Col>
            <Col className="text-center">
              <h1 className="mb-0 text-info" style={{ cursor: "help" }}>
                <span style={{ cursor: "help" }} title="Número de intentos">
                  {freestyle.myTryouts}
                </span>
              </h1>
              <h4>
                <small className="text-muted">Intentos</small>
              </h4>
            </Col>
          </Row>
          {/* button */}
          <Button
            variant="primary"
            className="shadow-sm"
            onClick={() =>
              setExamInRedux({
                duration: freestyle.timer,
                name: "Modo Rápido",
                topicName: topicName,
              })
                .then(() => (window.location.href = "/course/exam/freestyle"))
                .catch((err) => {
                  console.log("error", err);
                  alert("Ocurrió un error inesperado");
                  window.location.href = "/course";
                })
            }
          >
            <i className="fas fa-bolt mx-3" />
          </Button>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
});

FreestyleCard.propTypes = {
  freestyle: PropTypes.object.isRequired,
  topicName: PropTypes.string.isRequired,
};

export default FreestyleCard;
