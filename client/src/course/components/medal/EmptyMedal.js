import React from "react";
import { Image } from "react-bootstrap";

const EmptyMedal = () => {
  return (
    <>
      <Image src="/rewards/medal.png" width="45" height="60" className="m-2" />
      <Image
        src="https://image.flaticon.com/icons/svg/813/813714.svg"
        width="55"
        height="75"
        className="m-2"
        style={{ opacity: ".2" }}
      />
      {/* <i
        className="fas fa-circle mx-2 my-1"
        style={{ fontSize: "85px", opacity: ".1" }}
      /> */}
    </>
  );
};

export default EmptyMedal;
