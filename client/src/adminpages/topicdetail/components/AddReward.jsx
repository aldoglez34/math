import React, { useState } from "react";
import { Button, Col, Form, Modal } from "react-bootstrap";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import { string } from "prop-types";
import { UploadReward } from "./";
import TeacherAPI from "../../../utils/TeacherAPI";

export const AddReward = React.memo(({ courseId, topicId }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const yupschema = yup.object({
    name: yup.string().required("Requerido"),
    file: yup
      .mixed()
      .required("Requerido")
      .test(
        "fileSize",
        "Imagen muy pesada",
        (value) => value && value.size <= IMAGE_SIZE
      )
      .test(
        "fileFormat",
        "Formato no soportado",
        (value) => value && SUPPORTED_FORMATS.includes(value.type)
      ),
  });

  const IMAGE_SIZE = 4000000;
  const SUPPORTED_FORMATS = [
    "image/jpg",
    "image/jpeg",
    "image/gif",
    "image/png",
  ];

  return (
    <>
      <Button onClick={handleShow} className="adminaddbttn" size="sm">
        <i className="fas fa-medal mr-2" />
        <span>Agregar recompensa</span>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body className="bg-light rounded">
          <div className="d-flex">
            <h3 className="mb-0 text-dark">Agregar recompensa</h3>
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
                image: undefined,
                file: undefined,
              }}
              validationSchema={yupschema}
              onSubmit={(values, { setSubmitting }) => {
                setSubmitting(true);
                let rewardImage = new FormData();
                rewardImage.append("name", values.name);
                rewardImage.append("image", values.image);
                rewardImage.append("file", values.file);
                rewardImage.append("courseId", courseId);
                rewardImage.append("topicId", topicId);
                //
                TeacherAPI.t_addReward(rewardImage)
                  .then((res) => {
                    console.log(res.data);
                    alert("La recompensa fue agregada satisfactoriamente");
                    window.location.reload();
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
                setFieldValue,
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
                  {/* reward file */}
                  <UploadReward
                    image={values.image}
                    setFieldValue={setFieldValue}
                    onBlur={handleBlur}
                    file={values.file}
                  />
                  {/* buttons */}
                  <Form.Group className="text-right mt-4">
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

AddReward.propTypes = {
  courseId: string.isRequired,
  topicId: string.isRequired,
};
