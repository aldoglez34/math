import React from "react";
import { Row, Col, ListGroup } from "react-bootstrap";
import PropTypes from "prop-types";

const Topic = React.memo(
  ({ code, name, description, toLearn, material, exams }) => {
    return (
      <>
        <Row id={name} style={{ marginTop: "70px" }}>
          <Col>
            <h1 className="display-4">{name}</h1>
          </Col>
        </Row>
        <Row>
          <Col lg={5}>
            <hr className="myDivider" />
            <p className="mb-3">{description}</p>
            <p className="mb-1" style={{ fontSize: "13px" }}>
              <i className="far fa-lightbulb mr-2" />
              En esta sección aprenderás a:
            </p>
            <ul className="mb-3">
              {toLearn.map((tl) => (
                <li key={tl}>{tl}</li>
              ))}
            </ul>
            <div className="mb-3 mb-lg-0">
              {material.map((mat) => {
                return (
                  <p key={mat._id} className="mb-1">
                    <a
                      href={mat.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {mat.type === "video" ? (
                        <i className="fas fa-video mr-2" />
                      ) : mat.type === "pdf" ? (
                        <i className="fas fa-file-pdf mr-2" />
                      ) : null}
                      {mat.name}
                    </a>
                  </p>
                );
              })}
            </div>
          </Col>
          <Col lg={7} className="mt-2 mt-lg-0">
            <h3 className="mb-3 mt-0 mt-lg-2">Ejercicios</h3>
            <ListGroup>
              {exams.map((ex) => {
                return (
                  <ListGroup.Item
                    key={ex}
                    action
                    variant="light"
                    href={`/course/${code}/${name}/${ex}`}
                  >
                    <strong className="text-primary">{ex}</strong>
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          </Col>
        </Row>
      </>
    );
  }
);

Topic.propTypes = {
  code: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  toLearn: PropTypes.array.isRequired,
  material: PropTypes.array.isRequired,
  exams: PropTypes.array.isRequired,
};

export default Topic;
