import React, { useState, useEffect } from "react";
import { StudentLayout } from "../components/Layout";
import { Spinner, Container, Row, Col } from "react-bootstrap";
import API from "../utils/API";
import Question from "./components/Question";

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
          <h1>{exam}</h1>
          <Container>
            {questions.map((q) => (
              <Question key={q._id} question={q} />
            ))}
          </Container>
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
