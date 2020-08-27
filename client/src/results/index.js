import React, { useEffect } from "react";
import { Spinner, Row, Col, Button, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { StudentLayout } from "../components/Layout";
import API from "../utils/API";
import ResultMsg from "./components/ResultMsg";
import { unlockExam } from "../redux/actions/unlocked";
import Grade from "./components/Grade";
import MyResults from "./components/MyResults";

const Results = React.memo(() => {
  const dispatch = useDispatch();

  const exam = useSelector((state) => state.exam);
  const student = useSelector((state) => state.student);

  const aciertos = exam.results.reduce((acc, cv) => {
    if (cv.qCorrectAnswers.answer === cv.userAnswers.answer) acc++;
    return acc;
  }, 0);

  const errores = exam.results.reduce((acc, cv) => {
    if (cv.qCorrectAnswers.answer !== cv.userAnswers.answer) acc++;
    return acc;
  }, 0);

  const calif = Math.round((aciertos / exam.results.length) * 100);

  useEffect(() => {
    // register attempt regardless of grade
    API.registerAttempt({
      studentId: student._id,
      examId: exam._id,
      grade: calif / 10,
    })
      .then((res) => console.log(res.data))
      .catch((err) => console.log("error", err));

    // register perfect score only if grade is 10
    if (calif / 10 === 10) {
      API.registerPerfectGrade({ studentId: student._id, examId: exam._id })
        .then((res) => console.log(res.data))
        .catch((err) => console.log("error", err));
    }

    // register reward (medal or trophy) only if its a final exam and the grade is greater than 8
    if (exam.difficulty === "Advanced" && calif / 10 >= 8) {
      API.registerReward({
        studentId: student._id,
        topicName: exam.topicName,
        name: exam.reward.name,
        link: exam.reward.link,
      })
        .then((res) => console.log(res.data))
        .catch((err) => console.log("error", err));
    }

    // unblock an exam if difficulty is NOT "Final" and the grade is greater than 8
    if (exam.difficulty !== "Advanced" && calif / 10 >= 8) {
      API.unlockExam({
        studentId: student._id,
        topicCode: exam.topicCode,
        difficulty: exam.difficulty,
      })
        .then((res) => {
          // res should contain the data from the backend
          // if its empty it means nothing was unblocked
          if (res.data) dispatch(unlockExam(res.data));
        })
        .catch((err) => console.log("error", err));
    }

    // unlock freestyle if the difficulty is final and the grade is greater than 8
    // this is only for the modal in the course main page
    if (exam.difficulty === "Advanced" && calif / 10 >= 8) {
      dispatch(
        unlockExam({
          name: "Examen Modo Rápido",
          difficulty: "Freestyle",
          topicName: exam.topicName,
          rewardLink: exam.reward.link,
          rewardName: exam.reward.name,
        })
      );
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return exam.results ? (
    <StudentLayout>
      <Container style={{ paddingBottom: "45px" }}>
        <Row>
          <Col md={{ offset: 3, span: 6 }}>
            {/* grade */}
            <Grade grade={calif} aciertos={aciertos} errores={errores} />
            {/* msg to the user */}
            <hr />
            <ResultMsg calif={calif} />
            {/* questions */}
            <hr />
            <MyResults results={exam.results} />
            {/* button */}
            <br />
            <div className="text-center">
              <Button
                variant="success"
                href={"/course/#" + exam.topicName}
                className="shadow"
              >
                <i className="fas fa-arrow-left mr-2" />
                Regresar
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </StudentLayout>
  ) : (
    <div className="text-center mt-4 pt-4">
      <Spinner animation="border" variant="success" />
    </div>
  );
});

export default Results;
