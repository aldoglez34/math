import React, { useState, useEffect } from "react";
import { StudentLayout } from "../components/Layout";
import { Spinner } from "react-bootstrap";
import API from "../utils/API";
import QuestionsForm from "./components/QuestionsForm";
import QuestionsContainer from "./components/QuestionsContainer";

const Exam = React.memo((props) => {
  const { code, subject, exam } = props.routeProps.match.params;
  const breadcrumb = [
    { text: "Mis cursos", link: "/dashboard" },
    { text: code, link: "/course/" + code },
    { text: subject, link: "/course/" + code + "#" + subject },
    { text: exam },
  ];

  const [questions, setQuestions] = useState();

  useEffect(() => {
    API.fetchExam(code, exam)
      .then((res) => setQuestions(res.data))
      .catch((err) => {
        console.log(err);
        alert("Ocurrió un error en el servidor");
      });
  }, [code, exam]);

  return (
    <StudentLayout breadcrumb={breadcrumb}>
      {questions ? (
        <>
          {/* <QuestionsForm examName={exam} questions={questions} /> */}
          <QuestionsContainer examName={exam} questions={questions} />
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
