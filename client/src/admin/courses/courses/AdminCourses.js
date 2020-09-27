import React, { useState, useEffect } from "react";
import AdminLayout from "../../layout/AdminLayout";
import { Button, Container, Row, Col, ListGroup } from "react-bootstrap";
import TeacherAPI from "../../../utils/TeacherAPI";
import CourseItem from "./components/CourseItem";
import AdminSpinner from "../../components/AdminSpinner";
import { useDispatch } from "react-redux";
import { setTitle } from "../../../redux/actions/admin";

const TeacherCoursesMain = React.memo(() => {
  const dispatch = useDispatch();

  const [courses, setCourses] = useState();

  useEffect(() => {
    dispatch(setTitle("Cursos"));

    TeacherAPI.t_fetchCourses()
      .then((res) => setCourses(res.data))
      .catch((err) => {
        console.log(err);
        alert("Ocurrió un error");
      });
  }, []);

  return courses ? (
    <AdminLayout leftBarActive="Cursos">
      <Container fluid>
        <Row>
          <Col className="px-0 mt-4" md={{ offset: 2, span: 8 }}>
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
            <div className="text-center mt-4">
              <Button
                variant="dark"
                size="lg"
                className="py-4"
                block
                href="/admin/courses/new"
              >
                <h5 className="mb-0 text-light">NUEVO CURSO</h5>
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </AdminLayout>
  ) : (
    <AdminSpinner />
  );
});

export default TeacherCoursesMain;
