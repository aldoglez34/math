import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { string, array } from "prop-types";
import MyTopic from "./badge/MyTopic";
import MedalTable from "./medaltable/MedalTable";
import "./courseintro.scss";

const CourseIntro = React.memo(({ name, topics, rewards }) => {
  return (
    <div id="courseintrostyle">
      <Container>
        <Button className="courseIntroBackToHomeBttn" href="/dashboard">
          <i className="fas fa-long-arrow-alt-left mr-2" />
          <span>Regresar a mis cursos</span>
        </Button>
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
            <MedalTable rewards={rewards} />
          </Col>
        </Row>
      </Container>
    </div>
  );
});

CourseIntro.propTypes = {
  name: string.isRequired,
  rewards: array.isRequired,
  topics: array.isRequired,
};

export default CourseIntro;
