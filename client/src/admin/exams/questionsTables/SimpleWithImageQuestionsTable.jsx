import React from "react";
import { Table, Row, Col, Image } from "react-bootstrap";
import AdminDeleteExamBttn from "../components/AdminDeleteExamBttn";
import PropTypes from "prop-types";

export const SimpleWithImageQuestionsTable = React.memo(
  ({ questions, examId }) => {
    return (
      <Row>
        <Col>
          <h5>Preguntas sencillas con imagen{` (${questions.length})`}</h5>
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
                        <Image
                          src={q.qTechnicalInstruction.imageLink}
                          width="85"
                          height="85"
                          className="my-1 mx-3"
                        />
                      </td>
                      <td className="align-middle">
                        {String(
                          `${q.qCorrectAnswers[0].complementLeft} ${q.qCorrectAnswers[0].answer} ${q.qCorrectAnswers[0].complementRight}`
                        ).trim()}
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

SimpleWithImageQuestionsTable.propTypes = {
  questions: PropTypes.array.isRequired,
  examId: PropTypes.string.isRequired,
};
