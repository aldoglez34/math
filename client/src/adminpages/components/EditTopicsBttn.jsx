import React from "react";
import { Button } from "react-bootstrap";
import { string } from "prop-types";

export const EditTopicsBttn = React.memo(({ courseId, topicId }) => {
  return (
    <Button
      className="editButton ml-1"
      title="Editar"
      size="sm"
      href={"/admin/courses/edit/topics/" + courseId + "/" + topicId}
    >
      <i className="fas fa-pen-alt " />
    </Button>
  );
});

EditTopicsBttn.propTypes = {
  courseId: string.isRequired,
  topicId: string.isRequired,
};
