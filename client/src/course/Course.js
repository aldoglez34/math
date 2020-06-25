import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import API from "../utils/API";
import "./course.scss";
import { StudentLayout } from "../components/Layout";
import CourseIntro from "./components/CourseIntro";
import Topic from "./components/Topic";

export default React.memo((props) => {
  const [course, setCourse] = useState();

  const [breadcrumb, setBreadcrumb] = useState();

  useEffect(() => {
    API.fetchCourseInfo(props.routeProps.match.params.code)
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
  }, [props.routeProps.match.params.code]);

  return (
    <StudentLayout breadcrumb={breadcrumb}>
      {course ? (
        <>
          <CourseIntro
            code={course.code}
            name={course.name}
            description={course.longDescription}
            topics={course.topics}
          />
          {/* topics */}
          {course.topics.map((ct) => (
            <Topic
              key={ct.name}
              code={course.code}
              name={ct.name}
              toLearn={ct.toLearn}
              description={ct.description}
              material={ct.material}
              exams={ct.exams}
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
