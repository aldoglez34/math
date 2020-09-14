import React from "react";
import { Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import ExamsAccordion from "./ExamsAccordion";
import HelpModal from "./help/HelpModal";

const Topic = React.memo(({ courseName, topic }) => {
  return (
    <>
      <Row id={topic.name}>
        {/* title */}
        <Col>
          <h1 className="display-4 topicName mb-2" style={{ color: "#48bf84" }}>
            {topic.name}
            {topic.hasReward ? (
              <i
                className="fas fa-medal text-warning ml-2"
                title="Aprobado"
                style={{ fontSize: "35px", cursor: "help" }}
              />
            ) : null}
          </h1>
          <div className="d-flex mb-3">
            <h3
              className="mb-0"
              style={{ backgroundColor: "#c6d9d7", color: "#212529" }}
            >
              {topic.subject}
            </h3>
          </div>
        </Col>
      </Row>
      <Row>
        {/* description and material */}
        <Col lg={6}>
          <p className="mb-2">
            <i className="fas fa-bullhorn mr-2 text-dark" />
            {topic.description}
          </p>
          <p className="mb-2">
            <i className="fas fa-hand-point-down mr-2 text-dark" />
            Apuntes, teoría, videos y más
          </p>
          <div className="mb-2">
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
          {/* help modal */}
          <HelpModal courseName={courseName} topic={topic.name} />
        </Col>
        {/* exams */}
        <Col lg={6} className="mt-2 mt-lg-0">
          <h4 className="mb-3" style={{ color: "#212529" }}>
            Exámenes
          </h4>
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
  courseName: PropTypes.string.isRequired,
  topic: PropTypes.object.isRequired,
};

export default Topic;
