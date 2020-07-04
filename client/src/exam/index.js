import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StudentLayout } from "../components/Layout";
import { Spinner, Button } from "react-bootstrap";
import API from "../utils/API";
import * as breadcrumbActions from "../redux/actions/breadcrumb";
import QuestionsContainer from "./QuestionsContainer";

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
  }, [course, reduxExam]);

  return (
    <StudentLayout>
      {exam ? (
        <>
          {/* title and exit button (only on large screens) */}
          <div className="d-flex">
            <h1 className="mb-0">{exam.name}</h1>
            <div className="ml-auto align-items-end d-none d-lg-flex">
              <Button
                href="/course"
                variant="outline-danger"
                className="mr-1"
                title="Salir"
              >
                <i className="fas fa-door-open"></i>
              </Button>
            </div>
          </div>
          {/* questions */}
          <QuestionsContainer questions={exam.questions} />
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
