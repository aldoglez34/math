import React from "react";
// import { Badge } from "react-bootstrap";
import PropTypes from "prop-types";
import { HashLink as Link } from "react-router-hash-link";
import "./mytopic.scss";

const MyTopic = ({ topicName }) => {
  return (
    <div className="mb-1">
      <Link
        smooth
        to={"/course/#" + topicName}
        title={"Ir a " + topicName}
        className="mytopicstyle"
      >
        <strong style={{ fontSize: "17px" }}>
          <i
            className="fas fa-location-arrow mr-2"
            style={{ fontSize: "13px" }}
          />
          {topicName}
        </strong>
        {/* <Badge pill className="mb-1 shadow-sm topicBadge">
          <i className="fas fa-location-arrow topicArrow" />
          <span className="topicText">{topicName}</span>
        </Badge> */}
      </Link>
    </div>
  );
};

MyTopic.propTypes = {
  topicName: PropTypes.string.isRequired,
};

export default MyTopic;
