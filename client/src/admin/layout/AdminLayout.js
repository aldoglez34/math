import React from "react";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import LeftNav from "./components/LeftNav";
import TopNav from "./components/TopNav";
import ScrollButton from "../../components/scrollbutton";
import "./adminlayout.scss";

const TeacherLayout = React.memo(
  ({ title, leftBarActive, backBttn, buttons, children }) => {
    return (
      <div className="d-flex h-100">
        {/* vertical navbar */}
        <LeftNav leftBarActive={leftBarActive} />
        {/* main container */}
        <Container id="mainContainer" className="h-100" fluid>
          {/* top nav */}
          <TopNav title={title} backBttn={backBttn} buttons={buttons} />
          {/* content */}
          <div id="contentDiv">{children}</div>
        </Container>
        <ScrollButton scrollStepInPx={150} delayInMs={16.66} />
      </div>
    );
  }
);

TeacherLayout.propTypes = {
  leftBarActive: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  backBttn: PropTypes.object,
  children: PropTypes.node.isRequired,
  buttons: PropTypes.node,
};

export default TeacherLayout;
