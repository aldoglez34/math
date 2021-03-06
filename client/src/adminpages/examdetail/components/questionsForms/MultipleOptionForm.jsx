import React from "react";
import { Button, Form, Col } from "react-bootstrap";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import TeacherAPI from "../../../../utils/TeacherAPI";
import { useSelector } from "react-redux";

export const MultipleOptionForm = () => {
  const yupschema = yup.object({
    qInstruction: yup.string().required("Requerido"),
    qTechnicalInstruction: yup.string(),
    qOption1: yup.string().required("Requerido"),
    qOption2: yup.string().required("Requerido"),
    qOption3: yup.string().required("Requerido"),
    qOption4: yup.string().required("Requerido"),
    qCorrectAnswer: yup.string().required("Requerido"),
    qComment: yup.string(),
  });

  const examId = useSelector((state) => state.admin.exam.examId);

  return (
    <Formik
      initialValues={{
        qInstruction: "",
        qTechnicalInstruction: "",
        qOption1: "",
        qOption2: "",
        qOption3: "",
        qOption4: "",
        qCorrectAnswer: "",
        qComment: "",
      }}
      validationSchema={yupschema}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);

        values.qInstruction = values.qInstruction.trim();
        values.qTechnicalInstruction = values.qTechnicalInstruction.trim();
        values.qOption1 = values.qOption1.trim();
        values.qOption2 = values.qOption2.trim();
        values.qOption3 = values.qOption3.trim();
        values.qOption4 = values.qOption4.trim();
        values.qCorrectAnswer = values.qCorrectAnswer.trim();
        values.qInstructiqCommenton = values.qComment.trim();

        values.examId = examId;

        const isAnswerIncludedInOptions = [
          String(values.qOption1),
          String(values.qOption2),
          String(values.qOption3),
          String(values.qOption4),
        ].includes(String(values.qCorrectAnswer));

        if (!isAnswerIncludedInOptions) {
          alert("La respuesta debe estar contenida en las opciones.");
          setSubmitting(false);
        } else {
          TeacherAPI.t_newMultipleOptionQuestion(values)
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
        }
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
                maxLength="500"
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
          {/* options 1 - 4 */}
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>
                Opción 1
                <strong className="text-danger" title="Requerido">
                  *
                </strong>
              </Form.Label>
              <Form.Control
                maxLength="25"
                type="text"
                name="qOption1"
                value={values.qOption1}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.qOption1 && !errors.qOption1}
                isInvalid={touched.qOption1 && !!errors.qOption1}
              />
              <ErrorMessage
                className="text-danger"
                name="qOption1"
                component="div"
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>
                Opción 2
                <strong className="text-danger" title="Requerido">
                  *
                </strong>
              </Form.Label>
              <Form.Control
                maxLength="25"
                type="text"
                name="qOption2"
                value={values.qOption2}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.qOption2 && !errors.qOption2}
                isInvalid={touched.qOption2 && !!errors.qOption2}
              />
              <ErrorMessage
                className="text-danger"
                name="qOption2"
                component="div"
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>
                Opción 3
                <strong className="text-danger" title="Requerido">
                  *
                </strong>
              </Form.Label>
              <Form.Control
                maxLength="25"
                type="text"
                name="qOption3"
                value={values.qOption3}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.qOption3 && !errors.qOption3}
                isInvalid={touched.qOption3 && !!errors.qOption3}
              />
              <ErrorMessage
                className="text-danger"
                name="qOption3"
                component="div"
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>
                Opción 4
                <strong className="text-danger" title="Requerido">
                  *
                </strong>
              </Form.Label>
              <Form.Control
                maxLength="25"
                type="text"
                name="qOption4"
                value={values.qOption4}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.qOption4 && !errors.qOption4}
                isInvalid={touched.qOption4 && !!errors.qOption4}
              />
              <ErrorMessage
                className="text-danger"
                name="qOption4"
                component="div"
              />
            </Form.Group>
          </Form.Row>
          {/* correct answer */}
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>
                Respuesta
                <strong className="text-danger" title="Requerido">
                  *
                </strong>
              </Form.Label>
              <Form.Control
                maxLength="25"
                type="text"
                name="qCorrectAnswer"
                value={values.qCorrectAnswer}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.qCorrectAnswer && !errors.qCorrectAnswer}
                isInvalid={touched.qCorrectAnswer && !!errors.qCorrectAnswer}
              />
              <ErrorMessage
                className="text-danger"
                name="qCorrectAnswer"
                component="div"
              />
            </Form.Group>
          </Form.Row>
          {/* qComment */}
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Comentario</Form.Label>
              <Form.Control
                maxLength="500"
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
};
