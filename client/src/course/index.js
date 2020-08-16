import React, { useState, useEffect } from "react";
import { Spinner, Container } from "react-bootstrap";
import API from "../utils/API";
import "./course.scss";
import { MainCourseLayout } from "../components/Layout";
import CourseIntro from "./components/CourseIntro";
import Topic from "./components/Topic";
import { useSelector, useDispatch } from "react-redux";
import * as breadcrumbActions from "../redux/actions/breadcrumb";
import * as examActions from "../redux/actions/exam";
import ExamUnlocked from "./components/modal/ExamUnlocked";

export default React.memo((props) => {
  const dispatch = useDispatch();

  const [course, setCourse] = useState();

  const reduxCourse = useSelector((state) => state.course);
  const reduxStudent = useSelector((state) => state.student);
  const reduxExam = useSelector((state) => state.exam);
  const unlocked = useSelector((state) => state.unlocked);

  const [showUnlocked, setShowExamUnlocked] = useState(false);

  const setCourseAsync = async (c) => setCourse(c);

  useEffect(() => {
    const _hash = props.routeProps.location.hash;
    // decode so there are no problems with tildes
    const hash = _hash ? decodeURI(_hash.replace("#", "")) : null;

    // if a new exam is unlocked, show modal
    if (reduxExam) dispatch(examActions.clearExam());

    // if there was a new exam unlocked, show it (this covers freestyle as well)
    if (unlocked) setShowExamUnlocked(true);

    // fetch course info
    if (reduxCourse && reduxStudent) {
      API.fetchCourseInfo(reduxCourse._id, reduxStudent._id)
        .then((res) => {
          // setting course in this state (async)
          setCourseAsync(res.data).then(() => {
            // move to the hash position
            if (hash) {
              const element = document.getElementById(hash);
              element.scrollIntoView();
            }
          });

          // setting bredcrumb
          dispatch(
            breadcrumbActions.setBreadcrumb([
              { text: "Mis cursos", link: "/dashboard" },
              { text: res.data.name },
            ])
          );
        })
        .catch((err) => {
          console.log(err);
          alert("Ocurrió un error al cargar la información del curso.");
          window.location.href = "/dashboard";
        });
    }
  }, [reduxCourse]);

  return (
    <MainCourseLayout>
      <ExamUnlocked
        showUnlocked={showUnlocked}
        setShowExamUnlocked_={setShowExamUnlocked}
      />
      {course ? (
        <>
          {/* TOP INTRO */}
          <CourseIntro
            name={course.name}
            topics={course.topics.reduce((acc, cv) => {
              acc.push({ _id: cv._id, subject: cv.subject, name: cv.name });
              return acc;
            }, [])} // only sending "_id", "subject" and "name"
            courseId={course._id}
          />
          {/* TOPICS */}
          <Container
            style={{
              paddingTop: "0px",
              paddingBottom: "55px",
              fontSize: "16px",
            }}
          >
            {course.topics.map((ct) => (
              <Topic key={ct._id} topic={ct} />
            ))}
          </Container>
        </>
      ) : (
        <div className="text-center mt-4 pt-4">
          <Spinner animation="border" variant="primary" />
        </div>
      )}
    </MainCourseLayout>
  );
});
