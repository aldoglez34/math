import React from "react";
import { Accordion, Button, Card, Col, Container, Row } from "react-bootstrap";
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
        <h1 className={cn("display-1", "text-white", "mb-0", styles.topicName)}>
          {name}
        </h1>
        <br />
        <Row>
          <Col lg={6}>
            <h3 style={{ color: "#828c90" }} className="mb-3">
              Temario
            </h3>
            <div className="d-flex flex-column">
              {topics.map((t) => (
                <TopicBadge key={t.name} topicName={t.name} />
              ))}
            </div>
          </Col>
          <Col lg={6} className="mt-4 mt-lg-0">
            <div className="d-none d-md-block">
              <h3 style={{ color: "#828c90" }} className="mb-3">
                Medallero
              </h3>
              <MedalTable rewards={rewards} />
            </div>
            <div className="d-block d-md-none mb-0 pb-0">
              <Accordion>
                <Card className="bg-transparent border-0">
                  <Card.Header className="bg-transparent p-0 border-0">
                    <Accordion.Toggle
                      as={Button}
                      variant="link"
                      eventKey="0"
                      className="p-0"
                      style={{ boxShadow: "none", textDecoration: "none" }}
                    >
                      <h3 style={{ color: "#828c90" }} className="mb-3">
                        <i className="fas fa-chevron-down mr-2" />
                        Medallero
                      </h3>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body className="p-0">
                      <MedalTable rewards={rewards} />
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
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
