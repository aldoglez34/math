import React from "react";
import TeacherLayout from "../../teacherlayout/TeacherLayout";
import { Container, Row, Col, Button } from "react-bootstrap";

const NewCourse = React.memo(() => {
  return (
    <TeacherLayout
      title="Nuevo Curso"
      leftBarActive="Cursos"
      backBttn="/admin/courses"
    >
      <Container>
        <h1>nuevo curso formik</h1>
      </Container>
    </TeacherLayout>
  );
});

export default NewCourse;
