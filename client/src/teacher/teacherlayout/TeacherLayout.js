import React from "react";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import LeftNav from "./components/LeftNav";
import TopNav from "./components/TopNav";
import "./teacherlayout.scss";

const TeacherLayout = React.memo(
  ({ title, leftBarActive, backBttn, buttons, children }) => {
    return (
      <div className="d-flex h-100">
        {/* vertical navbar */}
        <LeftNav leftBarActive={leftBarActive} className="h-100" />
        {/* main container */}
        <Container id="mainContainer" className="h-100" fluid>
          {/* top nav */}
          <TopNav title={title} backBttn={backBttn} buttons={buttons} />
          {/* content */}
          <div id="contentDiv">
            {children}
          </div>
        </Container>
      </div>
    );
  }
);

TeacherLayout.propTypes = {
  leftBarActive: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  backBttn: PropTypes.string,
  children: PropTypes.node.isRequired,
  buttons: PropTypes.node,
};

export default TeacherLayout;
