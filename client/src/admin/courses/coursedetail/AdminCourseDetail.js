import React, { useState, useEffect } from "react";
import AdminLayout from "../../layout/AdminLayout";
import { Container, Row, Col } from "react-bootstrap";
import TeacherAPI from "../../../utils/TeacherAPI";
import moment from "moment";
import "moment/locale/es";
import AdminSpinner from "../../components/AdminSpinner";
//
import AdminModal from "../../components/AdminModal";
import CourseNameForm from "./forms/CourseNameForm";
import CourseSchoolForm from "./forms/CourseSchoolForm";
import CoursePriceForm from "./forms/CoursePriceForm";
import CourseDescriptionForm from "./forms/CourseDescriptionForm";
import CourseSummaryForm from "./forms/CourseSummaryForm";
import EditTopicsBttn from "../../components/EditTopicsBttn";
import AdminButton from "../../components/AdminButton";

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

  return course ? (
    <AdminLayout
      title="Detalle de Curso"
      leftBarActive="Cursos"
      backBttn="/admin/courses"
    >
      <Container fluid>
        {/* course name */}
        <Row>
          <Col>
            <span className="text-muted">Nombre</span>
            <h1>
              {course.name}
              <AdminModal
                Form={CourseNameForm}
                formLabel="Nombre"
                formInitialText={course.name}
                courseId={course._id}
              />
            </h1>
          </Col>
        </Row>
        {/* grado escolar */}
        <Row>
          <Col>
            <span className="text-muted">Nivel</span>
            <h2>
              {course.school}
              <AdminModal
                Form={CourseSchoolForm}
                formLabel="Nivel escolar"
                formInitialText={course.school}
                courseId={course._id}
              />
            </h2>
          </Col>
        </Row>
        {/* precio */}
        <Row>
          <Col>
            <span className="text-muted">Precio</span>
            <h2>
              {"$" + course.price}
              <AdminModal
                Form={CoursePriceForm}
                formLabel="Precio"
                formInitialText={course.price}
                courseId={course._id}
              />
            </h2>
          </Col>
        </Row>
        {/* description */}
        <Row>
          <Col>
            <span className="text-muted">Descripción</span>
            <h5>
              {course.description}
              <AdminModal
                Form={CourseDescriptionForm}
                formLabel="Descripción"
                formInitialText={course.description}
                courseId={course._id}
              />
            </h5>
          </Col>
        </Row>
        {/* summary */}
        <Row>
          <Col>
            <span className="text-muted">
              Resumen <small>(para el landing page)</small>
            </span>
            <ul className="mb-1 mt-2">
              {course.topicsSummary.map((t, idx) => {
                return (
                  <li key={t}>
                    <h5>
                      {t}
                      {idx === course.topicsSummary.length - 1 ? (
                        <AdminModal
                          Form={CourseSummaryForm}
                          formLabel="Resumen"
                          formInitialText={course.topicsSummary.toString()}
                          courseId={course._id}
                        />
                      ) : null}
                    </h5>
                  </li>
                );
              })}
            </ul>
          </Col>
        </Row>
        {/* topics */}
        <Row>
          <Col>
            <span className="text-muted d-flex">Temas</span>
            {course.topics.length ? (
              <ul className="mb-0">
                {course.topics.map((t) => (
                  <li key={t._id}>
                    <h5 className="mb-0">
                      {t.name}
                      <EditTopicsBttn courseId={course._id} topicId={t._id} />
                    </h5>
                  </li>
                ))}
              </ul>
            ) : (
              <h5>Sin temas</h5>
            )}
            <AdminButton
              content={
                <>
                  <i className="fas fa-plus-square mr-2" />
                  <span>Nuevo</span>
                </>
              }
              link={
                "/admin/courses/courses/newTopic/" +
                props.routeProps.match.params.courseId
              }
            />
          </Col>
        </Row>
        {/* created at */}
        <Row>
          <Col>
            <span className="text-muted">Fecha de creación</span>
            <h5>
              <i className="far fa-calendar-alt mr-2" />
              {moment(course.createdAt).format("LL")}
            </h5>
          </Col>
        </Row>
      </Container>
    </AdminLayout>
  ) : (
    <AdminSpinner />
  );
});

export default AdminCourseDetail;
