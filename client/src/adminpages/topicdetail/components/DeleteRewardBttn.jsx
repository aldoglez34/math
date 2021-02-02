import React from "react";
import { Button } from "react-bootstrap";
import { string } from "prop-types";
import TeacherAPI from "../../../utils/TeacherAPI";

export const DeleteRewardBttn = React.memo(
  ({ filePath, courseId, topicId }) => {
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
        variant="transparent"
        className="ml-1 genericDeleteButton"
        title="Eliminar"
        onClick={handleDelete}
      >
        <i className="fas fa-trash" />
      </Button>
    );
  }
);

DeleteRewardBttn.propTypes = {
  courseId: string.isRequired,
  filePath: string.isRequired,
  topicId: string.isRequired,
};
