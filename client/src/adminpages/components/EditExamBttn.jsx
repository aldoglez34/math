import React from "react";
import { Button } from "react-bootstrap";
import { string } from "prop-types";

export const EditExamBttn = React.memo(({ courseId, topicId, examId }) => {
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
  courseId: string.isRequired,
  topicId: string.isRequired,
  examId: string.isRequired,
};
