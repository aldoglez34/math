import React from "react";
import { Button, Form, Col, InputGroup } from "react-bootstrap";
import PropTypes from "prop-types";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import TeacherAPI from "../../../utils/TeacherAPI";

const ExamQCounterForm = React.memo(
  ({ formLabel, formInitialText, examId }) => {
    const yupschema = yup.object({
      newQCounter: yup
        .number()
        .positive("El número debe ser mayor a 1")
        .required("Requerido"),
    });

    return (
      <Formik
        initialValues={{
          newQCounter: formInitialText,
        }}
        validationSchema={yupschema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          values.examId = examId;
          //
          TeacherAPI.t_updateExamQCounter(values)
            .then((res) => {
              console.log(res.data);
              alert("Las preguntas del examen fueron actualizadas con éxito.");
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
            {/* name */}
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>{formLabel}</Form.Label>
                <InputGroup className="mb-3">
                  <Form.Control
                    type="number"
                    name="newQCounter"
                    value={values.newQCounter}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.newQCounter && !errors.newQCounter}
                    isInvalid={touched.newQCounter && !!errors.newQCounter}
                  />
                  <InputGroup.Append>
                    <InputGroup.Text id="basic-addon2">preguntas</InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>
                <ErrorMessage
                  className="text-danger"
                  name="newQCounter"
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
  }
);

ExamQCounterForm.propTypes = {
  formLabel: PropTypes.string,
  formInitialText: PropTypes.number,
  courseId: PropTypes.string,
  topicId: PropTypes.string,
};

export default ExamQCounterForm;
