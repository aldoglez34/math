import React from "react";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import TeacherAPI from "../../../utils/TeacherAPI";

const AdminDeleteExamBttn = React.memo(({ examId, questionId }) => {
  const handleClick = () => {
    TeacherAPI.t_deleteQuestion({ examId, questionId })
      .then((res) => {
        console.log(res.data);
        alert("Pregunta borrada con éxito");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        alert("Ocurrió un error");
      });
  };

  return (
    <Button
      size="sm"
      className="deleteButton"
      onClick={handleClick}
      title="Borrar"
    >
      <i className="fas fa-times" />
    </Button>
  );
});

AdminDeleteExamBttn.propTypes = {
  examId: PropTypes.string.isRequired,
  questionId: PropTypes.string.isRequired,
};

export default AdminDeleteExamBttn;
