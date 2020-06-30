import React from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";
import PropTypes from "prop-types";

const CourseIntro = React.memo(
  ({ name, longDescription, topics, courseId }) => {
    return (
      <div style={{ backgroundColor: "#f4fbf8" }}>
        <Container className="pt-4 pt-lg-3 pb-4">
          <h1 className="mb-0 display-3" style={{ color: "#0f5257" }}>
            {name}
          </h1>
          <Row className="mt-4">
            <Col lg={6}>
              <h4>¿De qué trata el curso?</h4>
              <p style={{ fontSize: "16px" }} className="mb-0">
                <i className="fas fa-bullhorn mr-2 text-dark" />
                {longDescription}
              </p>
            </Col>
            <Col lg={6} className="mt-2 mt-lg-0 pb-3 pb-lg-0">
              <h4>Temario</h4>
              {topics.map((t) => (
                <span
                  key={t._id}
                  className="d-block"
                  style={{ fontSize: "15.5px" }}
                >
                  <Badge variant="dark" className="mr-2">
                    {t.subject}
                  </Badge>
                  <strong>
                    <Link to={"/course/" + courseId + "#" + t.name}>
                      {t.name}
                    </Link>
                  </strong>
                </span>
              ))}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
);

CourseIntro.propTypes = {
  name: PropTypes.string.isRequired,
  longDescription: PropTypes.string.isRequired,
  topics: PropTypes.array.isRequired,
  courseId: PropTypes.string.isRequired,
};

export default CourseIntro;
