import React from "react";
import { Button, Form, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import TeacherAPI from "../../../../utils/TeacherAPI";

const TopicSubjectForm = React.memo(
  ({ formLabel, formInitialText, courseId, topicId }) => {
    const yupschema = yup.object({
      newSubject: yup.string().min(3, "Demasiado corto").required("Requerido"),
    });

    return (
      <Formik
        initialValues={{
          newSubject: formInitialText,
        }}
        validationSchema={yupschema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          values.courseId = courseId;
          values.topicId = topicId;
          TeacherAPI.t_updateTopicSubject(values)
            .then((res) => {
              console.log(res.data);
              alert("La materia del tema fue actualizada con éxito.");
              window.location.reload();
            })
            .catch((err) => {
              alert("Ocurrió un error.");
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
                <Form.Control
                  maxLength="40"
                  type="text"
                  name="newSubject"
                  value={values.newSubject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.newSubject && !errors.newSubject}
                  isInvalid={touched.newSubject && !!errors.newSubject}
                />
                <ErrorMessage
                  className="text-danger"
                  name="newSubject"
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

TopicSubjectForm.propTypes = {
  formLabel: PropTypes.string,
  formInitialText: PropTypes.string,
  courseId: PropTypes.string,
  topicId: PropTypes.string,
};

export default TopicSubjectForm;
