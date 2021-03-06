import React from "react";
import { Button, Form, Col } from "react-bootstrap";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import TeacherAPI from "../../../../utils/TeacherAPI";
import { useSelector } from "react-redux";
import { firebaseStorage } from "../../../../firebase/firebase";

export const SimpleWithImageForm = () => {
  const PHOTO_SIZE = 4000000;
  const SUPPORTED_FORMATS = [
    "image/jpg",
    "image/jpeg",
    "image/gif",
    "image/png",
  ];

  const yupschema = yup.object({
    qInstruction: yup.string().required("Requerido"),
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
    qCorrectAnswers: yup.string().required("Requerido"),
    qCALeft: yup.string(),
    qCARight: yup.string(),
    qComment: yup.string(),
  });

  const examId = useSelector((state) => state.admin.exam.examId);
  const topicId = useSelector((state) => state.admin.topic.topicId);
  const courseId = useSelector((state) => state.admin.course.courseId);

  return (
    <Formik
      initialValues={{
        qInstruction: "",
        image: undefined,
        file: undefined,
        qCorrectAnswers: "",
        qCALeft: "",
        qCARight: "",
        qComment: "",
      }}
      validationSchema={yupschema}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);

        values.qInstruction = values.qInstruction.trim();
        values.qCorrectAnswers = values.qCorrectAnswers.trim();
        values.qCALeft = values.qCALeft.trim();
        values.qCARight = values.qCARight.trim();
        values.qComment = values.qComment.trim();

        values.courseId = courseId;
        values.topicId = topicId;
        values.examId = examId;

        TeacherAPI.t_newSimpleWithImageQuestion(values)
          .then((res) => {
            const questionId = res.data;

            const storageRef = firebaseStorage.ref();
            const pathOnFirebaseStorage = `${courseId}/${topicId}/exams/${examId}/${questionId}/imagen`;
            const fileRef = storageRef.child(pathOnFirebaseStorage);

            fileRef
              .put(values.file)
              .then(() => {
                alert("La pregunta ha sido registrada con éxito.");
                window.location.reload();
              })
              .catch((err) => {
                console.log(err);
                alert("Ocurrió un error en el servidor, intenta más tarde");
              });
          })
          .catch((err) => {
            alert("Ocurrió un error. Vuelve a intentarlo.");
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
        setFieldValue,
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          {/* qInstruction */}
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>
                Instrucción
                <strong className="text-danger" title="Requerido">
                  *
                </strong>
              </Form.Label>
              <Form.Control
                maxLength="500"
                type="text"
                as="textarea"
                rows="1"
                name="qInstruction"
                value={values.qInstruction}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.qInstruction && !errors.qInstruction}
                isInvalid={touched.qInstruction && !!errors.qInstruction}
              />
              <ErrorMessage
                className="text-danger"
                name="qInstruction"
                component="div"
              />
            </Form.Group>
          </Form.Row>
          {/* qTechnicalInstruction (image) */}
          <Form.Row className="mb-3">
            <Form.Label>
              Imagen
              <strong className="text-danger" title="Requerido">
                *
              </strong>
              <small className="ml-1">(.jpg, .jpeg, .gif y .png)</small>
            </Form.Label>
            <Form.File
              encType="multipart/form-data"
              accept="image/*"
              label={values.image ? values.image : ""}
              data-browse="Buscar"
              id="file"
              name="file"
              type="file"
              onChange={(event) => {
                setFieldValue("file", event.currentTarget.files[0]);
                setFieldValue(
                  "image",
                  event.currentTarget.files[0]
                    ? event.currentTarget.files[0].name
                    : ""
                );
              }}
              onBlur={handleBlur}
              custom
            />
            <ErrorMessage className="text-danger" name="file" component="div" />
          </Form.Row>
          {/* answers */}
          <Form.Row className="mb-3">
            <Col md={4}>
              <Form.Label>Complemento izquierda</Form.Label>
              <Form.Control
                maxLength="25"
                type="text"
                name="qCALeft"
                value={values.qCALeft}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.qCALeft && !errors.qCALeft}
                isInvalid={touched.qCALeft && !!errors.qCALeft}
              />
              <ErrorMessage
                className="text-danger"
                name="qCALeft"
                component="div"
              />
            </Col>
            <Col md={4}>
              <Form.Label>
                Respuesta
                <strong className="text-danger" title="Requerido">
                  *
                </strong>
              </Form.Label>
              <Form.Control
                maxLength="250"
                type="text"
                name="qCorrectAnswers"
                value={values.qCorrectAnswers}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.qCorrectAnswers && !errors.qCorrectAnswers}
                isInvalid={touched.qCorrectAnswers && !!errors.qCorrectAnswers}
              />
              <ErrorMessage
                className="text-danger"
                name="qCorrectAnswers"
                component="div"
              />
            </Col>
            <Col md={4}>
              <Form.Label>Complemento derecha</Form.Label>
              <Form.Control
                maxLength="25"
                type="text"
                name="qCARight"
                value={values.qCARight}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.qCARight && !errors.qCARight}
                isInvalid={touched.qCARight && !!errors.qCARight}
              />
              <ErrorMessage
                className="text-danger"
                name="qCARight"
                component="div"
              />
            </Col>
          </Form.Row>
          {/* qComment */}
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Comentario</Form.Label>
              <Form.Control
                maxLength="500"
                type="text"
                as="textarea"
                rows="1"
                name="qComment"
                value={values.qComment}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.qComment && !errors.qComment}
                isInvalid={touched.qComment && !!errors.qComment}
              />
              <ErrorMessage
                className="text-danger"
                name="qComment"
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
};
