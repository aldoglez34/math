import React from "react";
import { Form } from "react-bootstrap";
import { ErrorMessage } from "formik";

export const UploadImage = React.memo(({ setFieldValue, onBlur, photo }) => {
  return (
    <>
      <Form.Label>
        Medalla
        <strong className="text-danger">*</strong>
        <small className="ml-1">(.jpg, .jpeg, .gif y .png)</small>
      </Form.Label>
      {/* the following FORM.FILE only works on "react-bootstrap": "^1.0.0",  */}
      <Form.File
        encType="multipart/form-data"
        accept="image/*"
        label={photo ? photo : ""}
        data-browse="Buscar"
        id="file"
        name="file"
        type="file"
        onChange={(event) => {
          setFieldValue("file", event.currentTarget.files[0]);
          setFieldValue(
            "photo",
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
