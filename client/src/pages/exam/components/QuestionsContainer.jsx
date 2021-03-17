import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Button, Spinner, Container } from "react-bootstrap";
import { array, bool } from "prop-types";
import * as examActions from "../../../redux/actions/exam";
import {
  HelpModalSM,
  Progress,
  QInstruction,
  QMultipleChoice,
  QTechnicalInstruction,
  Timer,
} from "./";
import { ExitButton } from "../../../components";
import API from "../../../utils/API";

export const QuestionsContainer = React.memo(
  ({ questions, isFreestyle = false }) => {
    const dispatch = useDispatch();

    const exam = useSelector((state) => state.exam);
    const course = useSelector((state) => state.course);
    const student = useSelector((state) => state.student);

    const [number, setNumber] = useState(1);
    const [question, setQuestion] = useState();
    const [answers, setAnswers] = useState([]);

    // modals for freestyle
    const [showCorrect, setShowCorrect] = useState(false);
    const [showIncorrect, setShowIncorrect] = useState(false);

    // this is where the value from the multiple choice is stored
    const [choice, setChoice] = useState();
    const getValueFromMultipleChoice = (value) => setChoice(value);

    const hasExamEnded = number > questions.length;
    const isLastQuestion = number === questions.length;

    useEffect(() => {
      // if exam hasnt ended, set new question
      if (!hasExamEnded)
        setQuestion(questions.filter((q) => q.qNumber === number)[0]);

      // get the correct answers, the incorrect answers and the grade (only for regular exams, not freestyle)
      if (hasExamEnded) {
        const corrects = answers.reduce((acc, cv) => {
          if (cv.qCorrectAnswers.answer === cv.userAnswers.answer) acc++;
          return acc;
        }, 0);
        const incorrects = answers.reduce((acc, cv) => {
          if (cv.qCorrectAnswers.answer !== cv.userAnswers.answer) acc++;
          return acc;
        }, 0);
        const grade = Math.round((corrects / answers.length) * 100) / 10;

        if (!isFreestyle) {
          API.registerAttempt({
            courseId: course._id,
            examDifficulty: exam.difficulty,
            examId: exam._id,
            examLink: exam.reward.link,
            examName: exam.name,
            grade,
            studentId: student._id,
            topicId: exam.topicId,
          })
            .then((res) => {
              const { isFreestyleUnlocked, unlockedExam } = res.data;
              // save results in redux (so they can be read in the results page)
              dispatch(
                examActions.setResults({
                  answers,
                  corrects,
                  grade,
                  incorrects,
                  isFreestyleUnlocked,
                  unlockedExam,
                })
              );
            })
            .catch((err) => {
              console.log("error", err);
              alert(
                "Ocurrió un error en el servidor, no se pudo registrar su calificación."
              );
              window.location.href = "/";
            });
        }

        if (isFreestyle) {
          const score = 0;
          API.registerFreestyleAttempt({
            courseId: course._id,
            score: score,
            studentId: student._id,
            topicId: exam.topicId,
            username: student.username,
          })
            .then((res) => {
              console.log(res.data);
              // show modal with final score
              alert(
                "Ya no hay más preguntas para mostrar.\nTu puntuación final fue de: " +
                  score
              );
              // go back
              window.location.href = "/course/#" + exam.topicName;
            })
            .catch((err) => {
              console.log("error", err);
              alert(
                "Ocurrió un error en el servidor, no se pudo registrar su calificación."
              );
              window.location.href = "/";
            });
        }
      }

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, number, answers, questions, choice]);

    // redirect user when result changes are updated (only for regular exams)
    useEffect(() => {
      if (exam.results) window.location.href = "/course/exam/results";
    }, [exam.results]);

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

    return (
      question &&
      (hasExamEnded ? (
        <div className="text-center mt-4 pt-4">
          <Spinner animation="border" variant="success" />
        </div>
      ) : (
        <>
          {/* question */}
          <Container className="mt-3">
            <div style={{ backgroundColor: "#e9ecef" }}>
              {!isFreestyle && (
                <Progress current={number} total={questions.length} />
              )}
              <Container>
                <Row>
                  <Col
                    lg={{ span: 7, offset: 2 }}
                    className="px-3"
                    style={{ paddingTop: "15px", paddingBottom: "45px" }}
                  >
                    {/* question value */}
                    {isFreestyle && (
                      <strong className="text-muted">
                        {question.qValue}
                        <span className="ml-1">
                          {question.qValue > 1 ? "puntos" : "punto"}
                        </span>
                      </strong>
                    )}
                    {/* instruction */}
                    <QInstruction
                      qNumber={question.qNumber}
                      qInstruction={question.qInstruction}
                    />
                    {/* technical instruction */}
                    {question.qTechnicalInstruction && (
                      <QTechnicalInstruction
                        type={question.qTechnicalInstruction.type}
                        text={question.qTechnicalInstruction.text}
                        imageLink={question.qTechnicalInstruction.imageLink}
                      />
                    )}
                    {/* multiple choices */}
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
                          {/* left comment */}
                          {ca.complementLeft && (
                            <h4 className="mr-2 mb-0">
                              <small>{ca.complementLeft}</small>
                            </h4>
                          )}
                          {/* input */}
                          <input
                            type="text"
                            maxLength="20"
                            autoComplete="off"
                            onKeyDown={handleKeyDown}
                            className="border rounded px-2"
                            id={`answer${idx}`}
                          />
                          {/* right comment */}
                          {ca.complementRight && (
                            <h4 className="ml-2 mb-0">
                              <small>{ca.complementRight}</small>
                            </h4>
                          )}
                        </div>
                      ))
                    )}
                    {/* question comments */}
                    <div className="mt-3 mb-2">
                      {question.qComment &&
                        question.qComment.split("\\n").map((c) => {
                          return (
                            <span key={c} className="d-block text-muted">
                              {c}
                            </span>
                          );
                        })}
                    </div>
                    {/* button */}
                    <div className="mt-3">
                      <Button
                        className="shadow-sm genericButton"
                        onClick={pushQuestion}
                      >
                        {isLastQuestion ? "Finalizar" : "Siguiente"}
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </Container>
          {/* buttons, timer and others */}
          <Container className="d-flex mt-3">
            <Timer />
            <div className="ml-auto">
              <HelpModalSM question={question} />
              <ExitButton url={"/course/#" + exam.topicName} />
            </div>
          </Container>
          {/* modals (for freestyle) */}
          {/* <CorrectModal
            showCorrect={showCorrect}
            setShowCorrect={setShowCorrect}
            qValue={question.qValue}
          />
          <IncorrectModal
            showIncorrect={showIncorrect}
            setShowIncorrect={setShowIncorrect}
            qValue={question.qValue}
          /> */}
        </>
      ))
    );
  }
);

QuestionsContainer.propTypes = {
  questions: array.isRequired,
  isFreestyle: bool,
};
