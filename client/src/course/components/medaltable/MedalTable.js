import React from "react";
import PropTypes from "prop-types";
import { Image } from "react-bootstrap";

const MedalTable = ({ rewards }) => {
  return (
    <div>
      {rewards.map((r) =>
        r.hasReward ? (
          <Image
            key={r.topicName}
            src={r.link}
            width="80"
            height="120"
            className="m-3"
            title={r.medalName}
            style={{ cursor: "help" }}
          />
        ) : (
          <Image
            key={r.topicName}
            src="/rewards/empty.png"
            width="80"
            height="120"
            className="m-3"
            title={r.medalName}
            style={{ cursor: "help" }}
            style={{ opacity: 0.4 }}
          />
        )
      )}
    </div>
  );
};

MedalTable.propTypes = {
  rewards: PropTypes.array.isRequired,
};

export default MedalTable;
