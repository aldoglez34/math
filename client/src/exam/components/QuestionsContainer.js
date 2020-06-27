import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { Button, Form, Row, Col, Modal } from "react-bootstrap";

const QuestionsContainer = React.memo(({ examName, questions }) => {
  const [number, setNumber] = useState(1);

  const [answers, setAnswers] = useState([]);

  const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);

  const inputRef = useRef();

  const increment = () => {
    // save the answer
    const a = inputRef.current.value;
    setAnswers([...answers, a]);

    // clean the input
    inputRef.current.value = "";

    if (number === questions.length) {
      setShow(true);
    } else {
      setNumber(number + 1);
    }
  };

  return (
    <div style={{ marginTop: "50px" }}>
      <h1>{examName}</h1>
      <Row className="mt-4">
        <Col lg={{ span: 6, offset: 3 }} className="p-4">
          <h4>
            {questions.filter((q) => q.qNumber === number)[0].qInstruction}
          </h4>
          <h4>
            {
              questions.filter((q) => q.qNumber === number)[0]
                .qTechnicalInstruction
            }
          </h4>
          <Form className="w-50 mt-4">
            <div className="d-flex flex-row mt-3">
              <Form.Control type="text" maxLength="10" ref={inputRef} />
              {questions.filter((q) => q.qNumber === number)[0]
                .qCorrectAnswerComplement ? (
                <h4 className="ml-2 mb-0">
                  {
                    questions.filter((q) => q.qNumber === number)[0]
                      .qCorrectAnswerComplement
                  }
                </h4>
              ) : null}
            </div>
          </Form>
          <Button variant="success" className="mt-4" onClick={increment}>
            Siguiente
          </Button>
        </Col>
      </Row>
      {/* results */}
      <Modal show={show} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Resultado del examen</Modal.Title>
        </Modal.Header>
        <Modal.Body>{answers.toString()}</Modal.Body>
        <Modal.Footer>
          <Button>Ir al curso</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
});

QuestionsContainer.propTypes = {
  examName: PropTypes.string.isRequired,
  questions: PropTypes.array.isRequired,
};

export default QuestionsContainer;
