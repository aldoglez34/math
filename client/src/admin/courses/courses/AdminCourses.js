import React, { useState, useEffect } from "react";
import AdminLayout from "../../layout/AdminLayout";
import { Button, Container, Row, Col, ListGroup } from "react-bootstrap";
import TeacherAPI from "../../../utils/TeacherAPI";
import CourseItem from "./components/CourseItem";
import AdminSpinner from "../../components/AdminSpinner";

const TeacherCoursesMain = React.memo(() => {
  const [courses, setCourses] = useState();

  useEffect(() => {
    TeacherAPI.t_fetchCourses()
      .then((res) => setCourses(res.data))
      .catch((err) => {
        console.log(err);
        alert("Ocurrió un error");
      });
  }, []);

  return courses ? (
    <AdminLayout title="Cursos" leftBarActive="Cursos">
      <Container fluid>
        <Row>
          <Col md={{ offset: 2, span: 8 }}>
            {courses.length ? (
              <>
                <h3 className="mb-3" style={{ color: "#0f5257" }}>
                  Selecciona un curso...
                </h3>
                <ListGroup>
                  {courses.map((c) => (
                    <CourseItem
                      key={c._id}
                      name={c.name}
                      school={c.school}
                      _id={c._id}
                    />
                  ))}
                </ListGroup>
              </>
            ) : null}
            <Button
              variant="dark"
              size="lg"
              className="py-4 mt-4"
              block
              href="/admin/courses/new"
            >
              <h5 className="mb-0 text-light">NUEVO CURSO</h5>
            </Button>
          </Col>
        </Row>
      </Container>
    </AdminLayout>
  ) : (
    <AdminSpinner />
  );
});

export default TeacherCoursesMain;
