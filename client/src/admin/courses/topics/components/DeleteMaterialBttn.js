import React from "react";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const DeleteMaterial = React.memo(({ topicId, materialId }) => {
  const course = useSelector((state) => state.course);

  const handleDelete = () => {
    console.log("courseId: ", course._id);
    console.log("topicId: ", topicId);
    console.log("materialId: ", materialId);
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
