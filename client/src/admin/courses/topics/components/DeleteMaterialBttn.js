import React from "react";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import TeacherAPI from "../../../../utils/TeacherAPI";

const DeleteMaterial = React.memo(({ topicId, materialId }) => {
  const course = useSelector((state) => state.course);

  const handleDelete = () => {
    const obj = {
      courseId: course._id,
      topicId,
      materialId,
    };
    //
    TeacherAPI.t_deleteMaterial(obj)
      .then((res) => {
        console.log(res.data);
        alert("El artículo seleccionado ha sido eliminado con éxito.");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Button
      size="sm"
      variant="danger"
      className="ml-1"
      title="Eliminar"
      onClick={handleDelete}
    >
      <i className="fas fa-trash-alt" />
    </Button>
  );
});

DeleteMaterial.propTypes = {
  topicId: PropTypes.string.isRequired,
  materialId: PropTypes.string.isRequired,
};

export default DeleteMaterial;
