import React, { useState, useEffect } from "react";
import { Spinner, Container } from "react-bootstrap";
import API from "../utils/API";
import "./course.scss";
import { MainCourseLayout } from "../components/Layout";
import CourseIntro from "./components/CourseIntro";
import Topic from "./components/Topic";
import { useSelector } from "react-redux";

export default React.memo((props) => {
  const [course, setCourse] = useState();

  const [breadcrumb, setBreadcrumb] = useState();

  const courseId = props.routeProps.match.params.courseId;

  const studentId = useSelector((state) => state.student._id);

  useEffect(() => {
    API.fetchCourseInfo(courseId, studentId)
      .then((res) => {
        setCourse(res.data);
        setBreadcrumb([
          { text: "Mis cursos", link: "/dashboard" },
          { text: res.data.name },
        ]);
      })
      .catch((err) => {
        console.log(err);
        alert("Ocurrió un error al cargar la información del curso.");
      });
  }, [courseId, studentId]);

  return (
    <MainCourseLayout breadcrumb={breadcrumb}>
      {course ? (
        <>
          {/* TOP INTRO */}
          <CourseIntro
            name={course.name}
            longDescription={course.longDescription}
            topics={course.topics.reduce((acc, cv) => {
              acc.push({ _id: cv._id, subject: cv.subject, name: cv.name });
              return acc;
            }, [])}
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
              <Topic
                key={ct._id}
                name={ct.name}
                description={ct.description}
                toLearn={ct.toLearn}
                material={ct.material}
                exams={ct.exams}
                courseId={courseId} // for the exit button in the exam page
                freestyleTimer={ct.freestyleTimer}
                freestyleAttemptsCounter={ct.freestyleAttemptsCounter}
                freestyleLatestVisit={ct.freestyleLatestVisit}
                freestyleHighestScore={ct.freestyleHighestScore}
              />
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
