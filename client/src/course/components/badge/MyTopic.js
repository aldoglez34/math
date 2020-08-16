import React from "react";
import { Badge } from "react-bootstrap";
import PropTypes from "prop-types";
import { HashLink as Link } from "react-router-hash-link";
import "./mytopic.scss";

const MyTopic = ({ topicName }) => {
  return (
    <div className="mb-1">
      <Link smooth to={"/course/#" + topicName} title={"Ir a " + topicName}>
        <Badge pill className="mb-1 shadow-sm topicBadge">
          <i className="fas fa-location-arrow topicArrow" />
          <span className="topicText">{topicName}</span>
        </Badge>
      </Link>
    </div>
  );
};

MyTopic.propTypes = {
  topicName: PropTypes.string.isRequired,
};

export default MyTopic;
