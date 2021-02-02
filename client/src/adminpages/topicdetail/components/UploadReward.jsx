import React from "react";
import { Form } from "react-bootstrap";
import { ErrorMessage } from "formik";

export const UploadReward = React.memo(({ setFieldValue, onBlur, image }) => {
  return (
    <>
      <Form.Label>Recompensa</Form.Label>
      {/* the following FORM.FILE only works on "react-bootstrap": "^1.0.0",  */}
      <Form.File
        encType="multipart/form-data"
        accept="image/*"
        label={image ? image : ""}
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
        onBlur={onBlur}
        custom
      />
      <ErrorMessage className="text-danger" name="file" component="div" />
    </>
  );
});
