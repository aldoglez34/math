import React from "react";
import { Table, Row, Col, Image } from "react-bootstrap";
import AdminDeleteExamBttn from "../components/AdminDeleteExamBttn";
import PropTypes from "prop-types";

export const MultipleOptionWithImageTable = React.memo(
  ({ questions, examId }) => {
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
                        <Image
                          src={q.qTechnicalInstruction.imageLink}
                          width="85"
                          height="85"
                          className="my-1 mx-3"
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
                        <AdminDeleteExamBttn
                          examId={examId}
                          questionId={q._id}
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
  }
);

MultipleOptionWithImageTable.propTypes = {
  questions: PropTypes.array.isRequired,
  examId: PropTypes.string.isRequired,
};
