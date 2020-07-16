import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Image } from "react-bootstrap";

const MultipleChoice = React.memo(({ type, textChoices, imageChoices }) => {
  const [selected, setSelected] = useState();

  return type === "text" ? (
    <div className="mt-4">
      {textChoices.map((c) => (
        <Button
          key={c}
          variant="outline-secondary"
          className="mr-2"
          active={selected === c ? true : false}
          onClick={() => setSelected(c)}
        >
          {c}
        </Button>
      ))}
    </div>
  ) : type === "image" ? (
    <div className="mt-4">
      {imageChoices.map((c) => (
        <Button
          key={c}
          variant="outline-secondary"
          className="mr-2"
          active={selected === c ? true : false}
          onClick={() => setSelected(c)}
        >
          <Image src={c} />
        </Button>
      ))}
    </div>
  ) : null;
});

MultipleChoice.propTypes = {
  type: PropTypes.string.isRequired,
  textChoices: PropTypes.array,
  imageChoices: PropTypes.array,
};

export default MultipleChoice;
