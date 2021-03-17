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
import {
  CorrectModal,
  FreestyleQPoints,
  IncorrectModal,
} from "../../freestyle/components";

export const QuestionsContainer = React.memo(
  ({ questions, isFreestyle = false }) => {
    const dispatch = useDispatch();

    // data from redux
    const course = useSelector((state) => state.course);
    const exam = useSelector((state) => state.exam);
    const student = useSelector((state) => state.student);

    // questions data
    const [number, setNumber] = useState(1);
    const [question, setQuestion] = useState();
    const [answers, setAnswers] = useState([]);
    const [score, setScore] = useState(0);

    // timer
    const [secondsLeft, setSecondsLeft] = useState(exam.duration * 60 + 59);
    const [minutesLeft, setMinutesLeft] = useState(exam.duration);

    // modals for freestyle
    const [showCorrect, setShowCorrect] = useState(false);
    const [showIncorrect, setShowIncorrect] = useState(false);

    // this is where the value from the multiple choice is stored
    const [choice, setChoice] = useState();
    const getValueFromMultipleChoice = (value) => setChoice(value);

    const hasExamEnded = number > questions.length;
    const isLastQuestion = number === questions.length;

    // handles timer
    useEffect(() => {
      // decrease minutes
      if ((secondsLeft % 60) / 100 === 0)
        setMinutesLeft((prevState) => prevState - 1);

      // checks if no minutes left
      if (secondsLeft === 0) {
        alert("El tiempo ha finalizado, vuelve a intentarlo.");
        window.location.href = "/course";
      }

      setTimeout(() => {
        setSecondsLeft((prevState) => prevState - 1);
      }, 1000);

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [secondsLeft]);

    // checks wether exam has ended or not
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

    // redirects user when result changes are updated (only for regular exams)
    useEffect(() => {
      if (exam.results) window.location.href = "/course/exam/results";
    }, [exam.results]);

    const pushQuestion = () => {
      // get correct answers
      const correctAnswers = question.qCorrectAnswers.map((a) => a.answer);

      // get answer fields
      const _id = question._id;
      const qNumber = question.qNumber;
      const qInstruction = question.qInstruction;
      const qTechnicalInstruction = question.qTechnicalInstruction;
      const qMultipleChoice = question.qMultipleChoice;

      const isMultipleChoice = question.qMultipleChoice ? true : false;

      let userAnswers;
      let qCorrectAnswers;

      if (isMultipleChoice) {
        userAnswers =
          question.qMultipleChoice.type === "text"
            ? { type: "text", answer: choice }
            : { type: "image", answer: choice };

        qCorrectAnswers =
          question.qMultipleChoice.type === "text"
            ? { type: "text", answer: String(correctAnswers) }
            : { type: "image", answer: String(correctAnswers) };
      }

      if (!isMultipleChoice) {
        console.log("correctAnswers", question.qCorrectAnswers);
        const _userAnswers = [];
        for (var i = 0; i < question.qCorrectAnswers.length; i++) {
          let a = document.getElementById("answer" + i).value;
          _userAnswers.push(a.trim());
        }

        userAnswers = { type: "text", answer: String(userAnswers) };
        qCorrectAnswers = { type: "text", answer: String(correctAnswers) };
      }

      const answer = {
        _id,
        qNumber,
        qInstruction,
        qTechnicalInstruction,
        qMultipleChoice,
        userAnswers,
        qCorrectAnswers,
      };

      console.log("answer", answer);

      // validate answer (only for freestyle)
      if (isFreestyle) {
        const isAnswerCorrect =
          answer.userAnswers.answer === answer.qCorrectAnswers.answer;

        if (isAnswerCorrect) {
          setShowCorrect(true);
          setScore((prevState) => prevState + question.qValue);
        }

        if (!isAnswerCorrect) {
          setShowIncorrect(true);
          if (score - question.qValue <= 0) setScore(0);
          if (score - question.qValue > 0) setScore(score - question.qValue);
        }
      }

      // push to state
      setAnswers([...answers, answer]);

      // clear choice and advance to next question
      setChoice();
      setNumber(number + 1);
    };

    const handleKeyDown = (e) => {
      if (e.key === "Enter") pushQuestion();
    };

    return (
      question &&
      (!hasExamEnded ? (
        <>
          {/* top container */}
          <Container>
            <Timer minutesLeft={minutesLeft} secondsLeft={secondsLeft} />
            <FreestyleQPoints score={score} />
          </Container>
          {/* main container */}
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
          {/* bottom container */}
          <Container className="d-flex mt-3">
            <div className="ml-auto">
              <HelpModalSM question={question} />
              <ExitButton url={"/course/#" + exam.topicName} />
            </div>
          </Container>
          {/* modals (for freestyle) */}
          {isFreestyle && (
            <>
              <CorrectModal
                showCorrect={showCorrect}
                setShowCorrect={setShowCorrect}
                qValue={question.qValue}
              />
              <IncorrectModal
                showIncorrect={showIncorrect}
                setShowIncorrect={setShowIncorrect}
                qValue={question.qValue}
              />
            </>
          )}
        </>
      ) : (
        <div className="text-center mt-4 pt-4">
          <Spinner animation="border" variant="success" />
        </div>
      ))
    );
  }
);

QuestionsContainer.propTypes = {
  questions: array.isRequired,
  isFreestyle: bool,
};
