import React from "react";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import TeacherAPI from "../../../../utils/TeacherAPI";

const DeleteRewardBttn = React.memo(({ filePath, courseId, topicId }) => {
  const handleDelete = () => {
    TeacherAPI.t_deleteReward({
      filePath,
      courseId,
      topicId,
    })
      .then((res) => {
        console.log(res.data);
        alert("La imagen de recompensa ha sido eliminada con éxito.");
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
      variant="danger"
      className="ml-1"
      title="Eliminar"
      onClick={handleDelete}
    >
      <i className="fas fa-trash-alt" />
    </Button>
  );
});

DeleteRewardBttn.propTypes = {
  filePath: PropTypes.string.isRequired,
  courseId: PropTypes.string.isRequired,
  topicId: PropTypes.string.isRequired,
};

export default DeleteRewardBttn;
