import React, { useState, useEffect } from "react";
import { Button, Col, Form, Modal, Spinner } from "react-bootstrap";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import { string } from "prop-types";
import TeacherAPI from "../../../utils/TeacherAPI";

export const NewExamBttn = ({ courseId, topicId }) => {
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
    TeacherAPI.t_fetchDifficultiesAvailable(courseId, topicId)
      .then((res) => {
        setDifficulties(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert("Ocurrió un error, actualiza la página");
      });
  }, [courseId, topicId]);

  return (
    <>
      <Button variant="dark" onClick={handleShow} className="my-2" size="sm">
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
                  {difficulties ? (
                    difficulties.length ? (
                      <>
                        {/* difficulty */}
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
                              isInvalid={
                                touched.difficulty && !!errors.difficulty
                              }
                            >
                              <option disabled>Elige...</option>
                              {difficulties.map((d) => {
                                return (
                                  <option key={d} value={d}>
                                    {d}
                                  </option>
                                );
                              })}
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
                      </>
                    ) : (
                      <div className="my-3 text-center">
                        No hay dificultades de examen disponibles para este
                        tema.
                      </div>
                    )
                  ) : (
                    <div className="my-3 text-center">
                      <Spinner />
                    </div>
                  )}
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
  courseId: string.isRequired,
  topicId: string.isRequired,
};
