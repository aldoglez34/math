import React from "react";
import PropTypes from "prop-types";
import { Image, OverlayTrigger, Tooltip } from "react-bootstrap";
import "./medaltable.scss";

const MedalTable = ({ rewards }) => {
  return (
    <div>
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
              className="m-3 medalstyle"
            />
          </OverlayTrigger>
        ) : (
          <OverlayTrigger
            key={r.topicName}
            placement="top"
            overlay={
              <Tooltip>
                Medalla <strong>bloqueada</strong>.
              </Tooltip>
            }
          >
            <Image
              key={r.topicName}
              src="/rewards/empty.png"
              width="80"
              height="120"
              className="m-3"
              style={{ opacity: 0.1 }}
            />
          </OverlayTrigger>
        )
      )}
    </div>
  );
};

MedalTable.propTypes = {
  rewards: PropTypes.array.isRequired,
};

export default MedalTable;
