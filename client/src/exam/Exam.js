import React, { useState, useEffect } from "react";
import { StudentLayout } from "../components/Layout";
import { Spinner } from "react-bootstrap";
import API from "../utils/API";
import QuestionsContainer from "./components/QuestionsContainer";

const Exam = React.memo((props) => {
  // const { code, subject, exam } = props.routeProps.match.params;
  // const breadcrumb = [
  //   { text: "Mis cursos", link: "/dashboard" },
  //   { text: code, link: "/course/" + code },
  //   { text: subject, link: "/course/" + code + "#" + subject },
  //   { text: exam },
  // ];

  const [exam, setExam] = useState();

  useEffect(() => {
    API.fetchExamInfo(props.routeProps.match.params.examId)
      .then((res) => setExam(res.data))
      .catch((err) => {
        console.log(err);
        alert("Ocurrió un error en el servidor");
      });
  }, [props.routeProps.match.params.examId]);

  return (
    <StudentLayout>
      {exam ? (
        <QuestionsContainer examName={exam.name} questions={exam.questions} />
      ) : (
        <div className="text-center mt-4 pt-4">
          <Spinner animation="border" variant="primary" />
        </div>
      )}
    </StudentLayout>
  );
});

export default Exam;
