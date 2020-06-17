import React, { Component } from "react";
import EquationEditor from "./WirisEquationEditor";

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      mathFormat: null,
    };
    this.toolbarRef = React.createRef();
  }
  componentDidMount() {}

  onEquationChange = (img, mathML) => {
    console.log(
      "Here is the new html, but the equation is in math format",
      mathML
    );
    this.setState({ value: img, mathFormat: mathML });
  };

  render() {
    const { value, mathFormat } = this.state;
    return (
      <>
        <div ref={this.toolbarRef} />
        <div>This is the value: {value}</div>
        <div>Math format: {mathFormat}</div>
        <hr />
        <EquationEditor
          onEquationInput={this.onEquationChange}
          toolbarRef={this.toolbarRef}
          value={value}
        />
        <h1 id="big-text">Big Text</h1>
        <div contentEditable>
          <img
            src="data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Awrs%3D%22http%3A%2F%2Fwww.wiris.com%2Fxml%2Fcvs-extension%22%20height%3D%2223%22%20width%3D%2226%22%20wrs%3Abaseline%3D%2219%22%3E%3C!--MathML%3A%20%3Cmath%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F1998%2FMath%2FMathML%22%3E%3Cmsqrt%3E%3Cmn%3E5%3C%2Fmn%3E%3C%2Fmsqrt%3E%3C%2Fmath%3E--%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%2F%3E%3C%2Fdefs%3E%3Cpolyline%20fill%3D%22none%22%20points%3D%2212%2C-16%2011%2C-16%205%2C0%202%2C-6%22%20stroke%3D%22%23000000%22%20stroke-linecap%3D%22square%22%20stroke-width%3D%221%22%20transform%3D%22translate(0.5%2C20.5)%22%2F%3E%3Cpolyline%20fill%3D%22none%22%20points%3D%225%2C0%202%2C-6%200%2C-5%22%20stroke%3D%22%23000000%22%20stroke-linecap%3D%22square%22%20stroke-width%3D%221%22%20transform%3D%22translate(0.5%2C20.5)%22%2F%3E%3Cline%20stroke%3D%22%23000000%22%20stroke-linecap%3D%22square%22%20stroke-width%3D%221%22%20x1%3D%2212.5%22%20x2%3D%2224.5%22%20y1%3D%224.5%22%20y2%3D%224.5%22%2F%3E%3Ctext%20font-family%3D%22Arial%22%20font-size%3D%2216%22%20text-anchor%3D%22middle%22%20x%3D%2218.5%22%20y%3D%2219%22%3E5%3C%2Ftext%3E%3C%2Fsvg%3E"
            className="Wirisformula"
            alt="square root of 5"
            data-mathml="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«msqrt»«mn»5«/mn»«/msqrt»«/math»"
            height="23"
            role="math"
            width="26"
            data-key="164"
            style={{ maxWidth: "none", verticalAlign: "-4px" }}
          />
          <div id="the-target" />
        </div>
      </>
    );
  }
}

MyComponent.defaultProps = {
  value:
    'My first equation is <math xmlns="http://www.w3.org/1998/Math/MathML"><msqrt><mn>5</mn></msqrt><mo>=</mo><mn>2</mn><mo>.</mo><mn>236</mn></math>. Double click the equation to edit it.',
};

export default MyComponent;
