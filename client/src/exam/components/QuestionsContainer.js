import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { Button, Form, Row, Col, Modal } from "react-bootstrap";
import "./questioncontainer.scss";

const QuestionsContainer = React.memo(({ examName, questions }) => {
  const [number, setNumber] = useState(1);

  const [answers, setAnswers] = useState([]);

  const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);

  const [correctAnswers, setCorrectAnswers] = useState();

  const inputRef = useRef();

  const calculateResults = () => {
    const result = questions.reduce((acc, cv) => {
      const studentAnswer = answers[cv.qNumber - 1];

      acc.push({
        qNumber: cv.qNumber,
        qCorrectAnswer: cv.qCorrectAnswer,
        studentAnswer,
        result: cv.qCorrectAnswer === studentAnswer ? 1 : 0,
      });
      return acc;
    }, []);

    const correctAnswers = result.reduce((acc, cv) => {
      if (cv.result === 1) {
        acc++;
      }
      return acc;
    }, 0);

    setCorrectAnswers(correctAnswers);
  };

  const increment = () => {
    // save the answer
    const a = inputRef.current.value;
    setAnswers([...answers, a]);

    // clean the input
    inputRef.current.value = "";

    if (number === questions.length) {
      // preparing results
      calculateResults();
      // show modal
      setShow(true);
    } else {
      // advance question
      setNumber(number + 1);
      inputRef.current.focus();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      increment();
    }
  };

  return (
    <div id="qContainer">
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
              <Form.Control
                type="text"
                maxLength="10"
                ref={inputRef}
                onKeyDown={handleKeyDown}
              />
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
          {questions.filter((q) => q.qNumber === number)[0].qComment ? (
            <span className="text-muted mt-2 mb-2">
              questions.filter((q) => q.qNumber === number)[0].qComment
            </span>
          ) : null}
          <Button variant="success" className="mt-4" onClick={increment}>
            Siguiente
          </Button>
        </Col>
      </Row>
      {/* results */}
      <Modal show={show}>
        <Modal.Body>
          <h1 className="display">Resultado</h1>
          <div className="mt-3 text-center bg-success rounded py-3">
            <h1 className="display-3 text-light">
              <i className="fas fa-check" />
            </h1>
            <h1 className="text-light">¡Felicidades!</h1>
          </div>
          <div className="mt-3">
            <h4>
              Correctas: <span>{correctAnswers}</span>
            </h4>
            <h4>
              Incorrectas: <span>{questions.length - correctAnswers}</span>
            </h4>
          </div>
          <Button className="mt-3" variant="success">
            Regresar
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
});

QuestionsContainer.propTypes = {
  examName: PropTypes.string.isRequired,
  questions: PropTypes.array.isRequired,
};

export default QuestionsContainer;
