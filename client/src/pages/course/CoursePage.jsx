import React, { useState, useEffect } from "react";
import { Container, Spinner } from "react-bootstrap";
import API from "../../utils/API";
import { StudentLayout } from "../../components/Layout";
import { CourseIntro, ExamUnlocked, Topic } from "./components";
import { useSelector, useDispatch } from "react-redux";
import * as examActions from "../../redux/actions/exam";
import * as zenModeActions from "../../redux/actions/zenMode";
import "./coursepage.scss";

export const CoursePage = React.memo((props) => {
  const dispatch = useDispatch();

  const [course, setCourse] = useState();

  const reduxCourse = useSelector((state) => state.course);
  const reduxStudent = useSelector((state) => state.student);
  const reduxExam = useSelector((state) => state.exam);
  const unlocked = useSelector((state) => state.unlocked);
  const zenMode = useSelector((state) => state.zenMode);

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

    if (zenMode) dispatch(zenModeActions.zenModeOff());

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
        })
        .catch((err) => {
          console.log(err);
          alert("Ocurrió un error al cargar la información del curso.");
          window.location.href = "/dashboard";
        });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduxCourse]);

  return (
    <StudentLayout>
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
              acc.push({
                _id: cv._id,
                name: cv.name,
                subject: cv.subject,
                topicOrderNumber: cv.topicOrderNumber,
              });
              return acc;
            }, [])}
            rewards={course.rewards}
            courseId={course._id}
          />
          {/* TOPICS */}
          <div style={{ paddingBottom: "100px" }}>
            {course.topics
              .sort((a, b) => a.topicOrderNumber - b.topicOrderNumber)
              .map((ct) => (
                <React.Fragment key={ct._id}>
                  <hr className="mexmaticasDivider" />
                  <div className="topicSection">
                    <Container>
                      <Topic courseName={course.name} topic={ct} />
                    </Container>
                  </div>
                </React.Fragment>
              ))}
          </div>
        </>
      ) : (
        <div className="text-center mt-4 pt-4">
          <Spinner animation="border" variant="success" />
        </div>
      )}
    </StudentLayout>
  );
});
