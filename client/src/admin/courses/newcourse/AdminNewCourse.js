import React from "react";
import AdminLayout from "../../layout/AdminLayout";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import { Container, InputGroup, Row, Form, Button, Col } from "react-bootstrap";
import TeacherAPI from "../../../utils/TeacherAPI";

const AdminNewCrouse = React.memo(() => {
  const yupschema = yup.object({
    name: yup.string().min(3, "Nombre demasiado corto").required("Requerido"),
    school: yup
      .string()
      .notOneOf(["Elige..."], "Requerido")
      .required("Requerido"),
    description: yup.string().required("Requerido"),
    summary: yup.string().required("Requerido"),
    price: yup
      .number()
      .positive("El número debe ser mayor a 1")
      .required("Requerido"),
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
            <h3 className="mt-4">Ingresa los datos del curso.</h3>
            <br />
            <Formik
              initialValues={{
                name: "",
                school: "",
                description: "",
                summary: "",
                price: "",
              }}
              validationSchema={yupschema}
              onSubmit={(values, { setSubmitting }) => {
                setSubmitting(true);
                TeacherAPI.t_newCourse(values)
                  .then((res) => {
                    console.log(res.data);
                    alert("Curso agregado con éxito");
                    window.location.href = "/admin/courses";
                  })
                  .catch((err) => {
                    console.log(err);
                    alert(
                      "Un curso con el mismo nombre ya existe, por favor modifica los datos y vuelve a crearlo"
                    );
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
                  {/* name and school */}
                  <Form.Row>
                    <Col md="7">
                      <Form.Label>
                        Nombre<strong className="text-danger">*</strong>
                      </Form.Label>
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
                      <Form.Label>
                        Nivel escolar<strong className="text-danger">*</strong>
                      </Form.Label>
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
                      <ErrorMessage
                        className="text-danger"
                        name="school"
                        component="div"
                      />
                    </Col>
                  </Form.Row>
                  {/* description */}
                  <Form.Row className="mt-3">
                    <Col>
                      <Form.Label>
                        Descripción<strong className="text-danger">*</strong>
                      </Form.Label>
                      <Form.Control
                        maxLength="250"
                        as="textarea"
                        rows="4"
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
                    </Col>
                  </Form.Row>
                  {/* topics summary */}
                  <Form.Row className="mt-3">
                    <Col>
                      <Form.Label className="mb-0">
                        Resumen de temas
                        <strong className="text-danger">*</strong>
                      </Form.Label>
                      <Form.Text className="text-muted mb-2">
                        Separados por coma
                      </Form.Text>
                      <Form.Control
                        placeholder="Ej. Fracciones, Porcentajes, Relaciones, etc."
                        maxLength="250"
                        type="text"
                        name="summary"
                        value={values.summary}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isValid={touched.summary && !errors.summary}
                        isInvalid={touched.summary && !!errors.summary}
                      />
                      <ErrorMessage
                        className="text-danger"
                        name="summary"
                        component="div"
                      />
                    </Col>
                  </Form.Row>
                  {/* price */}
                  <Form.Row className="mt-3">
                    <Col md={4}>
                      <Form.Label>
                        Precio
                        <strong className="text-danger">*</strong>
                      </Form.Label>
                      <InputGroup>
                        <InputGroup.Prepend>
                          <InputGroup.Text>$</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                          type="number"
                          placeholder="0.00"
                          name="price"
                          value={values.price}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          isValid={touched.price && !errors.price}
                          isInvalid={touched.price && !!errors.price}
                        />
                      </InputGroup>
                      <ErrorMessage
                        className="text-danger"
                        name="price"
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

export default AdminNewCrouse;
