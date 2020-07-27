import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Row, Col, Button, Spinner } from "react-bootstrap";
import PropTypes from "prop-types";
import * as examActions from "../../redux/actions/exam";
import FreestyleTimer from "./FreestyleTimer";
import FreestyleQNumber from "./FreestyleQNumber";
import QInstruction from "../../exam/question/QInstruction";
import QTechnicalInstruction from "../../exam/question/QTechnicalInstruction";
import QMultipleChoice from "../../exam/question/QMultipleChoice";
import FreestyleQPoints from "./FreestyleQPoints";

const FreestyleQuestions = React.memo(({ questions }) => {
  const dispatch = useDispatch();

  const [number, setNumber] = useState(1);
  const [question, setQuestion] = useState();
  const [answers, setAnswers] = useState([]);

  const [score, setScore] = useState(0);

  useEffect(() => {
    // only if number is less than the questions length
    if (number <= questions.length)
      setQuestion(questions.filter((q) => q.qNumber === number)[0]);

    // check if last -- OJO AQUÍ!!
    if (number > questions.length) {
      // save results in redux
      dispatch(examActions.setResults(answers));
      // go to results page
      window.location.href = "/course/exam/freestyle/results";
    }
  }, [dispatch, number, answers, questions]);

  // this is where the value from the multiple choice is stored
  const [choice, setChoice] = useState();
  const getValueFromMultipleChoice = (value) => setChoice(value);

  const pushQuestion = () => {
    // get correct answers
    const correctAnswers = question.qCorrectAnswers.reduce((acc, cv) => {
      acc.push(cv.answer);
      return acc;
    }, []);

    // the behavior will be different depending wether its a multiple choice or regular inputs
    const isMultipleChoice = question.qMultipleChoice ? true : false;

    if (isMultipleChoice) {
      // the option choosen by the student is stored in the "choice" state
      setAnswers([
        ...answers,
        {
          _id: question._id,
          qNumber: question.qNumber,
          qInstruction: question.qInstruction,
          qTechnicalInstruction: question.qTechnicalInstruction,
          qMultipleChoice: question.qMultipleChoice,
          userAnswers:
            question.qMultipleChoice.type === "text"
              ? { type: "text", answer: choice }
              : { type: "image", answer: choice },
          qCorrectAnswers:
            question.qMultipleChoice.type === "text"
              ? { type: "text", answer: correctAnswers.toString() }
              : { type: "image", answer: correctAnswers.toString() },
        },
      ]);
    } else {
      // get the value from the answer inputs and push them
      const numberOfAnswers = question.qCorrectAnswers.length;
      const userAnswers = [];
      for (var i = 0; i < numberOfAnswers; i++) {
        let a = document.getElementById("answer" + i).value;
        userAnswers.push(a.trim());
      }

      setAnswers([
        ...answers,
        {
          _id: question._id,
          qNumber: question.qNumber,
          qInstruction: question.qInstruction,
          qTechnicalInstruction: question.qTechnicalInstruction,
          qMultipleChoice: question.qMultipleChoice,
          userAnswers: { type: "text", answer: userAnswers.toString() },
          qCorrectAnswers: { type: "text", answer: correctAnswers.toString() },
        },
      ]);
    }

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
        {/* buttons, timer and stuff */}
        <div className="d-flex mb-3">
          <FreestyleTimer />
          <FreestyleQNumber current={number} total={questions.length} />
          <FreestyleQPoints score={score} />
          <a href="/course" className="ml-auto text-dark">
            <i className="fas fa-door-open mr-1" />
            Salir
          </a>
        </div>
        <Row className="mx-lg-1 bg-light rounded">
          <Col
            lg={{ span: 7, offset: 2 }}
            className="px-3"
            style={{ paddingTop: "40px", paddingBottom: "45px" }}
          >
            {/* INSTRUCTION */}
            <QInstruction
              qNumber={question.qNumber}
              qInstruction={question.qInstruction}
            />

            {/* TECHNICAL INSTRUCTION */}
            {question.qTechnicalInstruction ? (
              <QTechnicalInstruction
                type={question.qTechnicalInstruction.type}
                text={question.qTechnicalInstruction.text}
                imageLink={question.qTechnicalInstruction.imageLink}
              />
            ) : null}

            {/* MULTIPLE CHOICES OR ANSWER INPUTS */}
            {question.qMultipleChoice ? (
              <QMultipleChoice
                type={question.qMultipleChoice.type}
                textChoices={question.qMultipleChoice.textChoices}
                imageChoices={question.qMultipleChoice.imageChoices}
                getValueFromMultipleChoice={getValueFromMultipleChoice}
              />
            ) : (
              question.qCorrectAnswers.map((ca, idx) => (
                <div key={ca._id} className="d-flex flex-row mt-3 mb-2">
                  {/* LEFT question complement (if any) */}
                  {ca.complement && ca.placement === "left" ? (
                    <h4 className="mr-2 mb-0">
                      <small>{ca.complement}</small>
                    </h4>
                  ) : null}
                  {/* input */}
                  <input
                    type="text"
                    maxLength="20"
                    // ref={inputRef}
                    onKeyDown={handleKeyDown}
                    className="border rounded px-2"
                    id={"answer" + idx}
                  />
                  {/* RIGHT question complement (if any) */}
                  {ca.complement && ca.placement === "right" ? (
                    <h4 className="ml-2 mb-0">
                      <small>{ca.complement}</small>
                    </h4>
                  ) : null}
                </div>
              ))
            )}

            {/* QUESTION COMMENT */}
            {question.qComment ? (
              <small className="text-muted mb-3">{question.qComment}</small>
            ) : null}

            {/* BUTTON */}
            <div className="mt-3">
              <Button
                variant={number === questions.length ? "primary" : "success"}
                className="shadow-sm"
                onClick={pushQuestion}
              >
                {number === questions.length ? "Finalizar" : "Siguiente"}
              </Button>
            </div>
          </Col>
        </Row>
      </>
    )
  ) : null;
});

FreestyleQuestions.propTypes = {
  questions: PropTypes.array.isRequired,
};

export default FreestyleQuestions;
