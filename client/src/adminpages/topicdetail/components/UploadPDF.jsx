import React from "react";
import { Form } from "react-bootstrap";
import { ErrorMessage } from "formik";

export const UploadPDF = React.memo(({ setFieldValue, onBlur, pdf }) => {
  return (
    <>
      <Form.Label>PDF</Form.Label>
      {/* the following FORM.FILE only works on "react-bootstrap": "^1.0.0",  */}
      <Form.File
        encType="multipart/form-data"
        accept="application/pdf"
        label={pdf ? pdf : ""}
        data-browse="Buscar"
        id="file"
        name="file"
        type="file"
        onChange={(event) => {
          setFieldValue("file", event.currentTarget.files[0]);
          setFieldValue(
            "pdf",
            event.currentTarget.files[0]
              ? event.currentTarget.files[0].name
              : ""
          );
        }}
        onBlur={onBlur}
        custom
      />
      <ErrorMessage className="text-danger" name="file" component="div" />
    </>
  );
});
