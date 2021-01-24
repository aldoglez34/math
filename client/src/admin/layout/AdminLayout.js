import React from "react";
import PropTypes from "prop-types";
import LeftNav from "./components/LeftNav";
import TopNav from "./components/TopNav";
import ScrollButton from "../../components/scrollbutton";

const TeacherLayout = React.memo(
  ({ leftBarActive, buttons, children, backBttn }) => {
    return (
      <div className="d-flex h-100">
        {/* vertical navbar */}
        <LeftNav leftBarActive={leftBarActive} />
        {/* main container */}
        <div style={{ marginLeft: "15rem" }} className="h-100 w-100">
          {/* top nav */}
          <TopNav buttons={buttons} backBttn={backBttn} />
          {/* content */}
          <div
            style={{
              padding: "35px 28px",
            }}
          >
            {children}
          </div>
        </div>
        <ScrollButton scrollStepInPx={150} delayInMs={16.66} />
      </div>
    );
  }
);

TeacherLayout.propTypes = {
  leftBarActive: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  buttons: PropTypes.node,
  backBttn: PropTypes.string,
};

export default TeacherLayout;
