import React from "react";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import "./topnav.scss";
import { useSelector } from "react-redux";

const TopHelperNav = React.memo(({ buttons }) => {
  const admin = useSelector((state) => state.admin);

  return (
    <>
      <div className="d-flex align-items-center" id="topnavrow1">
        {/* back button */}
        {admin.backBttn ? (
          <Button
            variant="transparent"
            className="p-0 text-light"
            href={admin.backBttn.link}
          >
            <i className="fas fa-chevron-left mr-1" />
            {admin.backBttn.text}
          </Button>
        ) : null}
      </div>
      <div className="d-flex align-items-center" id="topnavrow2">
        {/* title */}
        <h1 className="mb-0 text-light">{admin.title ? admin.title : null}</h1>
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
};

export default TopHelperNav;
