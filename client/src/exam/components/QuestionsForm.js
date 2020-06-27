import React from "react";
import { Formik, ErrorMessage } from "formik";
import { Form, Button, Col } from "react-bootstrap";
import * as yup from "yup";
import PropTypes from "prop-types";

const QuestionsForm = React.memo(({ examName, questions }) => {
  const validationSchema = yup.object(
    questions.reduce((acc, cv) => {
      acc[cv._id] = yup.string().required("Requerido");
      return acc;
    }, {})
  );

  return (
    <Formik
      initialValues={questions.reduce((acc, cv) => {
        acc[cv._id] = "";
        return acc;
      }, {})}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
        alert("test");
        console.log("values", values);
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
          {/* title */}
          <h1 className="pb-4">{examName}</h1>
          {/* questions */}
          {questions.map((q) => (
            <Form.Row key={q._id}>
              <Form.Group as={Col}>
                {/* instruction */}
                <p className="lead">{q.qNumber + ". " + q.qInstruction}</p>
                {/* technical instruction */}
                {q.qTechnicalInstruction ? (
                  <p className="lead">{q.qTechnicalInstruction}</p>
                ) : null}
                <Form.Control
                  maxLength="10"
                  type="text"
                  name={q._id}
                  value={values[q.id]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched[q.id] && !errors[q.id]}
                  isInvalid={touched[q.id] && !!errors[q.id]}
                />
                <ErrorMessage
                  className="text-danger"
                  name={q._id}
                  component="div"
                />
              </Form.Group>
            </Form.Row>
          ))}
          <Button variant="primary" type="submit" disabled={isSubmitting}>
            Terminar
          </Button>
        </Form>
      )}
    </Formik>
  );
});

QuestionsForm.propTypes = {
  examName: PropTypes.string.isRequired,
  questions: PropTypes.array.isRequired,
};

export default QuestionsForm;
