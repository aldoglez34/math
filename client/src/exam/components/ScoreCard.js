import React from "react";
import { Card } from "react-bootstrap";
import PropTypes from "prop-types";

const ScoreCard = React.memo(({ score }) => {
  return (
    <Card bg="light" text="dark">
      <Card.Header>
        <h1>{score}</h1>
      </Card.Header>
      <Card.Body>
        <Card.Title>Puntaje</Card.Title>
      </Card.Body>
    </Card>
  );
});

ScoreCard.propTypes = {
  score: PropTypes.number.isRequired,
};

export default ScoreCard;
