import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { string, array } from "prop-types";
import { MedalTable, TopicBadge } from "./";
import cn from "classnames";

import styles from "./courseintro.module.scss";

export const CourseIntro = React.memo(({ name, topics, rewards }) => {
  return (
    <div className={styles.container}>
      <Container>
        <Button className={styles.backButton} href="/dashboard">
          <i className="fas fa-long-arrow-alt-left mr-2" />
          <span>Regresar a mis cursos</span>
        </Button>
        {/* topic name */}
        <h1 className={cn("display-1", "text-white", styles.topicName)}>
          {name}
        </h1>
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
                <TopicBadge key={t.name} topicName={t.name} />
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
