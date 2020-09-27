import React, { useState, useEffect } from "react";
import AdminLayout from "../../layout/AdminLayout";
import { Container, Row, Col } from "react-bootstrap";
import TeacherAPI from "../../../utils/TeacherAPI";
import moment from "moment";
import "moment/locale/es";
import AdminOptionsDropdown from "../../components/AdminOptionsDropdown";
import AdminSpinner from "../../components/AdminSpinner";
//
import AdminModal from "../../components/AdminModal";
import CourseNameForm from "./forms/CourseNameForm";
import CourseSchoolForm from "./forms/CourseSchoolForm";
import CoursePriceForm from "./forms/CoursePriceForm";
import CourseDescriptionForm from "./forms/CourseDescriptionForm";
import CourseSummaryForm from "./forms/CourseSummaryForm";
import EditTopicsBttn from "../../components/EditTopicsBttn";

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
      title={course.name}
      leftBarActive="Cursos"
      backBttn={{ link: "/admin/courses", text: "Cursos" }}
    >
      <Container>
        <Row>
          <Col className="px-0 mt-4" md={{ offset: 2, span: 8 }}>
            {/* course name */}
            <span className="text-muted">Nombre</span>
            <h1 className="mb-0">
              {course.name}
              <AdminModal
                Form={CourseNameForm}
                formLabel="Nombre"
                formInitialText={course.name}
                courseId={course._id}
              />
            </h1>
            <br />
            {/* grado escolar */}
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
            <br />
            {/* precio */}
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
            <br />
            {/* description */}
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
            <br />
            {/* summary */}
            <span className="text-muted">
              Resumen <small>(para el landing page)</small>
            </span>
            <ul>
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
            {/* topics */}
            <span className="text-muted d-flex">
              Temas
              <AdminOptionsDropdown
                opts={[
                  {
                    link:
                      "/admin/courses/courses/newTopic/" +
                      props.routeProps.match.params.courseId,
                    text: "Nuevo tema",
                  },
                ]}
              />
            </span>
            {course.topics.length ? (
              <ul>
                {course.topics.map((t) => (
                  <li key={t._id}>
                    <h5>
                      {t.name}
                      <EditTopicsBttn courseId={course._id} topicId={t._id} />
                    </h5>
                  </li>
                ))}
              </ul>
            ) : (
              <h5>Sin temas</h5>
            )}
            <br />
            {/* created at */}
            <span className="text-muted">Fecha de creación</span>
            <h5>
              <i className="far fa-calendar-alt mr-2" />
              {moment(course.createdAt).format("LL")}
            </h5>
            <br />
          </Col>
        </Row>
      </Container>
    </AdminLayout>
  ) : (
    <AdminSpinner />
  );
});

export default AdminCourseDetail;
