import React from "react";
import { Table, Row, Col } from "react-bootstrap";
import { array } from "prop-types";
import { useSelector } from "react-redux";
import { AdminDangerModal, ImageFromFirebase } from "../../../components";
import TeacherAPI from "../../../../utils/TeacherAPI";
import { firebaseStorage } from "../../../../firebase/firebase";

export const SimpleWithImageQuestionsTable = React.memo(({ questions }) => {
  const courseId = useSelector((state) => state.admin.course.courseId);
  const examId = useSelector((state) => state.admin.exam.examId);

  const handleDeleteQuestion = (questionId, path) => {
    TeacherAPI.t_deleteQuestion({ courseId, examId, questionId })
      .then(() => {
        const storageRef = firebaseStorage.ref();
        const fileRef = storageRef.child(path);

        fileRef
          .delete()
          .then(() => {
            alert("La pregunta ha sido borrada con éxito.");
            window.location.reload();
          })
          .catch((error) => {
            console.log(error);
            alert("Ocurrió un error al borrar la pregunta.");
          });
      })
      .catch((err) => {
        console.log(err);
        alert("Ocurrió un error, vuelve a intentarlo.");
      });
  };

  return (
    <Row>
      <Col>
        <h4 className="my-3">
          Preguntas sencillas con imagen{` (${questions.length})`}
        </h4>
        <div className="mt-2 d-flex flex-column">
          <Table bordered striped size="sm">
            <thead>
              <tr>
                <th
                  style={{ backgroundColor: "#0f5257" }}
                  className="text-light text-center"
                >
                  Instrucción
                </th>
                <th
                  style={{ backgroundColor: "#0f5257" }}
                  className="text-light text-center"
                >
                  Imagen
                </th>
                <th
                  style={{ backgroundColor: "#0f5257" }}
                  className="text-light text-center"
                >
                  Respuesta
                </th>
                <th
                  style={{ backgroundColor: "#0f5257" }}
                  className="text-light text-center"
                >
                  Comentario
                </th>
                <th
                  style={{ backgroundColor: "#0f5257" }}
                  className="text-light text-center"
                ></th>
              </tr>
            </thead>
            <tbody>
              {questions.map((q) => {
                return (
                  <tr key={q._id}>
                    <td className="align-middle">{q.qInstruction}</td>
                    <td className="align-middle">
                      <ImageFromFirebase
                        className="mb-3"
                        height="85"
                        path={q.qTechnicalInstruction.imageLink}
                        width="85"
                      />
                    </td>
                    <td className="align-middle">
                      {String(
                        `${q.qCorrectAnswers[0].complementLeft} ${q.qCorrectAnswers[0].answer} ${q.qCorrectAnswers[0].complementRight}`
                      ).trim()}
                    </td>
                    <td className="align-middle">{q.qComment}</td>
                    <td className="text-center align-middle">
                      <AdminDangerModal
                        deleteFn={() =>
                          handleDeleteQuestion(
                            q._id,
                            q.qTechnicalInstruction.imageLink
                          )
                        }
                        icon={<i className="fas fa-times" />}
                        modalText={`¿Estás seguro que deseas borrar esta pregunta?`}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </Col>
    </Row>
  );
});

SimpleWithImageQuestionsTable.propTypes = {
  questions: array.isRequired,
};
