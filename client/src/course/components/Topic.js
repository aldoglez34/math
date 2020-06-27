import React from "react";
import { Row, Col, Accordion, Card, Button, Badge } from "react-bootstrap";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import API from "../../utils/API";

const Topic = React.memo(
  ({ code, name, description, toLearn, material, exams }) => {
    const student = useSelector((state) => state.student);

    const registerExam = (exam) => {
      API.registerExam({ studentId: student._id, exam })
        .then((res) => console.log(res.data))
        .catch((err) => {
          console.log(err);
          alert("Ocurrió un error al registrar el examen");
        });
    };

    return (
      <>
        <Row id={name} style={{ marginTop: "35px" }}>
          {/* title */}
          <Col>
            <h1 style={{ fontSize: "39px" }}>{name}</h1>
          </Col>
        </Row>
        <Row>
          {/* description and material */}
          <Col lg={6}>
            <hr className="myDivider" />
            <p className="mb-3">{description}</p>
            <p className="mb-1">
              <i className="far fa-lightbulb mr-2" />
              En esta sección aprenderás a:
            </p>
            <ul className="mb-3">
              {toLearn.map((tl) => (
                <li key={tl}>{tl}</li>
              ))}
            </ul>
            <div className="mb-3 mb-lg-0">
              {material.map((mat) => {
                return (
                  <p key={mat._id} className="mb-1">
                    <a
                      href={mat.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {mat.type === "video" ? (
                        <i className="fas fa-video mr-2" />
                      ) : mat.type === "pdf" ? (
                        <i className="fas fa-file-pdf mr-2" />
                      ) : null}
                      {mat.name}
                    </a>
                  </p>
                );
              })}
            </div>
          </Col>
          {/* exercises */}
          <Col lg={6} className="mt-2 mt-lg-0">
            <h4 className="mb-3 mt-0 mt-lg-3">Ejercicios</h4>
            <Accordion>
              {exams.map((ex) => (
                <Card key={ex._id}>
                  <Card.Header>
                    <Accordion.Toggle
                      as={Button}
                      variant="link"
                      eventKey={ex._id}
                    >
                      <i className="fas fa-chevron-down mr-2" />
                      {ex.name}
                      <Badge
                        variant="info"
                        pill
                        className="ml-2"
                        style={{ fontSize: "11px" }}
                      >
                        {ex.level}
                      </Badge>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey={ex._id}>
                    <Card.Body>
                      <h3 className="text-primary">{ex.name}</h3>
                      <p style={{ fontSize: "14px" }} className="mb-3">
                        {ex.description}
                      </p>
                      <Row className="mb-3">
                        <Col>
                          <h3 className="mb-0">{ex.duration} m</h3>
                          <h4>
                            <small className="text-muted">duración</small>
                          </h4>
                        </Col>
                        <Col>
                          <h3 className="mb-0">{ex.qCounter}</h3>
                          <h4>
                            <small className="text-muted">preguntas</small>
                          </h4>
                        </Col>
                        <Col>
                          <h3 className="mb-0">0</h3>
                          <h4>
                            <small className="text-muted">intentos</small>
                          </h4>
                        </Col>
                      </Row>
                      <Button
                        onClick={() => registerExam(ex.name)}
                        href={`/course/${code}/${name}/${ex.name}`}
                        variant="primary"
                      >
                        Iniciar examen
                      </Button>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              ))}
            </Accordion>
          </Col>
        </Row>
      </>
    );
  }
);

Topic.propTypes = {
  code: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  toLearn: PropTypes.array.isRequired,
  material: PropTypes.array.isRequired,
  exams: PropTypes.array.isRequired,
};

export default Topic;
