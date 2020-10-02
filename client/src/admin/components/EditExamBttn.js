import React from "react";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";

const EditExamBttn = React.memo(({ courseId, topicId, examId }) => {
  return (
    <Button
      className="editButton ml-1"
      title="Editar"
      size="sm"
      href={
        "/admin/courses/edit/exam/" + courseId + "/" + topicId + "/" + examId
      }
    >
      <i className="fas fa-pen-alt " />
    </Button>
  );
});

EditExamBttn.propTypes = {
  courseId: PropTypes.string.isRequired,
  topicId: PropTypes.string.isRequired,
  examId: PropTypes.string.isRequired,
};

export default EditExamBttn;
