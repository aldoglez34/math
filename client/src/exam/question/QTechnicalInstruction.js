import React from "react";
import PropTypes from "prop-types";
import { Image } from "react-bootstrap";

const QTechnicalInstruction = React.memo(({ type, text, imageLink }) => {
  return type === "text" ? (
    <h4>
      <span className="text-break">{text}</span>
    </h4>
  ) : type === "image" ? (
    <Image src={imageLink} />
  ) : null;
});

QTechnicalInstruction.propTypes = {
  type: PropTypes.oneOf(["text", "image"]).isRequired,
  text: PropTypes.string,
  imageLink: PropTypes.string,
};

export default QTechnicalInstruction;
