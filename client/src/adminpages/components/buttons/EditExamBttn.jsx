import React from "react";
import { Button } from "react-bootstrap";
import { string } from "prop-types";

export const EditExamBttn = React.memo(({ courseId, examId, topicId }) => {
  return (
    <Button
      className="ml-1"
      variant="dark"
      title="Editar"
      size="sm"
      href={`/admin/courses/edit/exam/${courseId}/${topicId}/${examId}`}
    >
      <i className="fas fa-pen-alt " />
    </Button>
  );
});

EditExamBttn.propTypes = {
  courseId: string.isRequired,
  examId: string.isRequired,
  topicId: string.isRequired,
};
