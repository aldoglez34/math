import React from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import PropTypes from "prop-types";
import { HashLink as Link } from "react-router-hash-link";

const CourseIntro = React.memo(({ code, name, description, topics }) => {
  return (
    <Container className="px-0 px-lg-3">
      <Row>
        <Col lg={5} style={{ backgroundColor: "#e6e8e9" }}>
          <h1 className="mb-3 display-4">
            <span className="bg-dark text-light">{name}</span>
          </h1>
          <p style={{ fontSize: "16px" }}>
            <i className="fas fa-bullhorn mr-2 text-dark" />
            {description}
          </p>
        </Col>
        <Col lg={7} className="mt-3 mt-lg-0">
          <h3>Temario del curso</h3>
          {topics.map((t) => (
            <span
              key={t._id}
              className="d-block"
              style={{ fontSize: "15.5px" }}
            >
              <Badge variant="light" className="mr-2">
                {t.subject}
              </Badge>
              <Link to={"/course/" + code + "#" + t.name}>{t.name}</Link>
            </span>
          ))}
        </Col>
      </Row>
    </Container>
  );
});

CourseIntro.propTypes = {
  code: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  topics: PropTypes.array.isRequired,
};

export default CourseIntro;
