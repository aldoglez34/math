import React, { useState, useEffect } from "react";
import AdminLayout from "../../layout/AdminLayout";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import TeacherAPI from "../../../utils/TeacherAPI";
import moment from "moment";
import "moment/locale/es";
//
import AdminModal from "../../components/AdminModal";
import CourseNameForm from "./forms/CourseNameForm";
import CourseDescriptionForm from "./forms/CourseDescriptionForm";

const AdminCourseDetail = React.memo((props) => {
  const [course, setCourse] = useState();

  useEffect(() => {
    const courseId = props.routeProps.match.params.courseId;
    TeacherAPI.t_fetchOneCourse(courseId)
      .then((res) => setCourse(res.data))
      .catch((err) => {
        console.log(err);
        alert("Ocurrió un error");
      });
  }, [props.routeProps.match.params.courseId]);

  return (
    <AdminLayout
      title="Editar Curso"
      leftBarActive="Cursos"
      backBttn="/admin/courses"
    >
      {course ? (
        <Container>
          <Row>
            <Col className="px-0 mt-4" md={{ offset: 2, span: 8 }}>
              {/* course name */}
              <span className="text-muted">Nombre</span>
              <h1 className="mb-0">
                {course.name}
                <AdminModal
                  modalTitle="Editar nombre del curso"
                  Form={CourseNameForm}
                  formLabel="Nombre del curso"
                  formInitialText={course.name}
                  courseId={course._id}
                />
              </h1>
              <br />
              {/* grado escolar */}
              <span className="text-muted">Nivel</span>
              <h2>{course.school}</h2>
              <br />
              {/* grado escolar */}
              <span className="text-muted">Precio</span>
              <h2>{course.price}</h2>
              <br />
              {/* description */}
              <span className="text-muted">Descripción</span>
              <h5>
                {course.description}
                <AdminModal
                  modalTitle="Editar descripción del curso"
                  Form={CourseDescriptionForm}
                  formLabel="Descripción del curso"
                  formInitialText={course.description}
                  courseId={course._id}
                />
              </h5>
              <br />
              {/* summary */}
              <span className="text-muted">Resumen</span>
              <ul>
                {course.topicsSummary.map((t) => {
                  return (
                    <li key={t}>
                      <h5>{t}</h5>
                    </li>
                  );
                })}
              </ul>
              <br />
              {/* topics */}
              <span className="text-muted">Temas</span>
              <ul>
                {course.topics.map((t) => {
                  return (
                    <li key={t._id}>
                      <h5>{t.name}</h5>
                    </li>
                  );
                })}
              </ul>
              <br />
              {/* created at */}
              <span className="text-muted">Fecha de creación</span>
              <h5>{moment(course.createdAt).format("LL")}</h5>
              <br />
            </Col>
          </Row>
        </Container>
      ) : (
        <div className="text-center mt-4">
          <Spinner animation="border" variant="success" />
        </div>
      )}
    </AdminLayout>
  );
});

export default AdminCourseDetail;
