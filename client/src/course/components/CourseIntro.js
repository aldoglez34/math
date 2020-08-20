import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import MyTopic from "./badge/MyTopic";
import MedalTable from "./medaltable/MedalTable";
import "./courseintro.scss";

const CourseIntro = React.memo(({ name, topics, rewards }) => {
  return (
    <div id="courseintrostyle">
      <Container>
        {/* topic name */}
        <h1 className="display-1 topicNameIntro text-white">{name}</h1>
        <br />
        <Row>
          {/* temario */}
          <Col lg={6}>
            <h3 style={{ color: "#828c90" }} className="mb-3">
              Temario
            </h3>
            {/* <br /> */}
            <div className="d-flex flex-column">
              {topics.map((t) => (
                <MyTopic key={t.name} topicName={t.name} />
              ))}
            </div>
          </Col>
          {/* medallero */}
          <Col lg={6} className="mt-4 mt-lg-0 pb-3 pb-lg-0">
            <h3 style={{ color: "#828c90" }} className="mb-3">
              Medallero
            </h3>
            {/* <br /> */}
            <MedalTable rewards={rewards} />
          </Col>
        </Row>
      </Container>
    </div>
  );
});

CourseIntro.propTypes = {
  name: PropTypes.string.isRequired,
  topics: PropTypes.array.isRequired,
  rewards: PropTypes.array.isRequired,
};

export default CourseIntro;
