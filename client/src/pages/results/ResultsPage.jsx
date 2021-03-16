import React, { useEffect } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { StudentLayout } from "../../components/Layout";
import API from "../../utils/API";
import { clearUnlockedExam, unlockExam } from "../../redux/actions/unlocked";
import {
  GoBackBttn,
  Grade,
  MyResults,
  ResultMsg,
  UnlockedExam,
} from "./components";

export const ResultsPage = () => {
  const dispatch = useDispatch();

  const exam = useSelector((state) => state.exam);
  const course = useSelector((state) => state.course);
  const student = useSelector((state) => state.student);

  // const corrects = exam.results.reduce((acc, cv) => {
  //   if (cv.qCorrectAnswers.answer === cv.userAnswers.answer) acc++;
  //   return acc;
  // }, 0);

  // const incorrects = exam.results.reduce((acc, cv) => {
  //   if (cv.qCorrectAnswers.answer !== cv.userAnswers.answer) acc++;
  //   return acc;
  // }, 0);

  // const grade = Math.round((corrects / exam.results.length) * 100) / 10;

  // useEffect(() => {
  //   API.registerAttempt({
  //     courseId: course._id,
  //     examDifficulty: exam.difficulty,
  //     examId: exam._id,
  //     examLink: exam.reward.link,
  //     examName: exam.reward.name,
  //     grade,
  //     studentId: student._id,
  //     topicId: exam.topicId,
  //   })
  //     .then((res) => {
  //       // get response
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       alert(
  //         "Ocurrió un error en el servidor, no se pudo registrar su calificación."
  //       );
  //       console.log("error", err);
  //       window.location.href = "/";
  //     });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return exam.results ? (
    <StudentLayout>
      <Container style={{ paddingBottom: "45px" }}>
        <Row>
          <Col md={{ offset: 3, span: 6 }}>
            <GoBackBttn topicName={exam.topicName} className="mt-4" />
            <Grade
              grade={exam.results.grade}
              corrects={exam.results.corrects}
              incorrects={exam.results.incorrects}
            />
            <hr />
            <ResultMsg grade={exam.results.grade} />
            <hr />
            {exam.results.unlockedExam ? (
              <>
                <UnlockedExam unlockedExam={exam.results.unlockedExam} />
                <hr />
              </>
            ) : null}
            <MyResults results={exam.results.answers} />
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
