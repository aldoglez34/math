import React, { useState, useEffect } from "react";
import { Container, Spinner } from "react-bootstrap";
import { StudentLayout } from "../components/Layout";
import { useSelector, useDispatch } from "react-redux";
import { clearBreadcrumb } from "../redux/actions/breadcrumb";
import * as zenModeActions from "../redux/actions/zenMode";
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
          // clear breadcrumb
          dispatch(clearBreadcrumb());
          // zendmode on
          dispatch(zenModeActions.zenModeOn());
          // set exam
          setFreestyle(res.data);
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
            <h1 className="examNameStyle mt-4">Modo Rápido</h1>
          </Container>
          {/* questions */}
          <FreestyleQuestions questions={freestyle} />
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
});

export default Freestyle;
