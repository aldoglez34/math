import React from "react";
import { ListGroup } from "react-bootstrap";
import PropTypes from "prop-types";
import "./studentitem.scss";

const CourseItem = React.memo(({ name, email, _id }) => {
  return (
    <ListGroup.Item
      action
      className="text-left d-flex flex-column py-4 studentitemstyle"
      href={"/admin/students/" + _id}
    >
      <span className="studentitemtext">{name}</span>
      <span>
        <i className="fas fa-at mr-1" />
        {email}
      </span>
    </ListGroup.Item>
  );
});

CourseItem.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
};

export default CourseItem;
