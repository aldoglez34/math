import React, { useEffect } from "react";
import AdminLayout from "../../layout/AdminLayout";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import { Container, Row, Form, Button, Col, InputGroup } from "react-bootstrap";
import UploadImage from "./components/UploadImage";
import TeacherAPI from "../../../utils/TeacherAPI";
import { useDispatch, useSelector } from "react-redux";
import * as adminActions from "../../../redux/actions/admin";
import { firebaseStorage } from "../../../firebase/firebase";

const AdminNewCrouse = React.memo((props) => {
  const dispatch = useDispatch();

  const courseName = useSelector((state) => state.admin.course.courseName);
  const courseId = props.routeProps.match.params.courseId;

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
      .notOneOf(["Elige..."], "Requerido")
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

  useEffect(() => {
    dispatch(adminActions.setTitle(courseName));
  }, []);

  return (
    <AdminLayout
      leftBarActive="Cursos"
      backBttn={"/admin/courses/edit/" + courseId}
    >
      <Container>
        <Row>
          <Col md={{ offset: 2, span: 8 }}>
            <h3 className="mb-3">Ingresa los datos del tema.</h3>
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

                console.log("photo", values.photo);
                console.log("file", values.file);

                // var ref = firebaseStorage.ref();
                // var storage = firebase.storage();
                var pathReference = firebaseStorage.ref(
                  `images/${vaues.photo}`
                );

                pathReference.getDownloadURL().then((url) => {
                  ref.push().set({
                    imgurl: url,
                  });
                });

                // TeacherAPI.t_newTopic({ ...values, courseId })
                //   .then((res) => {
                //     const { topicId } = res.data;

                //     const pathOnFirebaseStorage = `${courseId}/${topicId}/rewards`;

                //     console.log({ pathOnFirebaseStorage });

                //     // const fileName = "courseMedal";
                //     // const directory = `${courseId}/`;
                //     // const storage = firebase
                //     //   .storage()
                //     //   .ref(`images/${newDirectory}/${fileName}`);

                //     // if (file !== undefined && file.type === "image/png") {
                //     //   storage
                //     //     .put(file)
                //     //     .then((d) => console.log("you did it"))
                //     //     .catch((d) => console.log("do something"));
                //     // }

                //     alert("Tema agregado con éxito");

                //     const route = `/admin/courses/edit/topics/${courseId}/${topicId}`;
                //     window.location.href = route;
                //   })
                //   .catch((err) => {
                //     if (err.response && err.response.data) {
                //       alert(err.response.data);
                //     } else {
                //       alert("Ocurrió un error en el servidor");
                //     }
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
                        as="select"
                        type="text"
                        name="subject"
                        defaultValue="Elige..."
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isValid={touched.subject && !errors.subject}
                        isInvalid={touched.subject && !!errors.subject}
                      >
                        <option disabled>Elige...</option>
                        <option value="Álgebra">Álgebra</option>
                        <option value="Aritmética">Aritmética</option>
                        <option value="Cálculo Diferencial">
                          Cálculo Diferencial
                        </option>
                        <option value="Cálculo Integral">
                          Cálculo Integral
                        </option>
                        <option value="Funciones">Funciones</option>

                        <option value="Geometría">Geometría</option>
                        <option value="Geometría Analítica">
                          Geometría Analítica
                        </option>
                        <option value="Misceláneos">Misceláneos</option>
                        <option value="Pre-Cálculo">Pre-Cálculo</option>
                        <option value="Probabilidad">Probabilidad</option>
                        <option value="Sistema de Medición">
                          Sistema de Medición
                        </option>
                        <option value="Trigonometría">Trigonometría</option>
                      </Form.Control>
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
                  <Form.Group className="mt-2">
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
