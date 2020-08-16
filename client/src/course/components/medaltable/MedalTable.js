import React from "react";
import PropTypes from "prop-types";
import { Image } from "react-bootstrap";

const MedalTable = () => {
  return (
    <div>
      <Image
        src="/rewards/primaria/3/division.png"
        width="80"
        height="120"
        className="m-2"
      />
    </div>
  );
};

MedalTable.propTypes = {
  // name: PropTypes.string.isRequired,
  // topics: PropTypes.array.isRequired,
};

export default MedalTable;
