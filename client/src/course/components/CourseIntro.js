import React from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import PropTypes from "prop-types";
import { HashLink as Link } from "react-router-hash-link";

const CourseIntro = React.memo(({ code, name, description, topics }) => {
  return (
    <Container className="px-0">
      <h1 className="mb-0 display-3" style={{ color: "#48bf84" }}>
        {name}
      </h1>
      <Row className="mt-4">
        <Col lg={6}>
          <h4>¿De qué trata el curso?</h4>
          <p style={{ fontSize: "16px" }} className="mb-0">
            <i className="fas fa-bullhorn mr-2 text-dark" />
            {description}
          </p>
        </Col>
        <Col lg={6} className="mt-2 mt-lg-0">
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
