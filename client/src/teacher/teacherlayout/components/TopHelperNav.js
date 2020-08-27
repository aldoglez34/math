import React from "react";
import { Navbar, Col, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import "./tophelpernav.scss";

const TopHelperNav = React.memo(({ backBttn, topBttn }) => {
  return (
    <div className="d-flex flex-row align-items-center" id="topHelperStyle">
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
      <strong className="ml-auto" id="adminstyle">
        <i className="fas fa-user-shield mr-1" />
        admin
      </strong>
    </div>
  );
});

TopHelperNav.propTypes = {
  backBttn: PropTypes.string,
  topBttn: PropTypes.node,
};

export default TopHelperNav;
