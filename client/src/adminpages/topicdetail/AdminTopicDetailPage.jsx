import React, { useState, useEffect } from "react";
import { Badge, Col, Container, Row } from "react-bootstrap";
import TeacherAPI from "../../utils/TeacherAPI";
import {
  AdminPrimaryButton,
  AdminLayout,
  AdminModal,
  AdminSpinner,
  ImageFromFirebase,
} from "../components";
import {
  AddPDF,
  AddVideo,
  DraggableMaterial,
  TopicDescriptionForm,
  TopicFreestyleTimerForm,
  TopicNameForm,
  TopicRewardForm,
  TopicSubjectForm,
} from "./components";
import { useDispatch, useSelector } from "react-redux";
import * as adminActions from "../../redux/actions/admin";
import { firebaseStorage } from "../../firebase/firebase";

export const AdminTopicDetailPage = React.memo((props) => {
  const dispatch = useDispatch();

  const courseName = useSelector((state) => state.admin.course.courseName);

  const [topic, setTopic] = useState();

  const courseId = props.routeProps.match.params.courseId;
  const topicId = props.routeProps.match.params.topicId;

  useEffect(() => {
    if (!topic)
      TeacherAPI.t_fetchTopic(courseId, topicId)
        .then((res) => {
          const topicName = res.data.name;
          dispatch(adminActions.setTopic({ topicId, topicName }));
          dispatch(adminActions.setTitle(`${courseName} | ${topicName}`));
          setTopic(res.data);
        })
        .catch((err) => {
          console.log(err);
          alert("Ocurrió un error, vuelve a intentarlo.");
        });
  }, [courseId, courseName, dispatch, topic, topicId]);

  const handleDeleteMaterialItem = (materialType, materialId, materialLink) => {
    TeacherAPI.t_deleteMaterial({
      courseId,
      materialId,
      topicId,
    })
      .then(() => {
        if (materialType === "video") {
          alert("Borrado con éxito.");
          window.location.reload();
        }

        if (materialType === "pdf") {
          const storageRef = firebaseStorage.ref();
          const fileRef = storageRef.child(materialLink);

          fileRef
            .delete()
            .then(() => {
              alert("El artículo seleccionado ha sido eliminado con éxito.");
              window.location.reload();
            })
            .catch((err) => {
              console.log(err);
              alert("Ocurrió un error, vuelve a intentarlo.");
            });
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Ocurrió un error, vuelve a intentarlo.");
      });
  };

  return topic ? (
    <AdminLayout
      leftBarActive="Cursos"
      backBttn={`/admin/courses/edit/${courseId}`}
    >
      <Container fluid>
        {/* topic name */}
        <Row>
          <Col>
            <span className="text-muted">Nombre</span>
            <h1>
              {topic.name}
              <AdminModal
                Form={TopicNameForm}
                formInitialText={topic.name}
                formLabel="Nombre"
                icon={<i className="fas fa-pen-alt" />}
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
              <AdminModal
                Form={TopicSubjectForm}
                formInitialText={topic.subject}
                formLabel="Materia"
                icon={<i className="fas fa-pen-alt" />}
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
              <AdminModal
                Form={TopicDescriptionForm}
                formInitialText={topic.description}
                formLabel="Descripción"
                icon={<i className="fas fa-pen-alt" />}
              />
            </h5>
          </Col>
        </Row>
        {/* freestyle */}
        <Row>
          <Col>
            <span className="text-muted">Modo rápido</span>
            <h5>
              {`${topic.freestyle.timer} minutos`}
              <AdminModal
                Form={TopicFreestyleTimerForm}
                formInitialText={topic.freestyle.timer}
                formLabel="Modo rápido"
                icon={<i className="fas fa-pen-alt" />}
              />
            </h5>
          </Col>
        </Row>
        {/* reward */}
        <Row>
          <Col>
            <span className="text-muted">Recompensa</span>
            <div className="d-flex">
              <h5>
                {`Medalla de ${topic.name}`}
                <AdminModal
                  Form={TopicRewardForm}
                  formLabel="Medalla"
                  icon={<i className="fas fa-pen-alt" />}
                />
              </h5>
            </div>
            <ImageFromFirebase
              className="mb-3"
              height="100"
              path={topic.reward.link}
              width="70"
            />
          </Col>
        </Row>
        {/* material */}
        <Row>
          <Col>
            <span className="text-muted">Material</span>
            <DraggableMaterial
              {...{ courseId, handleDeleteMaterialItem, topicId }}
              material={topic.material
                .sort((a, b) => a.materialOrderNumber - b.materialOrderNumber)
                .map((m) => ({
                  _id: m._id,
                  id: m.materialOrderNumber,
                  link: m.link,
                  name: m.name,
                  type: m.type,
                }))}
            />
            <div className="mb-3">
              <AddVideo {...{ courseId, topicId }} />
              <AddPDF {...{ courseId, topicId }} />
            </div>
          </Col>
        </Row>
        {/* exams */}
        <Row>
          <Col>
            <span className="text-muted">Exámenes</span>
            <ul className="mb-1">
              {topic.exams
                .sort((a, b) => a.examOrderNumber - b.examOrderNumber)
                .map((e) => {
                  const path = `/admin/courses/edit/exam/${courseId}/${topicId}/${e._id}`;
                  const badgeText = `0/${e.qCounter}`;
                  const variant = "danger";
                  return (
                    <li key={e._id}>
                      <strong style={{ color: "#0f5257" }}>
                        <Badge variant={variant} className="mr-1">
                          {badgeText}
                        </Badge>
                        {e.name}
                        <AdminPrimaryButton
                          href={path}
                          icon={<i className="fas fa-arrow-alt-circle-right" />}
                        />
                      </strong>
                    </li>
                  );
                })}
            </ul>
          </Col>
        </Row>
      </Container>
    </AdminLayout>
  ) : (
    <AdminSpinner />
  );
});
