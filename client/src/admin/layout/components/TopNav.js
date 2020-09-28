import React from "react";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import "./topnav.scss";

const TopHelperNav = React.memo(({ buttons, backBttn, title }) => {
  return (
    <>
      <div className="d-flex align-items-center" id="topnavrow1">
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
      <div className="d-flex align-items-center" id="topnavrow2">
        {/* title */}
        <h1 className="mb-0 text-light">{title}</h1>
      </div>
      {buttons ? (
        <div className="d-flex flex-row align-items-center" id="topnavrow3">
          {buttons}
        </div>
      ) : null}
    </>
  );
});

TopHelperNav.propTypes = {
  buttons: PropTypes.node,
  title: PropTypes.string.isRequired,
  backBttn: PropTypes.string,
};

export default TopHelperNav;
