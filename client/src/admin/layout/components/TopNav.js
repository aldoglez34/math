import React from "react";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";

const TopHelperNav = React.memo(({ buttons, backBttn, title }) => {
  return (
    <div style={{ backgroundColor: "#0f5257" }}>
      <div style={{ padding: "0px 39px" }}>
        <div className="d-flex align-items-center" style={{ height: "63px" }}>
          {/* back button */}
          {backBttn ? (
            <Button
              variant="transparent"
              className="p-0 text-light"
              href={backBttn}
            >
              <i className="fas fa-chevron-left mr-1" />
              Atrás
            </Button>
          ) : null}
        </div>
        <div
          className="d-flex align-items-center"
          style={{
            paddingBottom: "20px",
          }}
        >
          {/* title */}
          <h1 className="mb-0 text-light">{title}</h1>
        </div>
        {buttons ? (
          <div
            className="d-flex flex-row align-items-center"
            style={{
              paddingBottom: "15px",
            }}
          >
            {buttons}
          </div>
        ) : null}
      </div>
    </div>
  );
});

TopHelperNav.propTypes = {
  buttons: PropTypes.node,
  title: PropTypes.string.isRequired,
  backBttn: PropTypes.string,
};

export default TopHelperNav;
