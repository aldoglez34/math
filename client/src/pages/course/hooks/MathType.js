import React, { useState, useRef } from "react";

const MathType = () => {
  const myRef = useRef(null);

  const [value, setValue] = useState(null);
  const [mathFormat, setMathFormat] = useState(null);

  onEquationChange = (img, mathML) => {
    console.log(
      "Here is the new html, but the equation is in math format",
      mathML
    );
    setValue(img);
    setMathFormat(mathML);
  };

  return (
    <div>
      <h3>Math Type</h3>
    </div>
  );
};

export default MathType;
