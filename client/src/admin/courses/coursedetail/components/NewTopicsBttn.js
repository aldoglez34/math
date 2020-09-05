import React from "react";
import { Button } from "react-bootstrap";

const NewTopicsBttn = React.memo(({ courseId }) => {
  return (
    <Button
      size="sm"
      variant="warning"
      className="ml-2"
      href={"/admin/courses/courses/newTopic/" + courseId}
    >
      <i className="fas fa-plus" />
    </Button>
  );
});

export default NewTopicsBttn;
