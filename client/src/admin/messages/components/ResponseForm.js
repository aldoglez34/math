import React from "react";
import { Form, Button, Col } from "react-bootstrap";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";

const ResponseForm = React.memo(() => {
  const yupschema = yup.object({
    body: yup.string().required("Requerido"),
  });

  return (
    <>
      <h3 className="mt-3">Tu respuesta</h3>
      <Formik
        initialValues={{
          body: "",
        }}
        validationSchema={yupschema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          console.log(values);
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
            {/* body */}
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Control
                  maxLength="250"
                  type="text"
                  as="textarea"
                  rows="5"
                  name="body"
                  value={values.body}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.body && !errors.body}
                  isInvalid={touched.body && !!errors.body}
                />
                <ErrorMessage
                  className="text-danger"
                  name="body"
                  component="div"
                />
              </Form.Group>
            </Form.Row>
            {/* buttons */}
            <Form.Group>
              <Button
                variant="dark"
                type="submit"
                className="shadow-sm"
                disabled={isSubmitting}
              >
                Enviar
              </Button>
            </Form.Group>
          </Form>
        )}
      </Formik>
    </>
  );
});

export default ResponseForm;
