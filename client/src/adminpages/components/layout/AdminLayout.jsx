import React from "react";
import { node, string } from "prop-types";
import { LeftNav, TopNav } from "./components";
import { ScrollButton } from "../components";

export const AdminLayout = React.memo(
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

AdminLayout.propTypes = {
  leftBarActive: string.isRequired,
  children: node.isRequired,
  buttons: node,
  backBttn: string,
};
