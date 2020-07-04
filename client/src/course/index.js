import React, { useState, useEffect } from "react";
import { Spinner, Container } from "react-bootstrap";
import API from "../utils/API";
import "./course.scss";
import { MainCourseLayout } from "../components/Layout";
import CourseIntro from "./components/CourseIntro";
import Topic from "./components/Topic";
import { useSelector, useDispatch } from "react-redux";
import * as breadcrumbActions from "../redux/actions/breadcrumb";
import * as courseActions from "../redux/actions/course";

export default React.memo((props) => {
  const dispatch = useDispatch();

  const [course, setCourse] = useState();

  const courseId = props.routeProps.match.params.courseId;

  const studentId = useSelector((state) => state.student._id);

  useEffect(() => {
    API.fetchCourseInfo(courseId, studentId)
      .then((res) => {
        setCourse(res.data);
        dispatch(
          breadcrumbActions.setBreadcrumb([
            { text: "Mis cursos", link: "/dashboard" },
            { text: res.data.name },
          ])
        );
        dispatch(
          courseActions.setCourse({ _id: res.data._id, name: res.data.name })
        );
      })
      .catch((err) => {
        console.log(err);
        alert("Ocurrió un error al cargar la información del curso.");
        window.location.href = "/dashboard";
      });
  }, [courseId, studentId]);

  return (
    <MainCourseLayout>
      {course ? (
        <>
          {/* TOP INTRO */}
          <CourseIntro
            name={course.name}
            longDescription={course.longDescription}
            topics={course.topics.reduce((acc, cv) => {
              acc.push({ _id: cv._id, subject: cv.subject, name: cv.name });
              return acc;
            }, [])} // only sending _id, subject and name
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
                courseId={courseId} // for the exit button in the exam page
                topic={ct}
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
