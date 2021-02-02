import React from "react";
import { Button, Form, Col, InputGroup } from "react-bootstrap";
import { number, string } from "prop-types";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import TeacherAPI from "../../../utils/TeacherAPI";

export const CoursePriceForm = React.memo(
  ({ formLabel, formInitialText, courseId }) => {
    const yupschema = yup.object({
      newPrice: yup
        .number()
        .positive("¿Por qué negativo?")
        .required("Requerido"),
    });

    return (
      <Formik
        initialValues={{
          newPrice: formInitialText,
        }}
        validationSchema={yupschema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          values.courseId = courseId;
          TeacherAPI.t_updateCoursePrice(values)
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
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>$</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    type="number"
                    name="newPrice"
                    value={values.newPrice}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.newPrice && !errors.newPrice}
                    isInvalid={touched.newPrice && !!errors.newPrice}
                  />
                </InputGroup>
                <ErrorMessage
                  className="text-danger"
                  name="newPrice"
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

CoursePriceForm.propTypes = {
  formLabel: string,
  formInitialText: number,
};
