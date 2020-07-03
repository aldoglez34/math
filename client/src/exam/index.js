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
        alert("Ocurrió un error al cargar las preguntas de tu examen");
      });
  }, [examId]);

  return (
    <StudentLayout>
      {exam ? (
        <>
          {/* title */}
          <div className="d-flex mt-4">
            <h1 className="mb-0 pr-3">{exam.name}</h1>
            <div className="ml-auto d-flex align-items-end">
              <Button
                href={"/course/" + courseId}
                variant="link"
                className="text-danger ml-auto"
                style={{ fontSize: "25px" }}
              >
                <i className="fas fa-times" />
              </Button>
            </div>
          </div>
          <hr />
          {/* questions */}
          <QuestionsContainer
            examId={examId}
            courseId={courseId}
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
