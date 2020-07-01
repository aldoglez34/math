import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Button, Form, Row, Col } from "react-bootstrap";
import CorrectModal from "./components/CorrectModal";
import WrongModal from "./components/WrongModal";
import ResultsModal from "./components/ResultsModal";
import API from "../utils/API";
import { useSelector } from "react-redux";

const QuestionsContainer = React.memo(({ examId, courseId, questions }) => {
  const inputRef = useRef();

  const student = useSelector((state) => state.student);

  // number of the question AND the question shown in screen
  const [number, setNumber] = useState(1);
  const [question, setQuestion] = useState();

  // score
  const [score, setScore] = useState(0);

  // modals
  const [showCorrectModal, setShowCorrectModal] = useState(false);
  const [showWrongModal, setShowWrongModal] = useState(false);
  const [showResultsModal, setShowResultsModal] = useState(false);

  useEffect(() => {
    setQuestion(questions.filter((q) => q.qNumber === number)[0]);
  }, [number, questions]);

  const increment = () => {
    // save the answer in the state
    const userAnswer = inputRef.current.value;

    // check if the answer given by the user is the same as the question in the state
    if (userAnswer === question.qCorrectAnswer) {
      setShowCorrectModal(true);
      setScore(score + 10);
    } else {
      setShowWrongModal(true);
    }

    // clean the input
    inputRef.current.value = "";

    if (number === questions.length) {
      // register attempt
      API.registerAttempt({ studentId: student._id, examId, score })
        .then((res) => console.log(res.data))
        .catch((err) => {
          console.log("Error", err);
          // alert("Ocurrió un error al registrar el examen");
        });
      // show results modal
      setShowResultsModal(true);
    } else {
      // go to next question
      setNumber(number + 1);
      // focus the input
      inputRef.current.focus();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      increment();
      console.log("enter key pressed!");
    }
  };

  return question ? (
    <>
      <Row className="mx-lg-1 bg-light mt-4">
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
        <Col className="py-4 d-flex align-items-center justify-content-center bg-white">
          <Row>
            <Col className="text-center">
              <h1 className="display-3 mb-0">{number}</h1>
              <h5 className="text-muted mb-0" style={{ fontWeight: 800 }}>
                PREGUNTA
              </h5>
            </Col>
            <Col className="text-center ml-3">
              <h1 className="display-3 mb-0">{score}</h1>
              <h5 className="text-muted mb-0" style={{ fontWeight: 800 }}>
                PUNTOS
              </h5>
            </Col>
          </Row>
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
      <ResultsModal
        showResultsModal={showResultsModal}
        courseId={courseId}
        score={score}
      />
    </>
  ) : null;
});

QuestionsContainer.propTypes = {
  examId: PropTypes.string.isRequired,
  courseId: PropTypes.string.isRequired,
  questions: PropTypes.array.isRequired,
};

export default QuestionsContainer;
