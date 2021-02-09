import React from "react";
import { Col, Row, Table } from "react-bootstrap";
import { array } from "prop-types";
import { useSelector } from "react-redux";
import { AdminDangerButton, ImageFromFirebase } from "../../../components";
import TeacherAPI from "../../../../utils/TeacherAPI";
import { firebaseStorage } from "../../../../firebase/firebase";

export const MultipleOptionWithImageTable = React.memo(({ questions }) => {
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
            alert("La pregunta ha sido registrada con éxito.");
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
          Preguntas opción múltiple{` (${questions.length})`}
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
                  Opciones
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
                      {q.qMultipleChoice.textChoices.length
                        ? q.qMultipleChoice.textChoices.map((c, idx) => (
                            <React.Fragment key={idx}>
                              <span className="mb-0">{`${c}`}</span>
                              {q.qMultipleChoice.textChoices.length ===
                              idx + 1 ? null : (
                                <hr className="my-0" />
                              )}
                            </React.Fragment>
                          ))
                        : null}
                    </td>
                    <td className="align-middle">
                      {q.qCorrectAnswers[0].answer}
                    </td>
                    <td className="align-middle">{q.qComment}</td>
                    <td className="text-center align-middle">
                      <AdminDangerButton
                        icon={<i className="fas fa-times" />}
                        onClick={() =>
                          handleDeleteQuestion(
                            q._id,
                            q.qTechnicalInstruction.imageLink
                          )
                        }
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

MultipleOptionWithImageTable.propTypes = {
  questions: array.isRequired,
};
