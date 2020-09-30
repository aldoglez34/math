import React from "react";
import AdminLayout from "../../layout/AdminLayout";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import { Container, Row, Form, Button, Col } from "react-bootstrap";

const AdminNewExam = React.memo((props) => {
  const yupschema = yup.object({
    name: yup.string().min(3, "Nombre demasiado corto").required("Requerido"),
  });

  return (
    <AdminLayout
      title="Nuevo Examen"
      leftBarActive="Cursos"
      backBttn={`/admin/courses/edit/topics/${props.routeProps.match.params.courseId}/${props.routeProps.match.params.topicId}`}
    >
      <Container>
        <Row>
          <Col md={{ offset: 2, span: 8 }}>
            <h3 className="mb-3">Ingresa los datos del examen.</h3>
            <Formik
              initialValues={{
                name: "",
              }}
              validationSchema={yupschema}
              onSubmit={(values, { setSubmitting }) => {
                setSubmitting(true);
                console.log(values);
                //
                // TeacherAPI.t_newTopic(topicData)
                //   .then((res) => {
                //     console.log(res.data);
                //     alert("Tema agregado con éxito");
                //     window.location.href =
                //       "/admin/courses/edit/" +
                //       props.routeProps.match.params.courseId;
                //   })
                //   .catch((err) => {
                //     console.log(err);
                //     alert("Ocurrió un error.");
                //     setSubmitting(false);
                //   });
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
                setFieldValue,
              }) => (
                <Form noValidate onSubmit={handleSubmit}>
                  {/* name */}
                  <Form.Row>
                    <Col md={6}>
                      <Form.Label>
                        Nombre
                        <strong className="text-danger">*</strong>
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
                    <Col md={6}>
                      <Form.Label>
                        Materia
                        <strong className="text-danger">*</strong>
                      </Form.Label>
                      <Form.Control
                        maxLength="50"
                        type="text"
                        placeholder="Ej. Aritmética, Álgebra, Cálculo, etc."
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
                    </Col>
                  </Form.Row>
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

export default AdminNewExam;
