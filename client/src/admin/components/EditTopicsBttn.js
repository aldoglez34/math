import React from "react";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";

const EditTopicsBttn = React.memo(({ courseId, topicId }) => {
  return (
    <Button
      className="editButton ml-2"
      title="Editar temas"
      size="sm"
      href={"/admin/courses/edit/topics/" + courseId + "/" + topicId}
    >
      <i className="fas fa-pen-alt " />
    </Button>
  );
});

EditTopicsBttn.propTypes = {
  courseId: PropTypes.string.isRequired,
  topicId: PropTypes.string.isRequired,
};

export default EditTopicsBttn;
