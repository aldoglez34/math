import React from "react";
import { Table, Row, Col } from "react-bootstrap";
import AdminDeleteExamBttn from "../components/AdminDeleteExamBttn";
import PropTypes from "prop-types";

export const SimpleWithTwoAnswersTable = React.memo(({ questions, examId }) => {
  return (
    <Row>
      <Col>
        <h5>
          Preguntas sencillas con dos respuestas{` (${questions.length})`}
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
                  Respuestas
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
                      {q.qCorrectAnswers.map((qa, idx) => {
                        return (
                          <React.Fragment key={qa._id}>
                            <span>
                              {String(
                                `${qa.complementLeft} ${qa.answer} ${qa.complementRight}`
                              ).trim()}
                            </span>
                            {q.qCorrectAnswers.length === idx + 1 ? null : (
                              <hr className="my-0" />
                            )}
                          </React.Fragment>
                        );
                      })}
                    </td>
                    <td className="align-middle">{q.qComment}</td>
                    <td className="text-center align-middle">
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

SimpleWithTwoAnswersTable.propTypes = {
  questions: PropTypes.array.isRequired,
  examId: PropTypes.string.isRequired,
};