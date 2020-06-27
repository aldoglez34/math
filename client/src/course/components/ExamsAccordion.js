import React from "react";
import { Row, Col, Accordion, Button, Badge, Card } from "react-bootstrap";
import PropTypes from "prop-types";
// import { useSelector } from "react-redux";
// import API from "../../utils/API";

const ExamsAccordion = React.memo(({ exams }) => {
  // const student = useSelector((state) => state.student);

  // const registerExam = (exam) => {
  //   API.registerExam({ studentId: student._id, exam })
  //     .then((res) => console.log(res.data))
  //     .catch((err) => {
  //       console.log(err);
  //       alert("Ocurrió un error al registrar el examen");
  //     });
  // };

  return (
    <Accordion>
      {exams.map((ex) => (
        <Card key={ex._id}>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey={ex._id}>
              <i className="fas fa-chevron-down mr-2" />
              {ex.name}
              <Badge
                variant="info"
                pill
                className="ml-2"
                style={{ fontSize: "11px" }}
              >
                {ex.difficulty}
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
                // onClick={() => registerExam(ex.name)}
                href={"/exam/" + ex._id}
                variant="primary"
              >
                Iniciar examen
              </Button>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      ))}
    </Accordion>
  );
});

ExamsAccordion.propTypes = {
  exams: PropTypes.array.isRequired,
};

export default ExamsAccordion;
