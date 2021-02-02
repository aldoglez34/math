import React from "react";
import { Button, Form, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import TeacherAPI from "../../../../utils/TeacherAPI";

export const SimpleWithTwoAnswersForm = React.memo(({ examId }) => {
  const yupschema = yup.object({
    qInstruction: yup.string().required("Requerido"),
    qTechnicalInstruction: yup.string(),
    qCorrectAnswer1: yup.string().required("Requerido"),
    qCorrectAnswer2: yup.string().required("Requerido"),
    qCALeft1: yup.string(),
    qCALeft2: yup.string(),
    qCARight1: yup.string(),
    qCARight2: yup.string(),
    qComment: yup.string(),
  });

  return (
    <Formik
      initialValues={{
        qInstruction: "",
        qTechnicalInstruction: "",
        qCorrectAnswer1: "",
        qCALeft1: "",
        qCARight1: "",
        qCorrectAnswer2: "",
        qCALeft2: "",
        qCARight2: "",
        qComment: "",
      }}
      validationSchema={yupschema}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
        values.qInstruction = values.qInstruction.trim();
        values.qTechnicalInstruction = values.qTechnicalInstruction.trim();
        values.qCorrectAnswer1 = values.qCorrectAnswer1.trim();
        values.qCARight1 = values.qCALeft1.trim();
        values.qCARight1 = values.qCARight1.trim();
        values.qCorrectAnswer2 = values.qCorrectAnswer2.trim();
        values.qCALeft2 = values.qCALeft2.trim();
        values.qCARight2 = values.qCARight2.trim();
        values.qComment = values.qComment.trim();

        values.examId = examId;
        //
        TeacherAPI.t_newSimpleWithTwoAnswersQuestion(values)
          .then((res) => {
            console.log(res.data);
            alert("La pregunta ha sido registrada con éxito.");
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
                isInvalid={touched.qInstruction && !!errors.qInstruction}
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
                  touched.qTechnicalInstruction && !errors.qTechnicalInstruction
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
          {/* answer 1 */}
          <h5 className="text-dark">Respuesta 1</h5>
          <Form.Row className="mb-3">
            <Col md={4}>
              <Form.Label>Complemento izquierda</Form.Label>
              <Form.Control
                maxLength="25"
                type="text"
                name="qCALeft1"
                value={values.qCALeft1}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.qCALeft1 && !errors.qCALeft1}
                isInvalid={touched.qCALeft1 && !!errors.qCALeft1}
              />
              <ErrorMessage
                className="text-danger"
                name="qCALeft1"
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
                name="qCorrectAnswer1"
                value={values.qCorrectAnswer1}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.qCorrectAnswer1 && !errors.qCorrectAnswer1}
                isInvalid={touched.qCorrectAnswer1 && !!errors.qCorrectAnswer1}
              />
              <ErrorMessage
                className="text-danger"
                name="qCorrectAnswer1"
                component="div"
              />
            </Col>
            <Col md={4}>
              <Form.Label>Complemento derecha</Form.Label>
              <Form.Control
                maxLength="25"
                type="text"
                name="qCARight1"
                value={values.qCARight1}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.qCARight1 && !errors.qCARight1}
                isInvalid={touched.qCARight1 && !!errors.qCARight1}
              />
              <ErrorMessage
                className="text-danger"
                name="qCARight1"
                component="div"
              />
            </Col>
          </Form.Row>
          {/* answer 2 */}
          <h5 className="text-dark">Respuesta 2</h5>
          <Form.Row className="mb-3">
            <Col md={4}>
              <Form.Label>Complemento izquierda</Form.Label>
              <Form.Control
                maxLength="25"
                type="text"
                name="qCALeft2"
                value={values.qCALeft2}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.qCALeft2 && !errors.qCALeft2}
                isInvalid={touched.qCALeft2 && !!errors.qCALeft2}
              />
              <ErrorMessage
                className="text-danger"
                name="qCALeft2"
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
                name="qCorrectAnswer2"
                value={values.qCorrectAnswer2}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.qCorrectAnswer2 && !errors.qCorrectAnswer2}
                isInvalid={touched.qCorrectAnswer2 && !!errors.qCorrectAnswer2}
              />
              <ErrorMessage
                className="text-danger"
                name="qCorrectAnswer2"
                component="div"
              />
            </Col>
            <Col md={4}>
              <Form.Label>Complemento derecha</Form.Label>
              <Form.Control
                maxLength="25"
                type="text"
                name="qCARight2"
                value={values.qCARight2}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.qCARight2 && !errors.qCARight2}
                isInvalid={touched.qCARight2 && !!errors.qCARight2}
              />
              <ErrorMessage
                className="text-danger"
                name="qCARight2"
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
            <Button variant="dark" type="submit" disabled={isSubmitting}>
              Guardar
            </Button>
          </Form.Group>
        </Form>
      )}
    </Formik>
  );
});

SimpleWithTwoAnswersForm.propTypes = {
  examId: PropTypes.string.isRequired,
};
