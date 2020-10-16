import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Col } from "react-bootstrap";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import PropTypes from "prop-types";
import TeacherAPI from "../../../../utils/TeacherAPI";

const NewExamBttn = ({ courseId, topicId }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const yupschema = yup.object({
    difficulty: yup
      .string()
      .notOneOf(["Elige..."], "Requerido")
      .required("Requerido"),
  });

  const [difficulties, setDifficulties] = useState();

  useEffect(() => {
    // TeacherAPI.t_fetchAvailableDifficulties(courseId, topicId)
    //   .then((res) => setDifficulties(res.data))
    //   .catch((err) => {
    //     console.log(err);
    //     alert("Ocurrió un error");
    // });
  }, []);

  return (
    <>
      <Button onClick={handleShow} className="px-4 adminbttncolor" size="sm">
        <i className="far fa-file-alt mr-2" />
        <span>Agregar examen</span>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body className="bg-light rounded">
          <div className="d-flex">
            <h3 className="mb-0 text-dark">Nuevo examen</h3>
            <Button
              variant="link"
              className="text-dark ml-auto"
              onClick={handleClose}
            >
              <i className="fas fa-times" />
            </Button>
          </div>
          <div className="my-3">
            <Formik
              initialValues={{
                difficulty: "",
              }}
              validationSchema={yupschema}
              onSubmit={(values, { setSubmitting }) => {
                setSubmitting(true);
                const url = `/admin/courses/exam/new/${values.difficulty}/${courseId}/${topicId}`;
                window.location.href = url;
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
                    <Form.Group as={Col}>
                      <Form.Label>Dificultad</Form.Label>
                      <Form.Control
                        as="select"
                        type="text"
                        name="difficulty"
                        defaultValue="Elige..."
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isValid={touched.difficulty && !errors.difficulty}
                        isInvalid={touched.difficulty && !!errors.difficulty}
                      >
                        <option disabled>Elige...</option>
                        {/* {difficulties.map((d) => (
                          <option value={d}>{d}</option>
                        ))} */}
                        <option value="Basic">Básico</option>
                        <option value="Basic-Intermediate">
                          Básico-Intermedio
                        </option>
                        <option value="Intermediate">Intermedio</option>
                        <option value="Intermediate-Advanced">
                          Intermedio-Avanzado
                        </option>
                        <option value="Advanced">Avanzado</option>
                      </Form.Control>
                      <ErrorMessage
                        className="text-danger"
                        name="difficulty"
                        component="div"
                      />
                    </Form.Group>
                  </Form.Row>
                  {/* buttons */}
                  <Form.Group className="text-right">
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
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

NewExamBttn.propTypes = {
  courseId: PropTypes.string.isRequired,
  topicId: PropTypes.string.isRequired,
};

export default NewExamBttn;
