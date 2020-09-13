import React from "react";
import { Form, Col, Button } from "react-bootstrap";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";

const ContactForm = () => {
  const yupschema = yup.object({
    user: yup.string().required("Requerido"),
    email: yup.string().email("Formato inválido").required("Requerido"),
    subject: yup.string().required("Requerido"),
    body: yup.string().required("Requerido"),
  });

  return (
    <Formik
      initialValues={{
        user: "",
        email: "",
        subject: "",
        body: "",
      }}
      validationSchema={yupschema}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
        values.type = "Guest";
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
          {/* user */}
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                maxLength="80"
                type="text"
                name="user"
                value={values.user}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.user && !errors.user}
                isInvalid={touched.name && !!errors.user}
              />
              <ErrorMessage
                className="text-danger"
                name="user"
                component="div"
              />
            </Form.Group>
          </Form.Row>
          {/* email */}
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Correo</Form.Label>
              <Form.Control
                maxLength="80"
                type="text"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.email && !errors.email}
                isInvalid={touched.email && !!errors.email}
              />
              <ErrorMessage
                className="text-danger"
                name="email"
                component="div"
              />
            </Form.Group>
          </Form.Row>
          {/* subject */}
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Asunto</Form.Label>
              <Form.Control
                maxLength="80"
                type="text"
                name="subject"
                value={values.subject}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.subject && !errors.subject}
                isInvalid={touched.subject && !!errors.subject}
              />
              <ErrorMessage
                className="text-danger"
                name="subject"
                component="div"
              />
            </Form.Group>
          </Form.Row>
          {/* cuerpo */}
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Mensaje</Form.Label>
              <Form.Control
                maxLength="250"
                as="textarea"
                rows="3"
                type="text"
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
              type="submit"
              disabled={isSubmitting}
              className="sendBttnContactForm"
            >
              Enviar
            </Button>
          </Form.Group>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
