import React, { useState } from "react";
import { Modal, Button, Form, Col } from "react-bootstrap";
import "./adminaddbttn.scss";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import PropTypes from "prop-types";
import TeacherAPI from "../../../../utils/TeacherAPI";

const AddVideo = React.memo(({ courseId, topicId }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const yupschema = yup.object({
    name: yup.string().required("Requerido"),
    link: yup.string().required("Requerido"),
  });

  return (
    <>
      <Button onClick={handleShow} className="adminaddbttn" size="sm">
        <i className="fas fa-video mr-2" />
        <span>Agregar video</span>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body className="bg-light rounded">
          <div className="d-flex">
            <h3 className="mb-0 text-dark">Agregar video</h3>
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
                name: "",
                link: "",
              }}
              validationSchema={yupschema}
              onSubmit={(values, { setSubmitting }) => {
                setSubmitting(true);
                values.courseId = courseId;
                values.topicId = topicId;
                //
                TeacherAPI.t_addVideoToMaterial(values)
                  .then((res) => {
                    console.log(res.data);
                    alert("El video fue agregado satisfactoriamente");
                  })
                  .catch((err) => {
                    console.log(err);
                    alert("Ocurrió un error, vuelve a intentarlo");
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
                  {/* name */}
                  <Form.Row>
                    <Form.Group as={Col}>
                      <Form.Label>Nombre</Form.Label>
                      <Form.Control
                        maxLength="55"
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
                    </Form.Group>
                  </Form.Row>
                  {/* link */}
                  <Form.Row>
                    <Form.Group as={Col}>
                      <Form.Label>Liga</Form.Label>
                      <Form.Control
                        type="text"
                        name="link"
                        value={values.link}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isValid={touched.link && !errors.link}
                        isInvalid={touched.link && !!errors.link}
                      />
                      <ErrorMessage
                        className="text-danger"
                        name="link"
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
                      Agregar
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
});

AddVideo.propTypes = {
  courseId: PropTypes.string.isRequired,
  topicId: PropTypes.string.isRequired,
};

export default AddVideo;
