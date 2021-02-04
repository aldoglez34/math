import React from "react";
import { array } from "prop-types";
import { ImageFromFirebase } from "../../../../adminpages/components";
import { Image, OverlayTrigger, Tooltip } from "react-bootstrap";
import "./medaltable.scss";

const MedalTable = ({ rewards }) => {
  return (
    <div className="text-center">
      {rewards.map((r) =>
        r.hasReward ? (
          <OverlayTrigger
            key={r.medalName}
            placement="top"
            overlay={
              <Tooltip>
                <strong>{r.medalName}</strong>
              </Tooltip>
            }
          >
            <ImageFromFirebase
              path={r.link}
              width="80"
              height="120"
              className="my-1 mx-3 medalstyle"
            />
          </OverlayTrigger>
        ) : (
          <Image
            key={r.medalName}
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
  rewards: array.isRequired,
};

export default MedalTable;
