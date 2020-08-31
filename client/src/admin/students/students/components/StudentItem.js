import React from "react";
import { ListGroup } from "react-bootstrap";
import moment from "moment";
import "moment/locale/es";
import PropTypes from "prop-types";
import "./studentitem.scss";

const CourseItem = React.memo(({ name, registeredAt, email, _id }) => {
  return (
    <ListGroup.Item
      action
      className="text-left d-flex flex-column py-4 studentitemstyle"
      href={"/admin/students/" + _id}
    >
      <span className="studentitemtext">{name}</span>
      <span>{email}</span>
      <span>
        <i className="far fa-calendar-alt mr-2" />
        {moment(registeredAt).format("LL")}
      </span>
    </ListGroup.Item>
  );
});

CourseItem.propTypes = {
  name: PropTypes.string.isRequired,
  registeredAt: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
};

export default CourseItem;
