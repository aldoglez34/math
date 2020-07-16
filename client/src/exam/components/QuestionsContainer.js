import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Row, Col, Button, Spinner } from "react-bootstrap";
import PropTypes from "prop-types";
import * as examActions from "../../redux/actions/exam";
import Timer from "./Timer";
import QNumber from "./QNumber";
import QInstruction from "../question/QInstruction";
import QTechnicalInstruction from "../question/QTechnicalInstruction";
import QMultipleChoice from "../question/QMultipleChoice";

const QuestionsContainer = React.memo(({ questions }) => {
  const dispatch = useDispatch();

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
  }, [dispatch, number, answers, questions]);

  const pushQuestion = () => {
    // get the answer and push it
    const numberOfAnswers = question.qCorrectAnswers.length;
    const userAnswers = [];

    for (var i = 0; i < numberOfAnswers; i++) {
      let a = document.getElementById("answer" + i).value;
      userAnswers.push(a.trim());
    }

    console.log("userAnswers", userAnswers.toString());

    const correctAnswers = question.qCorrectAnswers.reduce((acc, cv) => {
      acc.push(cv.answer);
      return acc;
    }, []);

    console.log("correctAnswers", correctAnswers.toString());

    setAnswers([
      ...answers,
      {
        _id: question._id,
        qNumber: question.qNumber,
        qInstruction: question.qInstruction,
        qTechnicalInstruction: question.qTechnicalInstruction,
        qMultipleChoice: question.qMultipleChoice,
        userAnswers: userAnswers.toString(),
        qCorrectAnswer: correctAnswers.toString(),
      },
    ]);

    console.log({
      _id: question._id,
      qNumber: question.qNumber,
      qInstruction: question.qInstruction,
      qTechnicalInstruction: question.qTechnicalInstruction,
      qMultipleChoice: question.qMultipleChoice,
      userAnswers: userAnswers.toString(),
      qCorrectAnswer: correctAnswers.toString(),
    });

    // // clean, set number and focus input
    // inputRef.current.value = "";
    // setNumber(number + 1);
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
          <Timer />
          <QNumber current={number} total={questions.length} />
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

QuestionsContainer.propTypes = {
  questions: PropTypes.array.isRequired,
};

export default QuestionsContainer;
