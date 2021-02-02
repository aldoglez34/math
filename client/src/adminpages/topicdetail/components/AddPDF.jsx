import React, { useState } from "react";
import { Button, Col, Form, Modal } from "react-bootstrap";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import { string } from "prop-types";
import { UploadPDF } from "./";
import TeacherAPI from "../../../utils/TeacherAPI";

export const AddPDF = React.memo(({ courseId, topicId }) => {
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
        "PDF muy pesado",
        (value) => value && value.size <= PDF_SIZE
      )
      .test(
        "fileFormat",
        "Formato no soportado",
        (value) => value && SUPPORTED_FORMATS.includes(value.type)
      ),
  });

  const PDF_SIZE = 4000000;
  const SUPPORTED_FORMATS = ["application/pdf"];

  return (
    <>
      <Button
        variant="dark"
        onClick={handleShow}
        className="adminaddbttn ml-2"
        size="sm"
      >
        <i className="fas fa-file-pdf mr-2" />
        <span>Agregar PDF</span>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body className="bg-light rounded">
          <div className="d-flex">
            <h3 className="mb-0 text-dark">Agregar PDF</h3>
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
                pdf: undefined,
                file: undefined,
              }}
              validationSchema={yupschema}
              onSubmit={(values, { setSubmitting }) => {
                setSubmitting(true);
                let materialPDF = new FormData();
                materialPDF.append("name", values.name);
                materialPDF.append("pdf", values.pdf);
                materialPDF.append("file", values.file);
                materialPDF.append("courseId", courseId);
                materialPDF.append("topicId", topicId);
                //
                TeacherAPI.t_addPDFToMaterial(materialPDF)
                  .then((res) => {
                    console.log(res.data);
                    alert("El PDF fue agregado satisfactoriamente");
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
                  {/* pdf */}
                  <UploadPDF
                    pdf={values.pdf}
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

AddPDF.propTypes = {
  courseId: string.isRequired,
  topicId: string.isRequired,
};
