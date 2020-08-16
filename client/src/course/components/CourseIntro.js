import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import MyTopic from "./badge/MyTopic";
import MedalTable from "./medaltable/MedalTable";

const CourseIntro = React.memo(({ name, topics }) => {
  return (
    <div
      style={{
        backgroundColor: "#f4fbf8",
        paddingTop: "45px",
        paddingBottom: "70px",
      }}
    >
      <Container>
        {/* topic name */}
        <h1 className="mb-0 display-2" style={{ color: "#154e55" }}>
          {name}
        </h1>
        {/* <hr style={{ border: "1px solid gainsboro", marginTop: "1" }} /> */}
        <Row className="mt-1">
          {/* temario */}
          <Col lg={5}>
            <h4 style={{ color: "#154e55" }} className="mb-3">
              Temario
            </h4>
            <div className="d-flex flex-column">
              {topics.map((t) => (
                <MyTopic key={t.name} topicName={t.name} />
              ))}
            </div>
          </Col>
          {/* medallero */}
          <Col lg={7} className="mt-4 mt-lg-0 pb-3 pb-lg-0">
            <h4 style={{ color: "#154e55" }} className="mb-3">
              Medallero
            </h4>
            <div className="mt-2">
              <MedalTable />
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
