import React from "react";
import { Button, Form, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import TeacherAPI from "../../../utils/TeacherAPI";

export const MultipleOptionWithImage = React.memo(({ examId, courseId }) => {
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
    qOption1: yup.string().required("Requerido"),
    qOption2: yup.string().required("Requerido"),
    qOption3: yup.string().required("Requerido"),
    qOption4: yup.string().required("Requerido"),
    qCorrectAnswers: yup.string().required("Requerido"),
    qCALeft: yup.string(),
    qCARight: yup.string(),
    qComment: yup.string(),
  });

  return (
    <Formik
      initialValues={{
        qInstruction: "",
        image: undefined,
        file: undefined,
        qOption1: "",
        qOption2: "",
        qOption3: "",
        qOption4: "",
        qCorrectAnswers: "",
        qCALeft: "",
        qCARight: "",
        qComment: "",
      }}
      validationSchema={yupschema}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);

        let questionData = new FormData();
        questionData.append("qInstruction", values.qInstruction.trim());
        questionData.append("image", values.image);
        questionData.append("file", values.file);
        questionData.append("qOption1", values.qOption1.trim());
        questionData.append("qOption2", values.qOption2.trim());
        questionData.append("qOption3", values.qOption3.trim());
        questionData.append("qOption4", values.qOption4.trim());
        questionData.append("qCorrectAnswers", values.qCorrectAnswers.trim());
        questionData.append("qCALeft", values.qCALeft.trim());
        questionData.append("qCARight", values.qCARight.trim());
        questionData.append("qComment", values.qComment.trim());

        questionData.append("examId", examId);
        questionData.append("courseId", courseId);

        TeacherAPI.t_newMultipleOptionWithImage(questionData)
          .then((res) => {
            console.log(res.data);
            alert("La pregunta ha sido registrada con éxito.");
            window.location.reload();
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
                maxLength="250"
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
          {/* options 1 - 4 */}
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>
                Opción 1
                <strong className="text-danger" title="Requerido">
                  *
                </strong>
              </Form.Label>
              <Form.Control
                maxLength="25"
                type="text"
                name="qOption1"
                value={values.qOption1}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.qOption1 && !errors.qOption1}
                isInvalid={touched.qOption1 && !!errors.qOption1}
              />
              <ErrorMessage
                className="text-danger"
                name="qOption1"
                component="div"
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>
                Opción 2
                <strong className="text-danger" title="Requerido">
                  *
                </strong>
              </Form.Label>
              <Form.Control
                maxLength="25"
                type="text"
                name="qOption2"
                value={values.qOption2}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.qOption2 && !errors.qOption2}
                isInvalid={touched.qOption2 && !!errors.qOption2}
              />
              <ErrorMessage
                className="text-danger"
                name="qOption2"
                component="div"
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>
                Opción 3
                <strong className="text-danger" title="Requerido">
                  *
                </strong>
              </Form.Label>
              <Form.Control
                maxLength="25"
                type="text"
                name="qOption3"
                value={values.qOption3}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.qOption3 && !errors.qOption3}
                isInvalid={touched.qOption3 && !!errors.qOption3}
              />
              <ErrorMessage
                className="text-danger"
                name="qOption3"
                component="div"
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>
                Opción 4
                <strong className="text-danger" title="Requerido">
                  *
                </strong>
              </Form.Label>
              <Form.Control
                maxLength="25"
                type="text"
                name="qOption4"
                value={values.qOption4}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.qOption4 && !errors.qOption4}
                isInvalid={touched.qOption4 && !!errors.qOption4}
              />
              <ErrorMessage
                className="text-danger"
                name="qOption4"
                component="div"
              />
            </Form.Group>
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
                maxLength="250"
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
});

MultipleOptionWithImage.propTypes = {
  examId: PropTypes.string.isRequired,
};