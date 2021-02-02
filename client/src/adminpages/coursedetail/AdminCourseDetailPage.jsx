import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import TeacherAPI from "../../utils/TeacherAPI";
import { useDispatch } from "react-redux";
import * as adminActions from "../../redux/actions/admin";
import {
  AdminSpinner,
  AdminLayout,
  AdminModal,
  CourseNameForm,
  CourseSchoolForm,
  CoursePriceForm,
  CourseDescriptionForm,
  CourseSummaryForm,
  EditTopicsBttn,
  AdminButton,
  CourseActiveForm,
} from "../components";
import moment from "moment";
import "moment/locale/es";

export const AdminCourseDetailPage = React.memo((props) => {
  const dispatch = useDispatch();

  const [course, setCourse] = useState();

  useEffect(() => {
    const courseId = props.routeProps.match.params.courseId;

    TeacherAPI.t_fetchOneCourse(courseId)
      .then((res) => {
        setCourse(res.data);
        dispatch(adminActions.setTitle(res.data.name));
        dispatch(
          adminActions.setCourse({
            courseName: res.data.name,
            courseId: res.data._id,
          })
        );
      })
      .catch((err) => {
        console.log(err);
        alert("Ocurrió un error");
      });
  }, [props.routeProps.match.params.courseId, dispatch]);

  return course ? (
    <AdminLayout title="Curso" leftBarActive="Cursos" backBttn="/admin/courses">
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
        {/* status */}
        <Row>
          <Col>
            <span className="text-muted">Estatus</span>
            <h3>
              {course.isActive ? "Activo" : "No activo"}
              <AdminModal
                Form={CourseActiveForm}
                formLabel="Estatus"
                formInitialText={course.isActive}
                courseId={course._id}
              />
            </h3>
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
                  <li key={idx}>
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
              <ul className="mb-1">
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
              <h5>-</h5>
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
        <Row className="mt-2">
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
