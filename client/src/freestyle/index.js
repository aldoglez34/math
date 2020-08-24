import React, { useState, useEffect } from "react";
import { Container, Spinner } from "react-bootstrap";
import { StudentLayout } from "../components/Layout";
import { useSelector, useDispatch } from "react-redux";
import { setBreadcrumb } from "../redux/actions/breadcrumb";
import API from "../utils/API";
import FreestyleQuestions from "./freestylequestions/FreestyleQuestions";

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

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StudentLayout>
      {freestyle ? (
        <>
          {/* title */}
          <Container>
            <h1 className="examNameStyle">Modo Rápido</h1>
          </Container>
          {/* questions */}
          <FreestyleQuestions questions={freestyle} />
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

export default Freestyle;
