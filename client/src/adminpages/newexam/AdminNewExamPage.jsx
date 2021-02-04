import React from "react";
import { AdminLayout } from "../components";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import TeacherAPI from "../../utils/TeacherAPI";

export const AdminNewExamPage = React.memo((props) => {
  const yupschema = yup.object({
    name: yup.string().required("Requerido"),
    description: yup.string().required("Requerido"),
    duration: yup
      .number()
      .positive("El número debe ser mayor a 1")
      .required("Requerido"),
    qCounter: yup
      .number()
      .positive("El número debe ser mayor a 1")
      .required("Requerido"),
  });

  const topicId = props.routeProps.match.params.topicId;
  const courseId = props.routeProps.match.params.courseId;
  const difficulty = props.routeProps.match.params.difficulty;

  return (
    <AdminLayout
      title="Nuevo Examen"
      leftBarActive="Cursos"
      backBttn={`/admin/courses/edit/topics/${courseId}/${topicId}`}
    >
      <Container>
        <Row>
          <Col md={{ offset: 2, span: 8 }}>
            <h3 className="mb-1">Ingresa los datos del examen.</h3>
            <strong>[{difficulty}]</strong>
            <br />
            <br />
            <Formik
              initialValues={{
                name: "",
                duration: "",
                description: "",
                qCounter: "",
              }}
              validationSchema={yupschema}
              onSubmit={(values, { setSubmitting }) => {
                setSubmitting(true);
                values.courseId = courseId;
                values.topicId = topicId;
                values.difficulty = difficulty;
                values.examOrderNumber =
                  values.difficulty === "Basic"
                    ? 1
                    : values.difficulty === "Basic-Intermediate"
                    ? 2
                    : values.difficulty === "Intermediate"
                    ? 3
                    : values.difficulty === "Intermediate-Advanced"
                    ? 4
                    : values.difficulty === "Advanced"
                    ? 5
                    : 0;

                TeacherAPI.t_newExam(values)
                  .then((res) => {
                    const newExamId = res.data;
                    alert("Examen agregado con éxito.");
                    window.location.href = `/admin/courses/edit/exam/${courseId}/${topicId}/${newExamId}`;
                  })
                  .catch((err) => {
                    console.log(err);
                    alert("Ocurrió un error.");
                    setSubmitting(false);
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
                    <Col>
                      <Form.Label>
                        Nombre
                        <strong className="text-danger" title="Requerido">
                          *
                        </strong>
                      </Form.Label>
                      <Form.Control
                        maxLength="50"
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isValid={touched.name && !errors.name}
                        isInvalid={touched.name && !!errors.name}
                      />
                      <ErrorMessage
                        className="text-danger"
                        name="name"
                        component="div"
                      />
                    </Col>
                  </Form.Row>
                  {/* question counter */}
                  <Form.Row className="mt-3">
                    <Col md={6}>
                      <Form.Label>
                        Cantidad de preguntas
                        <strong className="text-danger" title="Requerido">
                          *
                        </strong>
                      </Form.Label>
                      <InputGroup>
                        <Form.Control
                          maxLength="50"
                          type="number"
                          name="qCounter"
                          value={values.qCounter}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          isValid={touched.qCounter && !errors.qCounter}
                          isInvalid={touched.qCounter && !!errors.qCounter}
                        />
                        <InputGroup.Append>
                          <InputGroup.Text id="basic-addon2">
                            preguntas
                          </InputGroup.Text>
                        </InputGroup.Append>
                      </InputGroup>
                      <ErrorMessage
                        className="text-danger"
                        name="qCounter"
                        component="div"
                      />
                    </Col>
                    <Col md={6}>
                      <Form.Label>
                        Duración
                        <strong className="text-danger" title="Requerido">
                          *
                        </strong>
                      </Form.Label>
                      <InputGroup>
                        <Form.Control
                          maxLength="50"
                          type="number"
                          name="duration"
                          value={values.duration}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          isValid={touched.duration && !errors.duration}
                          isInvalid={touched.duration && !!errors.duration}
                        />
                        <InputGroup.Append>
                          <InputGroup.Text id="basic-addon2">
                            minutos
                          </InputGroup.Text>
                        </InputGroup.Append>
                      </InputGroup>
                      <ErrorMessage
                        className="text-danger"
                        name="duration"
                        component="div"
                      />
                    </Col>
                  </Form.Row>
                  {/* description */}
                  <Form.Group className="mt-3">
                    <Form.Label>
                      Descripción
                      <strong className="text-danger" title="Requerido">
                        *
                      </strong>
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows="3"
                      maxLength="250"
                      type="text"
                      name="description"
                      value={values.description}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.description && !errors.description}
                      isInvalid={touched.description && !!errors.description}
                    />
                    <ErrorMessage
                      className="text-danger"
                      name="description"
                      component="div"
                    />
                  </Form.Group>
                  {/* buttons */}
                  <Form.Group className="mt-4">
                    <Button
                      variant="dark"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      Crear
                    </Button>
                  </Form.Group>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </Container>
    </AdminLayout>
  );
});
