import React, { useEffect } from "react";
import { Spinner, Row, Col, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { StudentLayout } from "../../components/Layout";
import API from "../../utils/API";
import { clearUnlockedExam, unlockExam } from "../../redux/actions/unlocked";
import { GoBackBttn, Grade, MyResults, ResultMsg } from "./components";

export const ResultsPage = () => {
  const dispatch = useDispatch();

  const exam = useSelector((state) => state.exam);
  const course = useSelector((state) => state.course);
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

  const isExamApproved = calif / 10 >= 8;

  useEffect(() => {
    // register attempt regardless of grade
    // also register perfect score only if grade is 10 (this is done in the backend)
    API.registerAttempt({
      studentId: student._id,
      examId: exam._id,
      grade: calif / 10,
    })
      .then((res) => console.log(res.data))
      .catch((err) => console.log("error", err));

    // unblock an exam if difficulty is NOT "Advanced" and the grade is greater than 8
    if (exam.difficulty !== "Advanced" && isExamApproved) {
      API.unlockExam({
        courseId: course._id,
        difficulty: exam.difficulty,
        studentId: student._id,
        topicId: exam.topicId,
      })
        .then((res) => {
          console.log(res);
          // res should contain the data from the backend
          // if its empty it means nothing was unblocked
          if (res.data) dispatch(unlockExam(res.data));
        })
        .catch((err) => console.log("error", err));
    }

    // register reward (medal or trophy) only if its a final exam and the grade is greater than 8
    // also unlock freestyle if the difficulty is final and the grade is greater than 8
    if (exam.difficulty === "Advanced" && isExamApproved) {
      API.registerReward({
        link: exam.reward.link,
        name: exam.reward.name,
        studentId: student._id,
        topicId: exam.topicId,
      })
        .then((res) => {
          const { isFreestyleUnlockable } = res.data;
          // unlock only if it hasn't been unlocked previously
          if (isFreestyleUnlockable) {
            dispatch(
              unlockExam({
                name: "Examen Modo Rápido",
                difficulty: "Freestyle",
                topicName: exam.topicName,
                rewardLink: exam.reward.link,
                rewardName: exam.reward.name,
              })
            );
          } else {
            dispatch(clearUnlockedExam());
          }
        })
        .catch((err) => console.log("error", err));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return exam.results ? (
    <StudentLayout>
      <Container style={{ paddingBottom: "45px" }}>
        <Row>
          <Col md={{ offset: 3, span: 6 }}>
            <GoBackBttn topicName={exam.topicName} className="mt-4" />
            <Grade grade={calif} aciertos={aciertos} errores={errores} />
            <hr />
            <ResultMsg calif={calif} />
            <hr />
            <MyResults results={exam.results} />
            <GoBackBttn topicName={exam.topicName} className="mt-2" />
          </Col>
        </Row>
      </Container>
    </StudentLayout>
  ) : (
    <div className="text-center mt-4 pt-4">
      <Spinner animation="border" variant="success" />
    </div>
  );
};
