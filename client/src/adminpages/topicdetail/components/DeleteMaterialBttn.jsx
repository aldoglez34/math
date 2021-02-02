import React from "react";
import { Button } from "react-bootstrap";
import { string } from "prop-types";
import TeacherAPI from "../../../utils/TeacherAPI";

export const DeleteMaterialBttn = React.memo(
  ({ isPDF, courseId, topicId, materialId }) => {
    const handleDelete = () => {
      TeacherAPI.t_deleteMaterial({
        isPDF,
        courseId,
        topicId,
        materialId,
      })
        .then((res) => {
          console.log(res.data);
          alert("El artículo seleccionado ha sido eliminado con éxito.");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
          alert("Ocurrió un error, vuelve a intentarlo.");
        });
    };

    return (
      <Button
        size="sm"
        variant="transparent"
        className="ml-1 mt-1 text-danger"
        title="Eliminar"
        onClick={handleDelete}
      >
        <i className="fas fa-trash" />
      </Button>
    );
  }
);

DeleteMaterialBttn.propTypes = {
  courseId: string.isRequired,
  isPDF: string,
  materialId: string.isRequired,
  topicId: string.isRequired,
};
