import React from "react";
import AdminLayout from "../../layout/AdminLayout";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import { Container, Row, Form, Button, Col, InputGroup } from "react-bootstrap";
import UploadImage from "./components/UploadImage";
import TeacherAPI from "../../../utils/TeacherAPI";

const AdminNewCrouse = React.memo((props) => {
  const PHOTO_SIZE = 1000000;
  const SUPPORTED_FORMATS = [
    "image/jpg",
    "image/jpeg",
    "image/gif",
    "image/png",
  ];

  const yupschema = yup.object({
    name: yup.string().min(3, "Nombre demasiado corto").required("Requerido"),
    subject: yup
      .string()
      .min(3, "Nombre demasiado corto")
      .required("Requerido"),
    description: yup.string().required("Requerido"),
    freestyleTimer: yup
      .number()
      .positive("El número debe ser mayor a 1")
      .required("Requerido"),
    rewardName: yup.string().required("Requerido"),
    file: yup
      .mixed()
      .required("Requerido")
      .test(
        "fileSize",
        "Imagen muy pesada",
        (value) => value && value.size <= PHOTO_SIZE
      )
      .test(
        "fileFormat",
        "Formato no soportado",
        (value) => value && SUPPORTED_FORMATS.includes(value.type)
      ),
  });

  return (
    <AdminLayout
      title="Nuevo Tema"
      leftBarActive="Cursos"
      backBttn={"/admin/courses/edit/" + props.routeProps.match.params.courseId}
    >
      <Container>
        <Row>
          <Col md={{ offset: 2, span: 8 }}>
            <h3 className="mt-4">Ingresa los datos del tema.</h3>
            <br />
            <Formik
              initialValues={{
                name: "",
                subject: "",
                description: "",
                freestyleTimer: "",
                rewardName: "",
                photo: undefined,
                file: undefined,
              }}
              validationSchema={yupschema}
              onSubmit={(values, { setSubmitting }) => {
                setSubmitting(true);
                // it's neccessary to create a FormData so multer can storage the image in the backend
                let topicData = new FormData();
                topicData.append("name", values.name);
                topicData.append("subject", values.subject);
                topicData.append("description", values.description);
                topicData.append("freestyleTimer", values.freestyleTimer);
                topicData.append("rewardName", values.rewardName);
                topicData.append("photo", values.photo);
                topicData.append("file", values.file);
                topicData.append(
                  "courseId",
                  props.routeProps.match.params.courseId
                );

                TeacherAPI.t_newTopic(topicData)
                  .then((res) => {
                    console.log(res.data);
                    alert("Tema agregado con éxito");
                    window.location.href =
                      "/admin/courses/edit/" +
                      props.routeProps.match.params.courseId;
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
                  {/* reward */}
                  <Form.Row className="mt-3">
                    <Col md={6}>
                      <Form.Label>
                        Nombre de medalla
                        <strong className="text-danger">*</strong>
                      </Form.Label>
                      <Form.Control
                        maxLength="150"
                        type="text"
                        name="rewardName"
                        value={values.rewardName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isValid={touched.rewardName && !errors.rewardName}
                        isInvalid={touched.rewardName && !!errors.rewardName}
                      />
                      <ErrorMessage
                        className="text-danger"
                        name="rewardName"
                        component="div"
                      />
                    </Col>
                    <Col md={6}>
                      <UploadImage
                        photo={values.photo}
                        setFieldValue={setFieldValue}
                        onBlur={handleBlur}
                        file={values.file}
                      />
                    </Col>
                  </Form.Row>
                  {/* freestyle timer */}
                  <Form.Row className="mt-3">
                    <Col md={4}>
                      <Form.Label>
                        Duración modo rápido
                        <strong className="text-danger">*</strong>
                      </Form.Label>
                      <InputGroup className="mb-3">
                        <Form.Control
                          type="number"
                          name="freestyleTimer"
                          value={values.freestyleTimer}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          isValid={
                            touched.freestyleTimer && !errors.freestyleTimer
                          }
                          isInvalid={
                            touched.freestyleTimer && !!errors.freestyleTimer
                          }
                        />
                        <InputGroup.Append>
                          <InputGroup.Text id="basic-addon2">
                            minutos
                          </InputGroup.Text>
                        </InputGroup.Append>
                      </InputGroup>
                      <ErrorMessage
                        className="text-danger"
                        name="freestyleTimer"
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
