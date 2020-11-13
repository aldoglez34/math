import React, { useState } from "react";
import { Modal, Button, Form, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import TeacherAPI from "../../../utils/TeacherAPI";

const AdminEditQuestionBttn = React.memo(({ questionId, question, examId }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const yupschema = yup.object({
    qInstruction: yup.string().required("Requerido"),
    qTechnicalInstruction: yup.string(),
    qCorrectAnswers: yup.string().required("Requerido"),
    qCALeft: yup.string(),
    qCARight: yup.string(),
    qComment: yup.string(),
  });

  return (
    <>
      <Button
        size="sm"
        className="editButton ml-2"
        onClick={handleShow}
        title="Editar"
      >
        <i className="fas fa-pen-alt" />
      </Button>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Body className="bg-light rounded">
          <div className="d-flex">
            <h3 className="mb-0 text-dark">Editar</h3>
            <Button
              variant="link"
              className="text-dark ml-auto"
              onClick={handleClose}
            >
              <i className="fas fa-times" />
            </Button>
          </div>
          <div className="my-3">
            <Formik
              initialValues={{
                qInstruction: question.qInstruction,
                qTechnicalInstruction: question.qTechnicalInstruction
                  ? question.qTechnicalInstruction.text
                  : "",
                qCorrectAnswers: question.qCorrectAnswers[0].answer,
                qCALeft:
                  question.qCorrectAnswers[0].placement === "left"
                    ? question.qCorrectAnswers[0].complement
                    : "",
                qCARight:
                  question.qCorrectAnswers[0].placement === "right"
                    ? question.qCorrectAnswers[0].complement
                    : "",
                qComment: question.qComment,
              }}
              validationSchema={yupschema}
              onSubmit={(values, { setSubmitting }) => {
                setSubmitting(true);
                //
                TeacherAPI.t_updateQuestion({
                  examId,
                  questionId,
                  question: values,
                })
                  .then((res) => {
                    console.log(res.data);
                    alert("La pregunta ha sido cambiada con éxito.");
                    window.location.reload();
                  })
                  .catch((err) => {
                    alert("Ocurrió un error. Vuelve a intentarlo.");
                    setSubmitting(false);
                    console.log(err);
                  });
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <Form noValidate onSubmit={handleSubmit}>
                  {/* qInstruction */}
                  <Form.Row>
                    <Form.Group as={Col}>
                      <Form.Label>
                        Instrucción
                        <strong className="text-danger" title="Requerido">
                          *
                        </strong>
                      </Form.Label>
                      <Form.Control
                        maxLength="250"
                        type="text"
                        as="textarea"
                        rows="1"
                        name="qInstruction"
                        value={values.qInstruction}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isValid={touched.qInstruction && !errors.qInstruction}
                        isInvalid={
                          touched.qInstruction && !!errors.qInstruction
                        }
                      />
                      <ErrorMessage
                        className="text-danger"
                        name="qInstruction"
                        component="div"
                      />
                    </Form.Group>
                  </Form.Row>
                  {/* qTechnicalInstruction */}
                  <Form.Row>
                    <Form.Group as={Col}>
                      <Form.Label>Instrucción técnica</Form.Label>
                      <Form.Control
                        maxLength="250"
                        type="text"
                        as="textarea"
                        rows="1"
                        name="qTechnicalInstruction"
                        value={values.qTechnicalInstruction}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isValid={
                          touched.qTechnicalInstruction &&
                          !errors.qTechnicalInstruction
                        }
                        isInvalid={
                          touched.qTechnicalInstruction &&
                          !!errors.qTechnicalInstruction
                        }
                      />
                      <ErrorMessage
                        className="text-danger"
                        name="qTechnicalInstruction"
                        component="div"
                      />
                    </Form.Group>
                  </Form.Row>
                  {/* answers */}
                  <Form.Row>
                    <Col md={4}>
                      <Form.Label>Complemento izquierda</Form.Label>
                      <Form.Control
                        maxLength="25"
                        type="text"
                        name="qCALeft"
                        value={values.qCALeft}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isValid={touched.qCALeft && !errors.qCALeft}
                        isInvalid={touched.qCALeft && !!errors.qCALeft}
                      />
                      <ErrorMessage
                        className="text-danger"
                        name="qCALeft"
                        component="div"
                      />
                    </Col>
                    <Col md={4}>
                      <Form.Label>
                        Respuesta
                        <strong className="text-danger" title="Requerido">
                          *
                        </strong>
                      </Form.Label>
                      <Form.Control
                        maxLength="250"
                        type="text"
                        name="qCorrectAnswers"
                        value={values.qCorrectAnswers}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isValid={
                          touched.qCorrectAnswers && !errors.qCorrectAnswers
                        }
                        isInvalid={
                          touched.qCorrectAnswers && !!errors.qCorrectAnswers
                        }
                      />
                      <ErrorMessage
                        className="text-danger"
                        name="qCorrectAnswers"
                        component="div"
                      />
                    </Col>
                    <Col md={4}>
                      <Form.Label>Complemento derecha</Form.Label>
                      <Form.Control
                        maxLength="25"
                        type="text"
                        name="qCARight"
                        value={values.qCARight}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isValid={touched.qCARight && !errors.qCARight}
                        isInvalid={touched.qCARight && !!errors.qCARight}
                      />
                      <ErrorMessage
                        className="text-danger"
                        name="qCARight"
                        component="div"
                      />
                    </Col>
                  </Form.Row>
                  {/* qComment */}
                  <Form.Row>
                    <Form.Group as={Col}>
                      <Form.Label>Comentario</Form.Label>
                      <Form.Control
                        maxLength="250"
                        type="text"
                        as="textarea"
                        rows="1"
                        name="qComment"
                        value={values.qComment}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isValid={touched.qComment && !errors.qComment}
                        isInvalid={touched.qComment && !!errors.qComment}
                      />
                      <ErrorMessage
                        className="text-danger"
                        name="qComment"
                        component="div"
                      />
                    </Form.Group>
                  </Form.Row>
                  {/* buttons */}
                  <Form.Group className="text-right">
                    <Button
                      variant="dark"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      Guardar
                    </Button>
                  </Form.Group>
                </Form>
              )}
            </Formik>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
});

AdminEditQuestionBttn.propTypes = {
  examId: PropTypes.string.isRequired,
  questionId: PropTypes.string.isRequired,
};

export default AdminEditQuestionBttn;
