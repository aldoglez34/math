import React from "react";
import { Row, Col } from "react-bootstrap";
import { string, object } from "prop-types";
import { ExamsAccordion, HelpModal, PDFLInk } from "./";

export const Topic = React.memo(({ courseName, topic }) => {
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
                style={{ fontSize: "35px" }}
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
          <div className="mb-2">
            {topic.material
              .filter(({ type }) => type === "video")
              .map((m) => (
                <p key={m._id} className="mb-1">
                  <a
                    className="text-info"
                    href={m.link}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fas fa-video mr-2" />
                    {m.name}
                  </a>
                </p>
              ))}
            {topic.material
              .filter(({ type }) => type === "pdf")
              .map((m) => (
                <PDFLInk key={m._id} path={m.link} name={m.name} />
              ))}
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
            topicName={topic.name}
            topicId={topic._id}
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
  courseName: string.isRequired,
  topic: object.isRequired,
};
