import React from "react";
import PropTypes from "prop-types";
import { Image, OverlayTrigger, Tooltip } from "react-bootstrap";
import "./medaltable.scss";

const MedalTable = ({ rewards }) => {
  return (
    <div className="text-center">
      {rewards.map((r) =>
        r.hasReward ? (
          <OverlayTrigger
            key={r.topicName}
            placement="top"
            overlay={
              <Tooltip>
                Medalla del tema <strong>{r.topicName}</strong>.
              </Tooltip>
            }
          >
            <Image
              src={r.link}
              width="80"
              height="120"
              className="my-1 mx-3 medalstyle"
            />
          </OverlayTrigger>
        ) : (
          <Image
            key={r.topicName}
            src="/images/emptyMedal.png"
            width="80"
            height="120"
            className="my-1 mx-3 emptyMedalstyle"
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
