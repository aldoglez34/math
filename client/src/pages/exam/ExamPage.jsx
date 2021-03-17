import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StudentLayout } from "../../components/Layout";
import { Container, Spinner } from "react-bootstrap";
import API from "../../utils/API";
import * as zenModeActions from "../../redux/actions/zenMode";
import { QuestionsContainer } from "./components";
import "./exampage.scss";

export const ExamPage = () => {
  const dispatch = useDispatch();

  const [exam, setExam] = useState();

  const examId = useSelector((state) => state.exam._id);
  const examQuestionCounter = useSelector((state) => state.exam.qCounter);

  useEffect(() => {
    API.fetchExamInfo(examId)
      .then((res) => {
        const realQuestionsCounter = res.data.questions.length;
        if (realQuestionsCounter < examQuestionCounter) {
          alert(
            "Ocurrió un error con este examen. Ponte en contacto con tu maestro."
          );
          window.location.href = "/course";
        } else {
          dispatch(zenModeActions.zenModeOn());
          setExam(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
        alert(
          "Ocurrió un error con este examen. Ponte en contacto con tu maestro."
        );
        window.location.href = "/course";
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StudentLayout>
      {exam ? (
        <>
          <Container>
            <h1 className="examNameStyle mt-4">{exam.name}</h1>
            <span title="Tiempo restante" style={{ color: "#0f5257" }}>
              <i className="fas fa-stopwatch mr-1" />
              <strong>10 minutos</strong>
            </span>
          </Container>
          <QuestionsContainer questions={exam.questions} />
          <br />
          <br />
        </>
      ) : (
        <div className="text-center mt-4 pt-4">
          <Spinner animation="border" variant="success" />
        </div>
      )}
    </StudentLayout>
  );
};
