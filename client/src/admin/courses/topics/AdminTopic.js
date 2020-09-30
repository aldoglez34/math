import React, { useState, useEffect } from "react";
import AdminLayout from "../../layout/AdminLayout";
import { Container, Row, Col, Image, Button, Badge } from "react-bootstrap";
import TeacherAPI from "../../../utils/TeacherAPI";
import AdminTopicModal from "./components/AdminTopicModal";
import AdminSpinner from "../../components/AdminSpinner";
import AddVideo from "./components/AddVideo";
import AddPDF from "./components/AddPDF";
import AdminButton from "../../components/AdminButton";
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

  return topic ? (
    <AdminLayout
      title="Detalle de Tema"
      leftBarActive="Cursos"
      backBttn={"/admin/courses/edit/" + props.routeProps.match.params.courseId}
    >
      <Container fluid>
        {/* topic name */}
        <Row>
          <Col>
            <span className="text-muted">Nombre</span>
            <h1>
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
          </Col>
        </Row>
        {/* subject */}
        <Row>
          <Col>
            <span className="text-muted">Materia</span>
            <h2>
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
          </Col>
        </Row>
        {/* description */}
        <Row>
          <Col>
            <span className="text-muted">Descripción</span>
            <h5>
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
          </Col>
        </Row>
        {/* freestyle */}
        <Row>
          <Col>
            <span className="text-muted">Modo rápido</span>
            <h5>
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
          </Col>
        </Row>
        {/* reward */}
        <Row>
          <Col>
            <span className="text-muted">Recompensa</span>
            <div className="d-flex">
              <h5>{topic.reward.name}</h5>
              <Button
                size="sm"
                variant="danger"
                className="ml-1"
                title="Eliminar"
              >
                <strong>
                  <i className="fas fa-trash-alt" />
                </strong>
              </Button>
            </div>
            <Image
              src={topic.reward.link}
              width="70"
              height="100"
              className="mb-3"
            />
          </Col>
        </Row>
        {/* material */}
        <Row>
          <Col>
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
                      <Button
                        size="sm"
                        variant="danger"
                        className="ml-1"
                        title="Eliminar"
                      >
                        <strong>
                          <i className="fas fa-trash-alt" />
                        </strong>
                      </Button>
                    </h5>
                  </li>
                ))}
              </ul>
            ) : (
              <h5>-</h5>
            )}
            <div className="mb-3">
              <AddVideo
                courseId={props.routeProps.match.params.courseId}
                topicId={topic._id}
              />
              <AddPDF
                courseId={props.routeProps.match.params.courseId}
                topicId={topic._id}
              />
            </div>
          </Col>
        </Row>
        {/* exams */}
        <Row>
          <Col>
            <span className="text-muted">Exámenes</span>
            <div className="d-flex align-items-end">
              <h5 className="mb-0">
                <Badge variant="light">Básico</Badge>
              </h5>
              {/* <h5 className="mb-0">-</h5> */}
            </div>
            <div className="d-flex align-items-end">
              <h5 className="mb-0">
                <Badge variant="light">Básico-Intermedio</Badge>
              </h5>
              {/* <h5 className="mb-0">-</h5> */}
            </div>
            <div className="d-flex align-items-end">
              <h5 className="mb-0">
                <Badge variant="light">Intermedio</Badge>
              </h5>
              <h5 className="mb-0">-</h5>
            </div>
            <div className="d-flex align-items-end">
              <h5 className="mb-0">
                <Badge variant="light">Intermedio-Avanzado</Badge>
              </h5>
              <h5 className="mb-0">-</h5>
            </div>
            <div className="d-flex align-items-end mb-2">
              <h5 className="mb-0">
                <Badge variant="light">Avanzado</Badge>
              </h5>
              <h5 className="mb-0">-</h5>
            </div>
            {/* {topic.exams.length ? (
              <ul>
                {topic.exams.map((e) => (
                  <li key={e._id}>
                    <h5>{e.name}</h5>
                  </li>
                ))}
              </ul>
            ) : (
              <h5>-</h5>
            )} */}
            <AdminButton
              content={
                <>
                  <i className="far fa-file-alt mr-2" />
                  <span>Agregar examen</span>
                </>
              }
              link={`/admin/courses/exam/new/${props.routeProps.match.params.courseId}/${topic._id}`}
            />
          </Col>
        </Row>
      </Container>
    </AdminLayout>
  ) : (
    <AdminSpinner />
  );
});

export default AdminTopic;
