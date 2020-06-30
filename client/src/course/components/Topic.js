import React from "react";
import { Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import ExamsAccordion from "./ExamsAccordion";

const Topic = React.memo(
  ({
    name,
    description,
    toLearn,
    material,
    exams,
    freestyleTimer,
    freestyleAttemptsCounter,
    freestyleLatestVisit,
    freestyleHighestScore,
    courseId,
  }) => {
    return (
      <>
        <Row id={name} style={{ marginTop: "35px" }}>
          {/* title */}
          <Col>
            <h1 className="display-4" style={{ color: "#48bf84" }}>
              {name}
            </h1>
          </Col>
        </Row>
        <Row>
          {/* description and material */}
          <Col lg={6}>
            <p className="mb-3">{description}</p>
            <p className="mb-1">
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
          {/* exams */}
          <Col lg={6} className="mt-2 mt-lg-0">
            <h4 className="mb-3 mt-0 mt-lg-3">Exámenes</h4>
            <ExamsAccordion
              exams={exams}
              courseId={courseId}
              // freestyle props
              freestyleTimer={freestyleTimer}
              freestyleAttemptsCounter={freestyleAttemptsCounter}
              freestyleLatestVisit={freestyleLatestVisit}
              freestyleHighestScore={freestyleHighestScore}
            />
          </Col>
        </Row>
      </>
    );
  }
);

Topic.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  toLearn: PropTypes.array.isRequired,
  material: PropTypes.array.isRequired,
  exams: PropTypes.array.isRequired,
  courseId: PropTypes.string.isRequired,
  freestyleTimer: PropTypes.number.isRequired,
};

export default Topic;
