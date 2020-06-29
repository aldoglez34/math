import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Button, Form, Row, Col } from "react-bootstrap";
import CorrectModal from "./components/CorrectModal";
import WrongModal from "./components/WrongModal";

const QuestionsContainer = React.memo(({ questions }) => {
  const inputRef = useRef();

  // number of the question AND the question shown in screen
  const [number, setNumber] = useState(1);
  const [question, setQuestion] = useState();

  // score
  const [score, setScore] = useState(0);

  // modals
  const [showCorrectModal, setShowCorrectModal] = useState(false);
  const [showWrongModal, setShowWrongModal] = useState(false);

  useEffect(() => {
    setQuestion(questions.filter((q) => q.qNumber === number)[0]);
  }, [number]);

  const increment = () => {
    // save the answer in the state
    const userAnswer = inputRef.current.value;

    // check if the answer given by the user is the same as the question in the state
    if (userAnswer == question.qCorrectAnswer) {
      setShowCorrectModal(true);
      setScore(score + 10);
    } else {
      setShowWrongModal(true);
    }

    // clean the input
    inputRef.current.value = "";

    if (number === questions.length) {
      // prepare results
      // calculateResults();
      // show results modal
      // setShow(true);
    } else {
      // go to next question
      setNumber(number + 1);
      // focus the input
      inputRef.current.focus();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      // increment();
      console.log("enter key pressed!");
    }
  };

  return question ? (
    <>
      <Row className="mt-4 bg-light mx-lg-1">
        <Col lg={{ span: 7, offset: 2 }} className="p-4">
          {/* INSTRUCTION */}
          <h4>{question.qInstruction}</h4>
          {/* TECHNICAL INSTRUCTION */}
          <h4>{question.qTechnicalInstruction}</h4>
          {/* INPUT FORM */}
          <Form className="w-50 mt-4">
            <div className="d-flex flex-row mt-3">
              <Form.Control
                type="text"
                maxLength="10"
                ref={inputRef}
                onKeyDown={handleKeyDown}
              />
              {/* question complement (if any) */}
              {questions.qCorrectAnswerComplement ? (
                <h4 className="ml-2 mb-0">
                  {questions.qCorrectAnswerComplement}
                </h4>
              ) : null}
            </div>
          </Form>
          {/* QUESTION COMMENT */}
          {questions.qComment ? (
            <span className="text-muted mt-2 mb-2">{questions.qComment}</span>
          ) : null}
          {/* NEXT BUTTON */}
          <Button variant="success" className="mt-4" onClick={increment}>
            Siguiente
          </Button>
        </Col>
      </Row>
      {/* modals */}
      <CorrectModal
        showCorrectModal={showCorrectModal}
        setShowCorrectModal={setShowCorrectModal}
      />
      <WrongModal
        showWrongModal={showWrongModal}
        setShowWrongModal={setShowWrongModal}
      />
    </>
  ) : null;
});

QuestionsContainer.propTypes = {
  questions: PropTypes.array.isRequired,
};

export default QuestionsContainer;
