import React from "react";
import { ListGroup } from "react-bootstrap";
import moment from "moment";
import "moment/locale/es";
import PropTypes from "prop-types";
import "./courseitem.scss";

const CourseItem = React.memo(({ name, createdAt, _id }) => {
  return (
    <ListGroup.Item
      action
      className="text-left py-4"
      href={"/admin/courses/" + _id}
    >
      <h3 style={{ color: "#495057" }}>{name}</h3>
      <span>
        <i className="far fa-calendar-alt mr-2" />
        {moment(createdAt).format("LL")}
      </span>
    </ListGroup.Item>
  );
});

CourseItem.propTypes = {
  name: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
};

export default CourseItem;
