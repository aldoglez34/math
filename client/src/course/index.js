import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import API from "../utils/API";
import "./course.scss";
import { StudentLayout } from "../components/Layout";
import CourseIntro from "./CourseIntro";
import Topic from "./Topic";

export default React.memo((props) => {
  const [course, setCourse] = useState();

  const [breadcrumb, setBreadcrumb] = useState();

  const courseId = props.routeProps.match.params.courseId;

  useEffect(() => {
    API.fetchCourseInfo(courseId)
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
  }, [props.routeProps.match.params.courseId]);

  return (
    <StudentLayout breadcrumb={breadcrumb}>
      {course ? (
        <>
          <CourseIntro
            courseId={course._id}
            name={course.name}
            description={course.longDescription}
            topics={course.topics.reduce((acc, cv) => {
              acc.push({ topicId: cv._id, subject: cv.subject, name: cv.name });
              return acc;
            }, [])}
          />
          {/* topics */}
          {course.topics.map((ct) => (
            <Topic
              key={ct._id}
              name={ct.name}
              toLearn={ct.toLearn}
              description={ct.description}
              material={ct.material}
              exams={ct.exams}
              courseId={courseId} // for the exit button ahead
            />
          ))}
        </>
      ) : (
        <div className="text-center mt-4 pt-4">
          <Spinner animation="border" variant="primary" />
        </div>
      )}
    </StudentLayout>
  );
});
