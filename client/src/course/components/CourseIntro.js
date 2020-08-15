import React from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";
import PropTypes from "prop-types";
import EmptyMedal from "./medal/EmptyMedal";

const CourseIntro = React.memo(({ name, topics }) => {
  return (
    <div style={{ backgroundColor: "#f4fbf8" }}>
      <Container className="pt-4 pt-lg-3 pb-4">
        <h1 className="mb-0 display-3" style={{ color: "#0f5257" }}>
          {name}
        </h1>
        <Row className="mt-4">
          <Col lg={5}>
            <h3 style={{ color: "#50575e" }} style={{ color: "#0f5257" }}>
              Temario
            </h3>
            {topics.map((t) => (
              <span
                key={t._id}
                className="d-block"
                style={{ fontSize: "15.5px" }}
              >
                <strong>
                  <Link
                    smooth
                    to={"/course/#" + t.name}
                    title={"Ir a " + t.name}
                  >
                    {/* <Badge variant="dark" className="mr-2">
                      {t.subject}
                    </Badge> */}
                    <Badge variant="info" pill className="mr-2 my-1 shadow-sm">
                      <i
                        className="fas fa-location-arrow mr-1"
                        style={{ fontSize: "9px" }}
                      />
                      <span style={{ fontSize: "13px" }}>{t.name}</span>
                    </Badge>
                    {/* <i
                      className="fas fa-location-arrow mr-1"
                      style={{ fontSize: "13px" }}
                    />
                    {t.name} */}
                  </Link>
                </strong>
              </span>
            ))}
          </Col>
          <Col lg={7} className="mt-4 mt-lg-0 pb-3 pb-lg-0">
            <h3 style={{ color: "#50575e" }} style={{ color: "#0f5257" }}>
              Medallero
            </h3>
            <div className="mt-3">
              <EmptyMedal />
              <EmptyMedal />
              <EmptyMedal />
              <EmptyMedal />
              <EmptyMedal />
              <EmptyMedal />
              <EmptyMedal />
              <EmptyMedal />
              <EmptyMedal />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
});

CourseIntro.propTypes = {
  name: PropTypes.string.isRequired,
  topics: PropTypes.array.isRequired,
};

export default CourseIntro;
