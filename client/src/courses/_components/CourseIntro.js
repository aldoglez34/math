import React from "react";
import { Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import { HashLink as Link } from "react-router-hash-link";

const CourseIntro = React.memo(({ name, description, topics }) => {
  return (
    <Row>
      <Col lg={4} className="bg-light">
        <h1 style={{ fontWeight: 600 }} className="mb-3">
          Curso de <span className="bg-dark text-light">{name}</span>
        </h1>
        <p>
          <i className="fas fa-bullhorn mr-2" />
          {description}
        </p>
      </Col>
      <Col lg={8} className="mt-3 mt-lg-0">
        <h4 style={{ fontWeight: 600 }}>Temario</h4>
        <ul>
          {topics.map((t) => (
            <li>
              <Link to={"/dashboard/arithmetic#" + t}>{t}</Link>
            </li>
          ))}
        </ul>
      </Col>
    </Row>
  );
});

CourseIntro.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  topics: PropTypes.array.isRequired,
};

export default CourseIntro;
