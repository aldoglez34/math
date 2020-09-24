import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Button, Modal, Col } from "react-bootstrap";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import { useSelector } from "react-redux";
import API from "../../../utils/API";

const HelpModal = React.memo(({ courseName, topic }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const student = useSelector((state) => state.student);

  const yupschema = yup.object({
    body: yup.string().required("Requerido"),
  });

  return student ? (
    <>
      <Button
        variant="primary"
        size="sm"
        className="mb-3 mt-2 mb-lg-0 shadow-sm"
        onClick={handleShow}
      >
        <i className="fas fa-question-circle mr-2" />
        ¿Necesitas ayuda?
      </Button>

      <Modal show={show} backdrop="static" keyboard={false}>
        <Modal.Body className="bg-light rounded shadow">
          <div className="d-flex flex-column mb-3">
            <div className="d-flex">
              <h3 className="text-dark mb-3">Hola, {student.name}</h3>
              <Button
                className="ml-auto text-dark"
                variant="link"
                size="sm"
                title="Cerrar"
                onClick={handleClose}
              >
                <i className="fas fa-times" style={{ fontSize: "22px" }} />
              </Button>
            </div>
            <span className="mb-2">
              ¿Tienes duda sobre el curso{" "}
              <strong>
                <u>{topic}</u>
              </strong>
              ?
            </span>
            <span className="mb-2">
              Utiliza el siguiente recuadro para hacerle llegar tu comentario al
              maestro.
            </span>
            <span className="mb-2">
              Recibirás una notificación en la esquina superior derecha (donde
              sale tu correo) cuando tu mensaje sea contestado.
            </span>
          </div>

          <Formik
            initialValues={{
              body: "",
            }}
            validationSchema={yupschema}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(true);
              values.email = student.email;
              values.subject = courseName + " / " + topic;
              values.type = "Student";
              values.username = student.username;
              values.name = student.name + " " + student.firstSurname;
              API.postMessage(values)
                .then(() => {
                  // console.log(res);
                  alert(
                    "Tu mensaje ha sido enviado con éxito, la respuesta del maestro te será notificada en la esquina superior derecha, donde aparece tu correo."
                  );
                  handleClose();
                })
                .catch((err) => {
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
            }) => (
              <Form noValidate onSubmit={handleSubmit}>
                {/* body */}
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Control
                      maxLength="250"
                      type="text"
                      as="textarea"
                      rows="5"
                      name="body"
                      value={values.body}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.body && !errors.body}
                      isInvalid={touched.body && !!errors.body}
                    />
                    <ErrorMessage
                      className="text-danger"
                      name="body"
                      component="div"
                    />
                  </Form.Group>
                </Form.Row>
                {/* buttons */}
                <Form.Group>
                  <Button
                    variant="primary"
                    type="submit"
                    className="shadow-sm"
                    disabled={isSubmitting}
                  >
                    Enviar
                  </Button>
                </Form.Group>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  ) : null;
});

HelpModal.propTypes = {
  courseName: PropTypes.string.isRequired,
  topic: PropTypes.string.isRequired,
};

export default HelpModal;
