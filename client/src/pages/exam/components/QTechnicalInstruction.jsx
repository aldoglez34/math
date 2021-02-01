import React from "react";
import { oneOf, string } from "prop-types";
import { Image } from "react-bootstrap";

export const QTechnicalInstruction = React.memo(({ type, text, imageLink }) => {
  return type === "text" ? (
    <h4>
      <span className="text-break">{text}</span>
    </h4>
  ) : type === "image" ? (
    <Image src={imageLink} className="mt-2" width="250" height="250" rounded />
  ) : null;
});

QTechnicalInstruction.propTypes = {
  type: oneOf(["text", "image"]).isRequired,
  text: string,
  imageLink: string,
};
