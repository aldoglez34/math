import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { Row, Col, Button, Spinner } from "react-bootstrap";
import PropTypes from "prop-types";
import * as examActions from "../redux/actions/exam";

const QuestionsContainer = React.memo(({ questions }) => {
  const dispatch = useDispatch();

  const inputRef = useRef();

  const [number, setNumber] = useState(1);
  const [question, setQuestion] = useState();
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    // only if number is less than the questions length
    if (number <= questions.length)
      setQuestion(questions.filter((q) => q.qNumber === number)[0]);

    // check if last
    if (number > questions.length) {
      // save results in redux
      dispatch(examActions.setResults(answers));
      // go to results page
      window.location.href = "/course/exam/results";
    }
  }, [number, answers]);

  const pushQuestion = () => {
    // get the answer and push it
    const userAnswer = inputRef.current.value;

    setAnswers([
      ...answers,
      {
        _id: question._id,
        qNumber: question.qNumber,
        qInstruction: question.qInstruction,
        qTechnicalInstruction: question.qTechnicalInstruction,
        userAnswer: userAnswer,
        qCorrectAnswer: question.qCorrectAnswer,
      },
    ]);

    // clean, set number and focus input
    inputRef.current.value = "";
    setNumber(number + 1);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") pushQuestion();
  };

  return question ? (
    number > questions.length ? (
      <div className="text-center mt-4 pt-4">
        <Spinner animation="border" variant="primary" />
      </div>
    ) : (
      <>
        <Row className="mx-lg-1 bg-light mt-3">
          <Col
            lg={{ span: 7, offset: 2 }}
            className="px-3"
            style={{ paddingTop: "40px", paddingBottom: "45px" }}
          >
            {/* INSTRUCTION */}
            <h4>
              <span className="mr-1">{question.qNumber + "."}</span>
              <span>{question.qInstruction}</span>
            </h4>
            {/* TECHNICAL INSTRUCTION */}
            <h4>{question.qTechnicalInstruction}</h4>
            {/* INPUT FORM */}
            <div className="d-flex flex-row mt-3 mb-2">
              <input
                type="text"
                maxLength="10"
                ref={inputRef}
                onKeyDown={handleKeyDown}
                className="border rounded"
              />
              {/* question complement (if any) */}
              {questions.qCorrectAnswerComplement ? (
                <h4 className="ml-2 mb-0">
                  {questions.qCorrectAnswerComplement}
                </h4>
              ) : null}
            </div>
            {/* QUESTION COMMENT */}
            {questions.qComment ? (
              <small className="text-muted">{questions.qComment}</small>
            ) : null}
            {/* BUTTONS */}
            {number === questions.length ? (
              <div className="mt-3">
                <Button
                  variant="primary"
                  className="shadow-sm"
                  onClick={pushQuestion}
                >
                  Finalizar
                </Button>
              </div>
            ) : (
              <div className="mt-3">
                <Button
                  variant="success"
                  className="shadow-sm"
                  onClick={pushQuestion}
                >
                  Siguiente
                </Button>
              </div>
            )}
          </Col>
        </Row>
      </>
    )
  ) : null;
});

QuestionsContainer.propTypes = {
  questions: PropTypes.array.isRequired,
};

export default QuestionsContainer;
