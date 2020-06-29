import React, { useState, useEffect } from "react";
import { StudentLayout } from "../components/Layout";
import { Spinner, Button } from "react-bootstrap";
import API from "../utils/API";
import QuestionsContainer from "./QuestionsContainer";

const Exam = React.memo((props) => {
  const [exam, setExam] = useState();

  const examId = props.routeProps.match.params.examId;

  const courseId = props.routeProps.match.params.courseId;

  useEffect(() => {
    API.fetchExamInfo(examId)
      .then((res) => setExam(res.data))
      .catch((err) => {
        console.log(err);
        alert("Ocurrió un error en el servidor");
      });
  }, [props.routeProps.match.params.examId]);

  return (
    <StudentLayout>
      {exam ? (
        <>
          {/* exit button */}
          <Button
            variant="link"
            className="p-0 mt-3"
            href={"/course/" + courseId}
            id="examExitButton"
          >
            <i className="fas fa-chevron-left mr-1" />
            Salir
          </Button>
          {/* title */}
          <h4 className="mb-0 mt-2" style={{ color: "dimgray" }}>
            {exam.subject}
          </h4>
          <h1 style={{ fontWeight: 800 }} className="mb-0">
            {exam.name}
          </h1>
          {/* questions */}
          <QuestionsContainer
            duration={exam.duration}
            questions={exam.questions}
          />
        </>
      ) : (
        <div className="text-center mt-4 pt-4">
          <Spinner animation="border" variant="primary" />
        </div>
      )}
    </StudentLayout>
  );
});

export default Exam;
