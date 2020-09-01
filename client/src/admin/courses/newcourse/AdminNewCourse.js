import React from "react";
import AdminLayout from "../../layout/AdminLayout";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import { Container, Row, Form, Button, Col } from "react-bootstrap";

const AdminNewCrouse = React.memo((props) => {
  const yupschema = yup.object({
    name: yup.string().min(3, "Nombre demasiado corto").required("Requerido"),
  });

  return (
    <AdminLayout
      title="Nuevo Curso"
      leftBarActive="Cursos"
      backBttn="/admin/courses"
    >
      <Container>
        <Row>
          <Col md={{ offset: 2, span: 8 }}>
            <Formik
              initialValues={{
                name: "",
                productCount: "",
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
                  {/* name and school */}
                  <Form.Row>
                    <Col md="7">
                      <Form.Label>Nombre</Form.Label>
                      <Form.Control
                        maxLength="40"
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
                    <Col md="5">
                      <Form.Label>Nivel escolar</Form.Label>
                      <Form.Control
                        as="select"
                        type="text"
                        name="school"
                        defaultValue="Elige..."
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isValid={touched.school && !errors.school}
                        isInvalid={touched.school && !!errors.school}
                      >
                        <option disabled>Elige...</option>
                        <option value="Primaria">Primaria</option>
                        <option value="Secundaria">Secundaria</option>
                        <option value="Preparatoria">Preparatoria</option>
                        <option value="Universidad">Universidad</option>
                      </Form.Control>
                    </Col>
                  </Form.Row>
                  {/* buttons */}
                  <Form.Group className="mt-4">
                    <Button
                      variant="success"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      Guardar
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

export default AdminNewCrouse;
