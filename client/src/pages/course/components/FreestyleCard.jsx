import React from "react";
import { Card, Button, Accordion, Row, Col } from "react-bootstrap";
import { object, string } from "prop-types";
import { Leaderboards, LastVisited } from "./";
import { useDispatch } from "react-redux";
import * as examActions from "../../../redux/actions/exam";

export const FreestyleCard = React.memo(({ topicName, topicId, freestyle }) => {
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
          style={{ boxShadow: "none", textDecoration: "none" }}
        >
          <i className="fas fa-bolt mr-2" />
          <strong>Modo rápido</strong>
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="freestyle">
        <Card.Body>
          <h2 className="mb-3">Modo rápido</h2>
          {/* description */}
          <strong style={{ fontSize: "14px" }} className="mb-2 mt-2 d-block">
            Este es el examen modo rápido
          </strong>
          {/* last visited */}
          <LastVisited date={freestyle.lastVisit} />
          <br />
          {/* duration */}
          <span style={{ fontSize: "14px" }} title="Duración">
            <i className="fas fa-stopwatch mr-2" />
            {freestyle.timer + " mins."}
          </span>
          <br />
          <Leaderboards top10={freestyle.top10} />
          <br />
          {/* columns */}
          <Row className="my-3">
            <Col className="text-center">
              <h1 className="mb-0 text-danger">
                <span title="Puntuación más alta">
                  {freestyle.myHighestScore}
                </span>
              </h1>
              <h4>
                <small className="text-muted">Puntos</small>
              </h4>
            </Col>
            <Col className="text-center">
              <h1 className="mb-0 text-danger">
                <span title="Número de intentos">{freestyle.myTryouts}</span>
              </h1>
              <h4>
                <small className="text-muted">Intentos</small>
              </h4>
            </Col>
          </Row>
          {/* button */}
          <Button
            variant="danger"
            className="shadow-sm"
            onClick={() =>
              setExamInRedux({
                duration: freestyle.timer,
                name: "Modo rápido",
                topicName: topicName,
                topicId: topicId,
              })
                .then(() => (window.location.href = "/course/freestyle"))
                .catch((err) => {
                  console.log("error", err);
                  alert("Ocurrió un error inesperado");
                  window.location.href = "/course";
                })
            }
          >
            Iniciar
          </Button>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
});

FreestyleCard.propTypes = {
  freestyle: object.isRequired,
  topicName: string.isRequired,
};
