import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StudentLayout } from "../components/Layout";
import { Container, Spinner } from "react-bootstrap";
import API from "../utils/API";
import * as breadcrumbActions from "../redux/actions/breadcrumb";
import QuestionsContainer from "./questionscontainer/QuestionsContainer";
import "./examstyle.scss";

const Exam = React.memo(() => {
  const dispatch = useDispatch();

  const [exam, setExam] = useState();

  const course = useSelector((state) => state.course);
  const reduxExam = useSelector((state) => state.exam);

  useEffect(() => {
    if (course && reduxExam) {
      API.fetchExamInfo(reduxExam._id)
        .then((res) => {
          // set breadcrumb info
          dispatch(
            breadcrumbActions.setBreadcrumb([
              { text: "Mis cursos", link: "/dashboard" },
              {
                text: course.name,
                link: "/course",
              },
              {
                text: reduxExam.topicName,
                link: "/course/#" + reduxExam.topicName,
              },
              { text: reduxExam.name },
            ])
          );
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
  }, [course, reduxExam]);

  return (
    <StudentLayout>
      {exam ? (
        <>
          {/* title */}
          <Container>
            <h1 className="examNameStyle">{exam.name}</h1>
          </Container>
          {/* questions */}
          <QuestionsContainer questions={exam.questions} />
          <br />
          <br />
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
