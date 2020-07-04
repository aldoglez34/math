import React, { useState, useEffect } from "react";
import { StudentLayout } from "../components/Layout";
import { Spinner, Button } from "react-bootstrap";
import API from "../utils/API";
import Question from "./Question";
import { useSelector, useDispatch } from "react-redux";
import * as breadcrumbActions from "../redux/actions/breadcrumb";
import * as examActions from "../redux/actions/exam";
import CorrectModal from "./components/CorrectModal";
import WrongModal from "./components/WrongModal";

const Exam = React.memo((props) => {
  const dispatch = useDispatch();

  const reduxCourse = useSelector((state) => state.course);

  // from url
  const examId = props.routeProps.match.params.examId;
  const courseId = props.routeProps.match.params.courseId;

  const [exam, setExam] = useState();

  // modals
  const [showCorrectModal, setShowCorrectModal] = useState(false);
  const [showWrongModal, setShowWrongModal] = useState(false);

  useEffect(() => {
    API.fetchExamInfo(examId)
      .then((res) => {
        setExam(res.data);
        dispatch(
          breadcrumbActions.setBreadcrumb([
            { text: "Mis cursos", link: "/dashboard" },
            { text: reduxCourse.name, link: "/course/" + courseId },
            { text: res.data.name },
          ])
        );
        dispatch(
          examActions.setExam({ _id: res.data._id, name: res.data.name })
        );
      })
      .catch((err) => {
        console.log(err);
        alert("Ocurrió un error al cargar las preguntas de tu examen");
      });
  }, []);

  return (
    <StudentLayout>
      {exam ? (
        <>
          {/* title */}
          <div className="d-flex">
            <h1 className="mb-0 pr-2">{exam.name}</h1>
            <div className="ml-auto d-flex align-items-end">
              <Button
                href={"/course/" + courseId}
                variant="link"
                className="text-danger ml-auto"
                style={{ fontSize: "25px" }}
              >
                <i className="fas fa-times" />
              </Button>
            </div>
          </div>
          <hr className="mt-0" />
          {/* question */}
          <Question
            questions={exam.questions}
            examId={examId}
            courseId={courseId}
          />
          {/* modals */}
          <CorrectModal
            showCorrectModal={showCorrectModal}
            setShowCorrectModal={setShowCorrectModal}
          />
          <WrongModal
            showWrongModal={showWrongModal}
            setShowWrongModal={setShowWrongModal}
          />
          {/* <ResultsModal
            showResultsModal={this.state.showResultsModal}
            courseId={this.props.courseId}
            score={this.state.score}
            correct={this.state.correct}
            mistakes={this.props.questions.length - this.state.correct}
          /> */}
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
