import React from "react";
import { Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import ExamsAccordion from "./ExamsAccordion";

const Topic = React.memo(({ topic }) => {
  return (
    <>
      <Row id={topic.name} style={{ marginTop: "35px" }}>
        {/* title */}
        <Col>
          <h1 className="display-4" style={{ color: "#48bf84" }}>
            {topic.name}
            {topic.hasReward ? (
              <i
                className="fas fa-medal text-warning ml-2"
                title="Aprobado"
                style={{ fontSize: "35px", cursor: "help" }}
              />
            ) : null}
          </h1>
        </Col>
      </Row>
      <Row>
        {/* description and material */}
        <Col lg={6}>
          <p className="mb-3">{topic.description}</p>
          <p className="mb-1">
            <i className="fas fa-lightbulb mr-2" />
            En esta sección aprenderás a:
          </p>
          <ul className="mb-3">
            {topic.toLearn.map((tl, idx) => (
              <li key={idx}>{tl}</li>
            ))}
          </ul>
          <span>Videos, Pdfs y más:</span>
          <div className="mb-3 mt-1 mb-lg-0">
            {topic.material.map((mat) => {
              return (
                <p key={mat._id} className="mb-1">
                  <a href={mat.link} target="_blank" rel="noopener noreferrer">
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
        {/* exams */}
        <Col lg={6} className="mt-2 mt-lg-0">
          <h4 className="mb-3">Exámenes</h4>
          <ExamsAccordion
            exams={topic.exams}
            reward={topic.reward}
            freestyle={{
              ...topic.freestyle,
              isAvailable: topic.hasReward,
              topicId: topic._id,
            }}
          />
        </Col>
      </Row>
    </>
  );
});

Topic.propTypes = {
  topic: PropTypes.object.isRequired,
};

export default Topic;
