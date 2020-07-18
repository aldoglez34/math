import React from "react";
import { Image } from "react-bootstrap";
import PropTypes from "prop-types";

const MyRewards = React.memo(({ rewards }) => {
  return rewards.length ? (
    <span className="pt-2 d-flex flex-row justify-content-center">
      {rewards.map((r) => (
        <Image
          key={r.name}
          src={r.link}
          width="70"
          height="70"
          className="mx-2"
          title={r.name}
          style={{ cursor: "help" }}
        />
      ))}
    </span>
  ) : null;
});

MyRewards.propTypes = {
  rewards: PropTypes.array,
};

export default MyRewards;
