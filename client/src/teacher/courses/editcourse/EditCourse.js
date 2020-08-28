import React, { useState, useEffect } from "react";
import TeacherLayout from "../../teacherlayout/TeacherLayout";
import { Container, Spinner } from "react-bootstrap";
import TeacherAPI from "../../../utils/TeacherAPI";

const NewCourse = React.memo((props) => {
  const [course, setCourse] = useState();

  useEffect(() => {
    const courseId = props.routeProps.match.params.courseId;
    TeacherAPI.t_fetchOneCourse(courseId)
      .then((res) => setCourse(res.data))
      .catch((err) => {
        console.log(err);
        alert("Ocurrió un error");
      });
  }, []);

  return (
    <TeacherLayout
      title="Editar Curso"
      leftBarActive="Cursos"
      backBttn="/admin/courses"
    >
      {course ? (
        <Container>
          <h2>{course.name}</h2>
        </Container>
      ) : (
        <div className="text-center mt-4">
          <Spinner animation="border" variant="success" />
        </div>
      )}
    </TeacherLayout>
  );
});

export default NewCourse;
