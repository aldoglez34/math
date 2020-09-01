import React from "react";
import { ListGroup } from "react-bootstrap";
import PropTypes from "prop-types";
import "./courseitem.scss";

const CourseItem = React.memo(({ name, school, _id }) => {
  return (
    <ListGroup.Item
      action
      className="text-left d-flex flex-column py-4 courseitemstyle"
      href={"/admin/courses/edit/" + _id}
    >
      <span className="courseitemtext">{name}</span>
      <span>
        <i className="fas fa-graduation-cap mr-1" />
        {school}
      </span>
    </ListGroup.Item>
  );
});

CourseItem.propTypes = {
  name: PropTypes.string.isRequired,
  school: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
};

export default CourseItem;
