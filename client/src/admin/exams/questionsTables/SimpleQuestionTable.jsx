import React from "react";
import { Table, Row, Col } from "react-bootstrap";
import AdminDeleteExamBttn from "../components/AdminDeleteExamBttn";
// import AdminEditQuestionBttn from "../components/AdminEditQuestionBttn";
import PropTypes from "prop-types";

export const SimpleQuestionTable = React.memo(({ questions, examId }) => {
  return (
    <Row>
      <Col>
        <h5>
          Preguntas sencillas{` (${questions.length})`}
        </h5>
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
                  I. Técnica
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
                      {q.qTechnicalInstruction
                        ? q.qTechnicalInstruction.text
                        : null}
                    </td>
                    <td className="align-middle">
                      {q.qCorrectAnswers[0].complement
                        ? q.qCorrectAnswers[0].placement === "left"
                          ? q.qCorrectAnswers[0].complement +
                            " " +
                            q.qCorrectAnswers[0].answer
                          : q.qCorrectAnswers[0].answer +
                            " " +
                            q.qCorrectAnswers[0].complement
                        : q.qCorrectAnswers[0].answer}
                    </td>
                    <td className="align-middle">{q.qComment}</td>
                    <td className="text-center align-middle">
                      {/* <AdminEditQuestionBttn
                        question={q}
                        questionId={q._id}
                        examId={examId}
                      /> */}
                      <AdminDeleteExamBttn examId={examId} questionId={q._id} />
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

SimpleQuestionTable.propTypes = {
  questions: PropTypes.array.isRequired,
  examId: PropTypes.string.isRequired,
};
