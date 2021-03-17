import React, { useState, useEffect } from "react";
import { Container, Spinner } from "react-bootstrap";
import { StudentLayout } from "../../components/Layout";
import { useSelector, useDispatch } from "react-redux";
import * as zenModeActions from "../../redux/actions/zenMode";
import API from "../../utils/API";
import { FreestyleQuestions } from "./components";
import { QuestionsContainer } from "../exam/components";

export const FreestylePage = React.memo(() => {
  const dispatch = useDispatch();

  const courseId = useSelector((state) => state.course._id);
  const topicId = useSelector((state) => state.exam.topicId);

  const [freestyle, setFreestyle] = useState();

  useEffect(() => {
    API.fetchFreestyle(courseId, topicId)
      .then((res) => {
        // zendmode on
        dispatch(zenModeActions.zenModeOn());
        // set exam
        setFreestyle(res.data);
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
      {freestyle ? (
        <>
          <Container>
            <h1 className="examNameStyle mt-4">Modo rápido</h1>
          </Container>
          <QuestionsContainer questions={freestyle} isFreestyle={true} />
          {/* <FreestyleQuestions questions={freestyle} /> */}
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
