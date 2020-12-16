import React from "react";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import TeacherAPI from "../../../../utils/TeacherAPI";

const DeleteMaterial = React.memo(
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
        className="ml-1 mt-1 genericDeleteButton"
        title="Eliminar"
        onClick={handleDelete}
      >
        <i className="fas fa-trash" />
      </Button>
    );
  }
);

DeleteMaterial.propTypes = {
  isPDF: PropTypes.string,
  courseId: PropTypes.string.isRequired,
  topicId: PropTypes.string.isRequired,
  materialId: PropTypes.string.isRequired,
};

export default DeleteMaterial;
