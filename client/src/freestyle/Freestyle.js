import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { StudentLayout } from "../components/Layout";
import { useSelector, useDispatch } from "react-redux";
import { setBreadcrumb } from "../redux/actions/breadcrumb";
import API from "../utils/API";
import FreestyleQuestions from "./components/FreestyleQuestions";

const Freestyle = React.memo(() => {
  const dispatch = useDispatch();

  const course = useSelector((state) => state.course);
  const reduxExam = useSelector((state) => state.exam);

  const [freestyle, setFreestyle] = useState();

  useEffect(() => {
    if (course && reduxExam) {
      API.fetchFreestyle(reduxExam.topicName)
        .then((res) => {
          // set exam
          setFreestyle(res.data);
          // set breadcrumb
          dispatch(
            setBreadcrumb([
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
        })
        .catch((err) => {
          console.log(err);
          alert("Ocurrió un error al cargar las preguntas de tu examen");
        });
    } else {
      window.location.href = "/course";
    }
  }, []);

  return (
    <StudentLayout>
      {freestyle ? (
        <>
          {/* title */}
          <h1 className="display-4 mb-3">Modo Rápido</h1>
          {/* questions */}
          <FreestyleQuestions questions={freestyle} />
        </>
      ) : (
        <div className="text-center mt-4 pt-4">
          <Spinner animation="border" variant="primary" />
        </div>
      )}
    </StudentLayout>
  );
});

export default Freestyle;
