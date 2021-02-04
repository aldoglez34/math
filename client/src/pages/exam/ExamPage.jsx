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

  const course = useSelector((state) => state.course);
  const reduxExam = useSelector((state) => state.exam);

  useEffect(() => {
    if (course && reduxExam) {
      API.fetchExamInfo(reduxExam._id)
        .then((res) => {
          // zendmode on
          dispatch(zenModeActions.zenModeOn());
          // set exam info in the state to init the exam
          setExam(res.data);
        })
        .catch((err) => {
          console.log(err);
          alert("Ocurrió un error al cargar las preguntas de tu examen");
        });
    } else {
      window.location.href = "/course";
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StudentLayout>
      {exam ? (
        <>
          {/* title */}
          <Container>
            <h1 className="examNameStyle mt-4">{exam.name}</h1>
          </Container>
          {/* questions */}
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
