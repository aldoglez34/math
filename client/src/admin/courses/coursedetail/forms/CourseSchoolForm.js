import React from "react";
import { Button, Form, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import TeacherAPI from "../../../../utils/TeacherAPI";

const CourseSchoolForm = React.memo(
  ({ formLabel, formInitialText, courseId }) => {
    const yupschema = yup.object({
      newSchool: yup.string().required("Requerido"),
    });

    return (
      <Formik
        initialValues={{
          newSchool: formInitialText,
        }}
        validationSchema={yupschema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          values.courseId = courseId;
          TeacherAPI.t_updateCourseSchool(values)
            .then((res) => {
              console.log(res);
              alert(res.data);
              window.location.reload();
            })
            .catch((err) => {
              alert("Ocurrió un error. Vuelve a intentarlo más tarde.");
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
                  as="select"
                  type="text"
                  name="newSchool"
                  value={values.newSchool}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.newSchool && !errors.newSchool}
                  isInvalid={touched.newSchool && !!errors.newSchool}
                >
                  <option value="Primaria">Primaria</option>
                  <option value="Secundaria">Secundaria</option>
                  <option value="Preparatoria">Preparatoria</option>
                  <option value="Universidad">Universidad</option>
                </Form.Control>
                <ErrorMessage
                  className="text-danger"
                  name="newSchool"
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

CourseSchoolForm.propTypes = {
  formLabel: PropTypes.string,
  formInitialText: PropTypes.string,
};

export default CourseSchoolForm;