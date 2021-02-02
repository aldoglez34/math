import React from "react";
import { Table, Row, Col } from "react-bootstrap";
import { AdminDeleteExamBttn } from "../";
import { array, string } from "prop-types";

export const SimpleQuestionTable = React.memo(
  ({ courseId, questions, examId }) => {
    return (
      <Row>
        <Col>
          <h4 className="my-3">
            Preguntas sencillas{` (${questions.length})`}
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
                        {String(
                          `${q.qCorrectAnswers[0].complementLeft} ${q.qCorrectAnswers[0].answer} ${q.qCorrectAnswers[0].complementRight}`
                        ).trim()}
                      </td>
                      <td className="align-middle">{q.qComment}</td>
                      <td className="text-center align-middle">
                        <AdminDeleteExamBttn
                          courseId={courseId}
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

SimpleQuestionTable.propTypes = {
  courseId: string.isRequired,
  examId: string.isRequired,
  questions: array.isRequired,
};
