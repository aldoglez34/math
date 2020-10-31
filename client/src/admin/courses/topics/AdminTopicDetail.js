import React, { useState, useEffect } from "react";
import AdminLayout from "../../layout/AdminLayout";
import { Container, Row, Col, Image } from "react-bootstrap";
import TeacherAPI from "../../../utils/TeacherAPI";
import AdminTopicModal from "./components/AdminTopicModal";
import AdminSpinner from "../../components/AdminSpinner";
import AddVideo from "./components/AddVideo";
import AddReward from "./components/AddReward";
import AddPDF from "./components/AddPDF";
import EditExamBttn from "../../components/EditExamBttn";
//
import TopicNameForm from "./forms/TopicNameForm";
import TopicSubjectForm from "./forms/TopicSubjectForm";
import TopicDescriptionForm from "./forms/TopicDescriptionForm";
import TopicFreestyleTimerForm from "./forms/TopicFreestyleTimerForm";
import NewExamBttn from "./components/NewExamBttn";
import DeleteMaterialBttn from "./components/DeleteMaterialBttn";
import DeleteRewardBttn from "./components/DeleteRewardBttn";

const AdminTopicDetail = React.memo((props) => {
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
      title="Tema"
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
            {topic.reward ? (
              <>
                <div className="d-flex">
                  <h5>{topic.reward.name}</h5>
                  <DeleteRewardBttn
                    filePath={topic.reward.link}
                    courseId={props.routeProps.match.params.courseId}
                    topicId={topic._id}
                  />
                </div>
                <Image
                  src={topic.reward.link}
                  width="70"
                  height="100"
                  className="mb-3"
                />
              </>
            ) : (
              <div className="my-2">
                <h5>-</h5>
                <AddReward
                  courseId={props.routeProps.match.params.courseId}
                  topicId={topic._id}
                />
              </div>
            )}
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
                    <strong style={{ color: "#0f5257" }}>
                      {m.type === "video" ? (
                        <i className="fas fa-video mr-2" />
                      ) : m.type === "pdf" ? (
                        <i className="fas fa-file-pdf mr-2" />
                      ) : null}
                      {m.name}
                      <DeleteMaterialBttn
                        isPDF={m.type === "pdf" ? m.link : null}
                        courseId={props.routeProps.match.params.courseId}
                        topicId={topic._id}
                        materialId={m._id}
                      />
                    </strong>
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
            {topic.exams.length ? (
              <ul className="mb-0">
                {topic.exams.map((e) => (
                  <li key={e._id}>
                    <h5 className="mb-1">
                      {`[${e.difficulty}] `}
                      {e.name}
                      <EditExamBttn
                        courseId={props.routeProps.match.params.courseId}
                        topicId={props.routeProps.match.params.topicId}
                        examId={e._id}
                      />
                    </h5>
                  </li>
                ))}
              </ul>
            ) : (
              <h5>-</h5>
            )}
            <NewExamBttn
              courseId={props.routeProps.match.params.courseId}
              topicId={topic._id}
            />
          </Col>
        </Row>
      </Container>
    </AdminLayout>
  ) : (
    <AdminSpinner />
  );
});

export default AdminTopicDetail;
