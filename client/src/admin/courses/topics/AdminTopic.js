import React, { useState, useEffect } from "react";
import AdminLayout from "../../layout/AdminLayout";
import { Container, Row, Col, Spinner, Image } from "react-bootstrap";
import TeacherAPI from "../../../utils/TeacherAPI";
import AdminTopicModal from "./components/AdminTopicModal";
//
import TopicNameForm from "./forms/TopicNameForm";
import TopicSubjectForm from "./forms/TopicSubjectForm";
import TopicDescriptionForm from "./forms/TopicDescriptionForm";
import TopicFreestyleTimerForm from "./forms/TopicFreestyleTimerForm";

const AdminTopic = React.memo((props) => {
  const [topic, setTopic] = useState();

  useEffect(() => {
    const courseId = props.routeProps.match.params.courseId;
    const topicId = props.routeProps.match.params.topicId;

    TeacherAPI.t_fetchTopic(courseId, topicId)
      .then((res) => setTopic(res.data))
      .catch((err) => {
        console.log(err);
        alert("Ocurrió un error");
      });
  }, [
    props.routeProps.match.params.courseId,
    props.routeProps.match.params.topicId,
  ]);

  return (
    <AdminLayout
      title="Sistema Decimal"
      leftBarActive="Cursos"
      backBttn={{
        link: "/admin/courses/edit/" + props.routeProps.match.params.courseId,
        text: "Curso",
      }}
    >
      {topic ? (
        <Container>
          <Row>
            <Col className="px-0 mt-4" md={{ offset: 2, span: 8 }}>
              {/* topic name */}
              <span className="text-muted">Nombre</span>
              <h1 className="mb-0">
                {topic.name}
                <AdminTopicModal
                  modalTitle="Editar nombre"
                  Form={TopicNameForm}
                  formLabel="Nombre"
                  formInitialText={topic.name}
                  courseId={props.routeProps.match.params.courseId}
                  topicId={topic._id}
                />
              </h1>
              <br />
              {/* subject */}
              <span className="text-muted">Materia</span>
              <h2 className="mb-0">
                {topic.subject}
                <AdminTopicModal
                  modalTitle="Editar materia"
                  Form={TopicSubjectForm}
                  formLabel="Materia"
                  formInitialText={topic.subject}
                  courseId={props.routeProps.match.params.courseId}
                  topicId={topic._id}
                />
              </h2>
              <br />
              {/* description */}
              <span className="text-muted">Descripción</span>
              <h5 className="mb-0">
                {topic.description}
                <AdminTopicModal
                  modalTitle="Editar descripción"
                  Form={TopicDescriptionForm}
                  formLabel="Descripción"
                  formInitialText={topic.description}
                  courseId={props.routeProps.match.params.courseId}
                  topicId={topic._id}
                />
              </h5>
              <br />
              {/* freestyle */}
              <span className="text-muted">Modo rápido</span>
              <h5 className="mb-0">
                {topic.freestyle.timer + " minutos"}
                <AdminTopicModal
                  modalTitle="Editar modo rápido"
                  Form={TopicFreestyleTimerForm}
                  formLabel="Modo rápido"
                  formInitialText={topic.freestyle.timer}
                  courseId={props.routeProps.match.params.courseId}
                  topicId={topic._id}
                />
              </h5>
              <br />
              {/* reward */}
              <span className="text-muted">Recompensa</span>
              <h5 className="mb-2">{topic.reward.name}</h5>
              <Image src={topic.reward.link} width="70" height="100" />
              <br />
              <br />
              {/* material */}
              <span className="text-muted">Material</span>
              {topic.material.length ? (
                <ul>
                  {topic.material.map((m) => (
                    <li key={m._id}>
                      <h5>
                        {m.type === "video" ? (
                          <i className="fas fa-video mr-2" />
                        ) : m.type === "pdf" ? (
                          <i className="fas fa-file-pdf mr-2" />
                        ) : null}
                        {m.name}
                      </h5>
                    </li>
                  ))}
                </ul>
              ) : (
                <h5>Vacío</h5>
              )}
              <br />
              {/* exams */}
              <span className="text-muted">Exámenes</span>
              {topic.exams.length ? (
                <ul>
                  {topic.exams.map((e) => (
                    <li key={e._id}>
                      <h5>{e.name}</h5>
                    </li>
                  ))}
                </ul>
              ) : (
                <h5>Vacío</h5>
              )}
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

export default AdminTopic;
