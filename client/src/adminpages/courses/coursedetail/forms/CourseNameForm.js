import React from "react";
import { Button, Form, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import TeacherAPI from "../../../../utils/TeacherAPI";

const CourseNameForm = React.memo(
  ({ formLabel, formInitialText, courseId }) => {
    const yupschema = yup.object({
      newName: yup
        .string()
        .min(3, "Nombre demasiado corto")
        .required("Requerido"),
    });

    return (
      <Formik
        initialValues={{
          newName: formInitialText,
        }}
        validationSchema={yupschema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          values.courseId = courseId;
          TeacherAPI.t_updateCourseName(values)
            .then((res) => {
              console.log(res);
              alert(res.data);
              window.location.reload();
            })
            .catch((err) => {
              alert(
                "Ocurrió un error. Asegúrate que no exista un curso con este nombre y vuelve a intentarlo."
              );
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
                  name="newName"
                  value={values.newName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.newName && !errors.newName}
                  isInvalid={touched.newName && !!errors.newName}
                />
                <ErrorMessage
                  className="text-danger"
                  name="newName"
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

CourseNameForm.propTypes = {
  formLabel: PropTypes.string,
  formInitialText: PropTypes.string,
};

export default CourseNameForm;
