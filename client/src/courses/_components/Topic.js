import React from "react";
import { Row, Col, ListGroup } from "react-bootstrap";
import PropTypes from "prop-types";

const Topic = React.memo(({ name, learnList, material, exercises }) => {
  return (
    <Row id={name}>
      <Col lg={4}>
        <h1 style={{ fontWeight: 600 }}>{name}</h1>
        <hr className="myDivider" />
        <p className="lead mb-1" style={{ fontWeight: 500 }}>
          <i className="far fa-lightbulb mr-2" />
          En esta sección aprenderás a:
        </p>
        <ul className="mb-1">
          {learnList.map((ll, idx) => (
            <li key={idx}>{ll}</li>
          ))}
        </ul>
        {material.map((mat) => {
          return (
            <p key={mat.text} className="mb-1" style={{ fontWeight: 500 }}>
              <a href={mat.link} target="_blank" rel="noopener noreferrer">
                {mat.icon}
                {mat.text}
              </a>
            </p>
          );
        })}
      </Col>
      <Col lg={8} className="mt-2 mt-lg-0">
        <ListGroup>
          {exercises.map((ex) => {
            return (
              <ListGroup.Item
                key={ex.text}
                action
                variant="primary"
                href={ex.link}
              >
                <strong>{ex.text}</strong>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </Col>
    </Row>
  );
});

Topic.propTypes = {
  name: PropTypes.string.isRequired,
  learnList: PropTypes.array.isRequired,
  material: PropTypes.array.isRequired,
  exercises: PropTypes.array.isRequired,
};

export default Topic;
