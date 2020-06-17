import React, { Component } from "react";
// Mathtype is used directly from window
// eslint-disable-next-line no-unused-vars
import * as MathType from "@wiris/mathtype-generic";
import ContentEditable from "react-contenteditable";
import PropTypes from "prop-types";
import styled from "styled-components";

const HiddenEquationWrapper = styled.div``;

class WirisEquationEditor extends Component {
  constructor(props) {
    super(props);
    // this.toolbarRef = props.toolbarRef;
    this.equationEditorRef = React.createRef();
    this.toolbarRef = React.createRef();
  }

  componentDidMount() {
    const { toolbarRef } = this.props;
    const genericIntegrationProperties = {};
    genericIntegrationProperties.target = this.equationEditorRef.current;
    genericIntegrationProperties.toolbar = this.toolbarRef.current;
    const genericIntegrationInstance = new window.WirisPlugin.GenericIntegration(
      genericIntegrationProperties
    );

    genericIntegrationInstance.init();
    genericIntegrationInstance.listeners.fire("onTargetReady", {});
  }

  handleEquationChange = (event) => {
    const { onEquationInput } = this.props;
    const mathFormat = window.WirisPlugin.Parser.endParse(event.target.value);
    const equationImage = event.target.value;
    onEquationInput(equationImage, mathFormat);
  };

  render() {
    const { value } = this.props;
    return (
      <div>
        <div ref={this.toolbarRef} />
        <ContentEditable
          innerRef={this.equationEditorRef}
          onChange={this.handleEquationChange}
          html={value}
        />
      </div>
    );
  }
}

WirisEquationEditor.propTypes = {
  onEquationInput: PropTypes.func,
  value: PropTypes.node,
  toolbarRef: PropTypes.instanceOf(Element).isRequired,
};

WirisEquationEditor.defaultProps = {
  onEquationInput: () => {},
  value: null,
};

export default WirisEquationEditor;
