import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Button, Spinner, Container } from "react-bootstrap";
import PropTypes from "prop-types";
import * as examActions from "../../redux/actions/exam";
import Timer from "./components/Timer";
import QInstruction from "./components/QInstruction";
import QTechnicalInstruction from "./components/QTechnicalInstruction";
import QMultipleChoice from "./components/QMultipleChoice";
import Progress from "./components/Progress";
import ExitButton from "../../components/exitbutton/ExitButton";
import HelpModalSM from "./components/HelpModalSM";

const QuestionsContainer = React.memo(({ questions }) => {
  const dispatch = useDispatch();

  const exam = useSelector((state) => state.exam);

  const [number, setNumber] = useState(1);
  const [question, setQuestion] = useState();
  const [answers, setAnswers] = useState([]);

  // this is where the value from the multiple choice is stored
  const [choice, setChoice] = useState();
  const getValueFromMultipleChoice = (value) => setChoice(value);

  useEffect(() => {
    // only if number is less than the questions length
    if (number <= questions.length)
      setQuestion(questions.filter((q) => q.qNumber === number)[0]);

    // check if last
    if (number > questions.length) {
      // save results in redux (so they can be read in the results page)
      dispatch(examActions.setResults(answers));
      // go to results page
      window.location.href = "/course/exam/results";
    }
  }, [dispatch, number, answers, questions, choice]);

  const pushQuestion = () => {
    // get correct answers
    const correctAnswers = question.qCorrectAnswers.reduce((acc, cv) => {
      acc.push(cv.answer);
      return acc;
    }, []);

    // the behavior will be different depending wether its a multiple choice or regular inputs
    const isMultipleChoice = question.qMultipleChoice ? true : false;

    // get answer
    let obj;
    if (isMultipleChoice) {
      // the option choosen by the student is stored in the "choice" state
      // crate object
      obj = {
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
      };
    } else {
      // get the value from the answer inputs and push them
      const numberOfAnswers = question.qCorrectAnswers.length;
      const userAnswers = [];
      for (var i = 0; i < numberOfAnswers; i++) {
        let a = document.getElementById("answer" + i).value;
        userAnswers.push(a.trim());
      }
      // crate object
      obj = {
        _id: question._id,
        qNumber: question.qNumber,
        qInstruction: question.qInstruction,
        qTechnicalInstruction: question.qTechnicalInstruction,
        qMultipleChoice: question.qMultipleChoice,
        userAnswers: { type: "text", answer: userAnswers.toString() },
        qCorrectAnswers: { type: "text", answer: correctAnswers.toString() },
      };
    }

    // push to state
    setAnswers([...answers, obj]);

    // clear choice and advance to next question
    setChoice();
    setNumber(number + 1);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") pushQuestion();
  };

  return question ? (
    number > questions.length ? (
      <div className="text-center mt-4 pt-4">
        <Spinner animation="border" variant="success" />
      </div>
    ) : (
      <>
        {/* question */}
        <Container className="mt-3">
          <div style={{ backgroundColor: "#e9ecef" }}>
            <Progress current={number} total={questions.length} />
            <Container>
              <Row>
                <Col
                  lg={{ span: 7, offset: 2 }}
                  className="px-3"
                  style={{ paddingTop: "15px", paddingBottom: "45px" }}
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
                      choiceSelected={choice}
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
                    <small className="text-muted mb-3">
                      {question.qComment}
                    </small>
                  ) : null}

                  {/* BUTTON */}
                  <div className="mt-3">
                    <Button
                      variant={
                        number === questions.length ? "primary" : "success"
                      }
                      className="shadow-sm"
                      onClick={pushQuestion}
                    >
                      {number === questions.length ? "Finalizar" : "Siguiente"}
                    </Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
        {/* buttons, timer and stuff */}
        <Container>
          <div className="d-flex mt-3">
            <Timer />
            <HelpModalSM question={question} />
            <ExitButton url={"/course/#" + exam.topicName} />
          </div>
        </Container>
      </>
    )
  ) : null;
});

QuestionsContainer.propTypes = {
  questions: PropTypes.array.isRequired,
};

export default QuestionsContainer;
